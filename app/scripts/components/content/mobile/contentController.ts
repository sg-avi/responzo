import {EntriesService} from "services/entriesService";
import {BaseContentController} from "../BaseContentController";

export class ContentController extends BaseContentController implements ng.IComponentController {

	constructor(mdSidenav: ng.material.ISidenavService, EntriesService: EntriesService, private state: ng.ui.IStateService) {
		super(mdSidenav, EntriesService);
		this.listOfEntries = EntriesService.getData();
	}

	public showEntry(entry: any): void {
		this.state.go('mobileDetails', {entry})
	}
}

ContentController.$inject = ['$mdSidenav', EntriesService.SERVICE_NAME, '$state'];
