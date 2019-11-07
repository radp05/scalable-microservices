ng build orders
cd dist/orders
npm pack
cd ../../../../orders
npm i ../apps/orders/dist/orders/orders-0.0.2.tgz --save
