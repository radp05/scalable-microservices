cd projects/tickets
npm version patch
cd ../../
ng build tickets
cd dist/tickets
npm pack
cd ../../../../portal
npm i ../apps/tickets/dist/tickets/*.tgz --save