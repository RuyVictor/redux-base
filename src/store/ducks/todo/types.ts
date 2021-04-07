// Action Types
export enum TodoTypes {
    ADD_ITEM = '@todo/ADD_ITEM',
    DEL_ITEM = '@todo/DEL_ITEM',
}

// Data Types


// State Types
export interface TodoState {
    readonly items: String[]
}