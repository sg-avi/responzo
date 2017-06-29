export class EntryDescriptionController implements ng.IComponentController {
	private entry: any;

	constructor(private stateParams: ng.ui.IStateParamsService) {
	}

	public $onInit?(): void {
		this.entry = this.entry || this.stateParams['entry'];
	}
}

EntryDescriptionController.$inject = ['$stateParams'];
