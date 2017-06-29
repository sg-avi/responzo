export class RightController implements ng.IComponentController {

	constructor(private scope: ng.IScope, private mdSidenav: ng.material.ISidenavService) {
	}

	public close(): void {
		this.mdSidenav('right').close()
	}

}

RightController.$inject = ['$scope', '$mdSidenav'];
