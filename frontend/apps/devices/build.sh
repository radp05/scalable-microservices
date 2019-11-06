ng build devices
cd dist/devices
npm pack
cd ../../../../portal
npm i ../apps/devices/dist/devices/devices-0.0.2.tgz --save