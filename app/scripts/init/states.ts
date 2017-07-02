import * as mdl from "./angularModule";
import * as isMobile from "./isMobile";
import * as appStates from "states";

mdl.default.config([
	'$stateProvider', '$locationProvider',
	(stateProvider: angular.ui.IStateProvider, locationProvider: ng.ILocationProvider) => {

		locationProvider.html5Mode(true);

		stateProvider.state('Content', {
			url: '/',
			component: 'content',
            resolve: {
                listState: ['$state', (state: ng.ui.IStateService) => {
                    if (isMobile.default()) {
                        return new appStates.MobileListState(state);
                    }

                    return new appStates.DesktopListState();
                }]
            }
		});

		stateProvider.state('details', {
			url: 'details',
			component: 'entryDescriptionComponent',
			params: {entry: null}
		})
	}
]);