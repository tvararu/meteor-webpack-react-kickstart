cd %~dp0\..\meteor
rd /s /q react-build-generated

set WEBPACK_CONFIG=%~dp0\..\webpack\development.config.js
meteor --settings ../settings/development.json
