import "./content.less";
import { ContentController } from "./contentController";

export function MobileContentComponent(): ng.IComponentOptions {
    return {
      template: require("./_content.html"),
      controller: ContentController,
      bindings: {
          input: '<'
      }
    };
}