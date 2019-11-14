cd projects/orders
npm version patch
cd ../../
ng build orders
cd dist/orders
npm pack
cd ../../../../portal
npm i ../apps/orders/dist/orders/*.tgz --save