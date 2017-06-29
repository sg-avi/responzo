export class MainController implements ng.IComponentController {

	private input: number;
	private x: number;

	constructor(private scope: ng.IScope, private mdSidenav: ng.material.ISidenavService, private timeout: ng.ITimeoutService) {
	}

	private toggleLeft = this.buildDelayedToggler('left');
	private toggleRight = this.buildToggler('right');
	public isOpenRight = function () {
		return this.mdSidenav('right').isOpen();
	};

	public $onInit(): void {
		this.x = this.input;
	}

	public debounce(func: () => any, wait: number | null): any {
		let timer: any;

		return () => {
			this.timeout.cancel(timer);
			timer = this.timeout(function () {
				timer = undefined;
				func();
			}, wait || 10);
		};
	}

	public buildDelayedToggler(navID: string): any {
		return this.debounce(() => {
			// Component lookup should always be available since we are not using `ng-if`
			this.mdSidenav(navID)
				.toggle()
				.then(function () {
					//$log.debug("toggle " + navID + " is done");
				});
		}, 200);


	}

	public buildToggler(navID: string): any {
		return () => {
			// Component lookup should always be available since we are not using `ng-if`
			this.mdSidenav(navID)
				.toggle()
				.then(function () {
					//$log.debug("toggle " + navID + " is done");
				});
		};
	}

}

MainController.$inject = ['$scope', '$mdSidenav', '$timeout'];
