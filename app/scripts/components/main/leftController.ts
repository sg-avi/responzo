export class LeftController implements ng.IComponentController {

	constructor(private scope: ng.IScope, private mdSidenav: ng.material.ISidenavService) {
		this.applicationList = [
			'StarCraft Universe', 'Preved-IWA-1', 'Preved-IWA-2', 'Weekly Ops'
		]
	}

	private applicationList: string[];

	public close(): void {
		this.mdSidenav('left').close()
	}

}

LeftController.$inject = ['$scope', '$mdSidenav'];
