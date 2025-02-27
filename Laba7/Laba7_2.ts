import { Owner, Vehicle, VehicleStorage } from './Laba7_3';

export class OwnerImpl implements Owner {
    constructor(
        private lastName: string,
        private firstName: string,
        private middleName: string,
        private doc: string
    ) {}

    getLastName(): string { return this.lastName; }
    getFirstName(): string { return this.firstName; }
    getMiddleName(): string { return this.middleName; }
    getDoc(): string {return this.doc;}
    
    getFullName(): string {
        return `${this.lastName} ${this.firstName} ${this.middleName}`;
    }
}

export class VehicleImpl implements Vehicle {
    constructor(
        private brand: string,
        private vin: string,
        private registrationNumber: string,
        private owner: Owner
    ) {}

    getBrand(): string { return this.brand; }
    getVIN(): string { return this.vin; }
    getRegistrationNumber(): string { return this.registrationNumber; }
    getOwner(): Owner { return this.owner; }

    getBriefInfo(): string {
        return JSON.stringify(`VIN: ${this.vin}, Владелец: ${this.owner.getFullName()}, Регистрационный номер: ${this.registrationNumber}`);
    }
}

export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private vehicles: T[] = [];

    getVehicles(): T[] { return this.vehicles; }
    
    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    sortByModel(): T[] {
        return [...this.vehicles].sort((b, a) => 
            a.getVIN().localeCompare(b.getVIN())
        );
    }

    filterByOwnerDoc(doc: string): T[] {
        const searchDoc = doc.toLowerCase();
        return this.vehicles.filter(vehicle => 
            vehicle.getOwner().getDoc().toLowerCase() === searchDoc
        );
    }
}