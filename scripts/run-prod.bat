cd %~dp0\..
rd /s /q meteor/react-build-generated
webpack --config webpack/production.config.js

cd meteor
meteor --settings ../settings/production.json
