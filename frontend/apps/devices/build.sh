cd projects/devices
npm version patch
cd ../../
ng build devices
cd dist/devices
npm pack
cd ../../../../portal
npm i ../apps/devices/dist/devices/*.tgz --save