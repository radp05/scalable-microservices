# From Base Image
FROM nginx:alpine

# Labels
LABEL Repository="saibabanadh/portal" Creater="Sai Baba Nadh Konda" email="saibabanadh@gmail.com"

# Work directory
WORKDIR /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy portal build
COPY portal/dist/portal/ .
