interface InventoryStatus {
    label: string;
    value: string;
}
export interface Pet {
    id?: string;
    key?: string;
    code?: string;
    name?: string;
    // description?: string;
    breed?: string;
    age?: number;
    weight?: number;
    color?: string;
    sex?: string;
    // quantity?: number;
    inventoryStatus?: InventoryStatus;
    // category?: string;
    image?: string;
    rating?: number;
}