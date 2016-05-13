#!/bin/bash

PROJ=$(pwd)

mkdir tmp
cd tmp

TMPD=$(pwd)

if [ $TMPD == $PROJ ]; then
  echo 'Failed to change the directory'
  exit 1
fi

rm -rf server/
mkdir server

SERVER=$PROJ/server
TMPSERVER=$TMPD/server

cp -rf $SERVER/app $TMPSERVER/app
cp -rf $SERVER/config $TMPSERVER/config
cp -rf $SERVER/index.js $TMPSERVER
cp -rf $SERVER/package.json $TMPSERVER

cd $TMPSERVER

git init
git add --all
git commit -m 'Deploy Server'
git remote add server 'https://git.heroku.com/yummy-server.git'
git push server master --force

exit
