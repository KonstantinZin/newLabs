export interface Owner {
    getLastName(): string;
    getFirstName(): string;
    getMiddleName(): string;
    getFullName(): string;
    getDoc(): string;
}

export interface Vehicle {
    getBrand(): string;
    getVIN(): string;
    getRegistrationNumber(): string;
    getOwner(): Owner;
    getBriefInfo(): string;
}

export interface VehicleStorage<T extends Vehicle> {
    getVehicles(): T[];
    addVehicle(vehicle: T): void;
    sortByModel(): T[];
    filterByOwnerDoc(lastName: string): T[];
}