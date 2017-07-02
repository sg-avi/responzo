import "./content.less";
import { ContentController } from "./contentController";

export function ContentComponent(): ng.IComponentOptions {
    return {
      template: require("./_content.html"),
      controller: ContentController,
      bindings: {
          listState: '<'
      }
    };
}