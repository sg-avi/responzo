import { EntriesService } from "services/entriesService";

export class ContentController implements ng.IComponentController {

	private listState: IListState;

	private listOfEntries: any[];
	private selectedEntry: any;

	constructor(entriesService: EntriesService, private mdSidenav: ng.material.ISidenavService) {
		this.listOfEntries = entriesService.getData();
		this.selectedEntry = this.listOfEntries[0];
	}

	public $onInit(): void {
		this.listState.SetListener((entry: any) => {
			this.selectedEntry = entry;
		});
	}

	public toggleLeft(): void {
		this.mdSidenav('left').toggle();
	}
}

ContentController.$inject = [EntriesService.SERVICE_NAME, '$mdSidenav'];
