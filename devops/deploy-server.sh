#!/bin/bash

PROJ=$MYPROJ

cd $PROJ
mkdir tmp

cd tmp
INNER=$(pwd)

if [ $INNER == $PROJ ]; then
  echo $PROJ
  echo $INNER
  echo 'Failed to change the directory'
  exit 1
fi

rm -rf server/
mkdir server

cd $PROJ
cp -rf ./server/app tmp/server/app
cp -rf ./server/config tmp/server/config
cp -rf ./server/index.js tmp/server/index.js
cp -rf ./server/package.json tmp/server/package.json

cd $PROJ/tmp/server/

if [ $INNER == $PROJ ]; then
  echo $PROJ
  echo $INNER
  echo 'Failed to change the directory'
  exit 1
fi

git init
git add --all
git commit -m 'Deploy Server'
git remote add server 'https://git.heroku.com/yummy-server.git'
git push server master --force

exit
