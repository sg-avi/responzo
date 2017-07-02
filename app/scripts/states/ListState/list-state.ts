abstract class BaseListState implements IListState {

    protected onSelected: (selectedItem: any) => void;

    constructor() {}

    public SetListener(onSelected: (selectedItem: any) => void) {
        this.onSelected = onSelected;
    }

    public abstract ItemSelected(selectedItem: any): void;
}

export class DesktopListState extends BaseListState implements IListState {    
    public ItemSelected(selectedItem: any): void {
        this.onSelected(selectedItem);
    }
}

export class MobileListState extends BaseListState implements IListState {
    
    constructor(private state: ng.ui.IStateService) {
        super();
    }

    public ItemSelected(selectedItem: any): void {
        this.state.go('details', {entry: selectedItem})
    }
}