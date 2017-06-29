import * as angular from "angular";
import {MainComponent} from "components/main/mainComponent";
import {DesktopContentComponent} from "components/content/desktop/contentComponent";
import {MobileContentComponent} from "components/content/mobile/contentComponent";
import {EntryDescriptionComponent} from "components/entry-description/entryDescriptionComponent";
import {EntriesService} from "services/entriesService";
import {LeftController} from "components/main/leftController";
import 'angular-material/angular-material.min.css';
import "ionicons/dist/css/ionicons.css";

import "./state-animation.less";

var mdl: ng.IModule = angular.module('SampleApp', [require("angular-ui-router").default, require("angular-material")]);

mdl.component('mainComponent', MainComponent());
mdl.component('desktopContent', DesktopContentComponent());
mdl.component('mobileContent', MobileContentComponent());
mdl.component('entryDescriptionComponent', EntryDescriptionComponent());

mdl.controller('leftController', LeftController);

mdl.service(EntriesService.SERVICE_NAME, EntriesService);


mdl.config(['$compileProvider', (compileProvider: ng.ICompileProvider) => {
	compileProvider.debugInfoEnabled(false);
	compileProvider.commentDirectivesEnabled(false);
	compileProvider.cssClassDirectivesEnabled(false);
}]);

mdl.config([
	'$stateProvider', '$locationProvider',
	(stateProvider: angular.ui.IStateProvider, locationProvider: ng.ILocationProvider) => {

		locationProvider.html5Mode(true);

		stateProvider.state('home', {
			url: '/',
			views: {
				main: {
					component: 'mainComponent'
				}
			}
		});

		stateProvider.state('desktopContent', {
			url: 'desktop',
			parent: 'home',
			component: 'desktopContent'
		});

		stateProvider.state('mobileContent', {
			url: 'mobile',
			parent: 'home',
			component: 'mobileContent'
		});

		stateProvider.state('mobileDetails', {
			url: 'mobileDetails',
			parent: 'home',
			component: 'entryDescriptionComponent',
			params: {entry: null}
		})
	}
]);

mdl.constant('config', require('config'));
