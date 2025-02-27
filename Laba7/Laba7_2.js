"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleStorageImpl = exports.VehicleImpl = exports.OwnerImpl = void 0;
class OwnerImpl {
    constructor(lastName, firstName, middleName, doc) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.doc = doc;
    }
    getLastName() { return this.lastName; }
    getFirstName() { return this.firstName; }
    getMiddleName() { return this.middleName; }
    getDoc() { return this.doc; }
    getFullName() {
        return `${this.lastName} ${this.firstName} ${this.middleName}`;
    }
}
exports.OwnerImpl = OwnerImpl;
class VehicleImpl {
    constructor(brand, vin, registrationNumber, owner) {
        this.brand = brand;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    getBrand() { return this.brand; }
    getVIN() { return this.vin; }
    getRegistrationNumber() { return this.registrationNumber; }
    getOwner() { return this.owner; }
    getBriefInfo() {
        return JSON.stringify(`VIN: ${this.vin}, Владелец: ${this.owner.getFullName()}, Регистрационный номер: ${this.registrationNumber}`);
    }
}
exports.VehicleImpl = VehicleImpl;
class VehicleStorageImpl {
    constructor() {
        this.vehicles = [];
    }
    getVehicles() { return this.vehicles; }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    sortByModel() {
        return [...this.vehicles].sort((b, a) => a.getVIN().localeCompare(b.getVIN()));
    }
    filterByOwnerDoc(doc) {
        const searchDoc = doc.toLowerCase();
        return this.vehicles.filter(vehicle => vehicle.getOwner().getDoc().toLowerCase() === searchDoc);
    }
}
exports.VehicleStorageImpl = VehicleStorageImpl;
