ng build orders
cd dist/orders
npm pack
cd ../../../../portal
npm i ../apps/orders/dist/orders/orders-0.0.1.tgz --save
