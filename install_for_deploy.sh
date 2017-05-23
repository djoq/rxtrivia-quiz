#!/bin/bash
rm -rf ../rxtrivia/public/vue
cp -r ./dist/ ../rxtrivia/public/vue
rm -rf ../rxtrivia/public/static
cp -r ../rxtrivia/public/vue/static/ ../rxtrivia/public/static/
