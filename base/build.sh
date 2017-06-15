#!/bin/bash

rm -fr ./output
tar zcvf bash.tar.gz --exclude node_modules --exclude log ./

mkdir ./output
mv bash.tar.gz ./output
