#!/bin/bash
echo "----------------------------------------------------"
echo "*** Setup Started ***"
echo "----------------------------------------------------"
    
    # Generate certs
    mkdir -p egateway/config/certs
    cd egateway/config/certs
        openssl genrsa -out ss-key.pem 2048
        openssl req -new -sha256 \
            -subj "/C=IN/ST=Karnataka/L=Bangalore/O=Microservices/CN=scalableservices.com" \
            -key ss-key.pem -out ss-csr.pem
        openssl x509 -req -in ss-csr.pem -signkey ss-key.pem -out ss-cert.pem
    cd -

    # Build Portal
    mkdir -p frontend/certs
    cd frontend/certs
        openssl genrsa -out ss-key.pem 2048
        openssl req -new -sha256 \
            -subj "/C=IN/ST=Karnataka/L=Bangalore/O=Microservices/CN=scalableservices.com" \
            -key ss-key.pem -out ss-csr.pem
        openssl x509 -req -in ss-csr.pem -signkey ss-key.pem -out ss-cert.pem
    cd -

    cd frontend
        bash ./buildPortal.sh
    cd -
    # Create & Start Containers using docker-compose
    docker network create scalable_network
    docker-compose -f docker-compose-backend.yaml up -d
    docker-compose -f docker-compose-frontend.yaml up -d

echo "----------------------------------------------------"
echo "*** Setup Completed ***"
echo "----------------------------------------------------"