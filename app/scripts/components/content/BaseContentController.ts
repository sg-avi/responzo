import {EntriesService} from "services/entriesService";

export abstract class BaseContentController {

	protected listOfEntries: any[];

	constructor(protected mdSidenav: ng.material.ISidenavService, entriesService: EntriesService) {
		this.listOfEntries = entriesService.getData();
	}

	public toggleLeft(): void {
		this.mdSidenav('left').toggle();
	}
}