import "./entryDescription.less";
import { EntryDescriptionController } from "./entryDescriptionController";

export function EntryDescriptionComponent(): ng.IComponentOptions {
    return {
      template: require("./_entryDescription.html"),
      controller: EntryDescriptionController,
      bindings: {
          entry: '<'
      }
    };
}