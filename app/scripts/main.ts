import {MainComponent} from "components/main/mainComponent";
import {ContentComponent} from "components/content/contentComponent";
import {EntryDescriptionComponent} from "components/entry-description/entryDescriptionComponent";
import {EntriesService} from "services/entriesService";
import {LeftController} from "components/main/leftController";
import 'angular-material/angular-material.min.css';
import "ionicons/dist/css/ionicons.css";
import "./state-animation.less";

import "./init/config";
import "./init/states";

var mdl: ng.IModule = require("./init/angularModule").default;

mdl.component('mainComponent', MainComponent());
mdl.component('content', ContentComponent());
mdl.component('entryDescriptionComponent', EntryDescriptionComponent());

mdl.controller('leftController', LeftController);

mdl.service(EntriesService.SERVICE_NAME, EntriesService);

mdl.constant('config', require('config'));
