// Action Types
export enum TodoTypes {
    ADD_ITEM = '@todo/ADD_ITEM',
    DEL_ITEM = '@todo/DEL_ITEM',
    UPDATE_ITEM = '@todo/UPDATE_ITEM',
}

// Data Types


// State Types
export interface TodoState {
    readonly items: String[]
}