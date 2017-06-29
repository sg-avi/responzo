import {EntriesService} from "services/entriesService";
import {BaseContentController} from "../BaseContentController";

export class ContentController extends BaseContentController implements ng.IComponentController {

	constructor(mdSidenav: ng.material.ISidenavService, EntriesService: EntriesService) {
		super(mdSidenav, EntriesService);
		this.listOfEntries = EntriesService.getData();
	}

}

ContentController.$inject = ['$mdSidenav', EntriesService.SERVICE_NAME];
