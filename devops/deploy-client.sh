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

rm -rf client/
echo | pwd

mkdir client

cd $PROJ

cp -rf ./client/app tmp/client/app
cp -rf ./client/config tmp/client/config
cp -rf ./client/public tmp/client/public
cp -f ./client/ember-cli-build.js tmp/client/
cp -f ./client/bower.json tmp/client/
cp -f ./client/package.json tmp/client/

cd $PROJ/tmp/client/

if [ $INNER == $PROJ ]; then
  echo $PROJ
  echo $INNER
  echo 'Failed to change the directory'
  exit 1
fi

git init
git add --all
git commit -m 'Deploy Client'
git remote add client 'https://git.heroku.com/yummy-time.git'
git push client master --force

exit
