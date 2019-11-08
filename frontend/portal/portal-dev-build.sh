# Create directory to store generated tar file
mkdir -p packages

# Build Device app
cd ../apps/devices
npm i # Library npm install - Dependency
ng build devices
cd dist/devices
npm pack
mv ./*.tgz ../../../../portal/packages/
cd ../../../../portal
npm i ./packages/*.tgz --save # Need to change thi line for better script
npm i # Portal npm install - Dependency
ng serve --port 80