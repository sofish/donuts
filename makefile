GULP=node_modules/gulp/bin/gulp.js

run:
	cordova run ios --device

prepare:
	npm install -g cordova

free-ios:
	npm install -g ios-sim && npm install -g ios-deploy

debug:
	cordova plugin add cordova-plugin-console

icon:
	npm install cordova-icon -g && npm install cordova-splash -g

statusbar:
	cordova plugin add cordova-plugin-statusbar

dev:
	$(GULP) dev
