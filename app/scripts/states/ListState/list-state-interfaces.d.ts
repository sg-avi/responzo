declare interface IListState {
    ItemSelected(selectedItem: any): void;
    SetListener(onSelected: (selectedItem: any) => void): void;
}