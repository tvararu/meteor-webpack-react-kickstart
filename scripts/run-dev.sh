#!/bin/bash
ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/..
cd $ROOT_FOLDER/meteor
rm -rf react-build-generated

export WEBPACK_CONFIG=$ROOT_FOLDER/webpack/development.config.js
meteor --settings $ROOT_FOLDER/settings/development.json
