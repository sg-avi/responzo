import * as mdl from "./angularModule";
import * as angular from "angular";

mdl.default.config(['$compileProvider', (compileProvider: ng.ICompileProvider) => {
	compileProvider.debugInfoEnabled(false);
	compileProvider.commentDirectivesEnabled(false);
	compileProvider.cssClassDirectivesEnabled(false);
}]);

mdl.default.run(['$rootScope', ($rootScope: ng.IRootScopeService) => {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);

mdl.default.run(['$window', '$state', (window: ng.IWindowService, state: ng.ui.IStateService) => {
	angular.element(window).bind('resize', () => {
		state.reload();
	});
}]);