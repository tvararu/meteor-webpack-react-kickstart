#!/bin/bash
ROOT_FOLDER=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

cd $ROOT_FOLDER
rm -Rf meteor/react-build-generated
webpack --config webpack/production.config.js

cd meteor
meteor --settings $ROOT_FOLDER/settings/production.json
