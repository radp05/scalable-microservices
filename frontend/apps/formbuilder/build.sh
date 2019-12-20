cd projects/formbuilder
npm version patch
cd ../../
ng build formbuilder
cd dist/formbuilder
npm pack
cd ../../../../portal
npm i ../apps/formbuilder/dist/formbuilder/*.tgz --save