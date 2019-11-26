
echo "##### Portal Build Started #####"
# Create packages directory under portal
mkdir -p $(pwd)/portal/packages

# Build each app under micro-apps
for app in $(pwd)/apps/*; do
    if [ -d ${app} ]; then
        microApp="${app##*/}"
        cd $app
        
        echo " ### Packaging Started for Micro-App: $microApp ###"
        # rm -rf package-lock.json
        npm install --save
        ng build $microApp
        npm pack dist/$microApp/
        echo " ### Packaging Completed for Micro-App: $microApp ###"
        
        # Move .tgz file to portal packages
        cd - ; mv $(pwd)/apps/$microApp/$microApp-*.tgz $(pwd)/portal/packages/
    fi
done

cd $(pwd)/portal

# Install micro-apps in portal app
echo "### Installing packages in Portal ###"
for tgz in $(pwd)/packages/*; do
    echo "Installing package : ${tgz##*/}"
    npm install $(pwd)/packages/"${tgz##*/}" --save
done

# Installing node_modules in portal app
echo "### Installing node_modules in portal app ###"
# rm -rf package-lock.json
npm install --save

# Build the portal
ng build --prod
echo "##### Portal Build Completed #####"
exit 0;