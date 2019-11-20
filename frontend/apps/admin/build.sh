cd projects/admin
npm version patch
cd ../../
ng build admin
cd dist/admin
npm pack
cd ../../../../portal
npm i ../apps/admin/dist/admin/*.tgz --save