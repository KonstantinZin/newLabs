export declare namespace Transport {
    enum DocumentTypes {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        DrivingLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
        MilitaryID = "\u0412\u043E\u0435\u043D\u043D\u044B\u0439 \u0431\u0438\u043B\u0435\u0442"
    }
    enum CarBodyType {
        CBT0 = "CarBodyType0",
        CBT1 = "CarBodyType1",
        CBT2 = "CarBodyType2",
        CBT3 = "CarBodyType3",
        CBT4 = "CarBodyType4"
    }
    enum CarClass {
        CC0 = "CarClass0",
        CC1 = "CarClass1",
        CC2 = "CarClass2",
        CC3 = "CarClass3",
        CC4 = "CarClass4"
    }
    interface Owner {
        getLastName(): string;
        getFirstName(): string;
        getMiddleName(): string;
        getBirthDate(): Date;
        getDocumentType(): DocumentTypes;
        getDocumentSeries(): string;
        getDocumentNumber(): string;
        printInfo(): void;
    }
    interface Vehicle {
        getBrand(): string;
        getModel(): string;
        getYear(): number;
        getVIN(): string;
        getRegistrationNumber(): string;
        getOwner(): Owner;
        printVehicleInfo(): void;
    }
    interface Car extends Vehicle {
        getBodyType(): CarBodyType;
        getCarClass(): CarClass;
    }
    interface Motorbike extends Vehicle {
        getFrameType(): string;
        getIsSport(): boolean;
    }
    interface VehicleStorage<T extends Vehicle> {
        getCreationDate(): Date;
        getVehicles(): T[];
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }
    class OwnerImpl implements Owner {
        private lastName;
        private firstName;
        private middleName;
        private birthDate;
        private documentType;
        private documentSeries;
        private documentNumber;
        constructor(lastName: string, firstName: string, middleName: string, birthDate: Date, documentType: DocumentTypes, documentSeries: string, documentNumber: string);
        getLastName(): string;
        getFirstName(): string;
        getMiddleName(): string;
        getBirthDate(): Date;
        getDocumentType(): DocumentTypes;
        getDocumentSeries(): string;
        getDocumentNumber(): string;
        printInfo(): void;
    }
    class VehicleImpl implements Vehicle {
        private brand;
        private model;
        private year;
        private vin;
        private registrationNumber;
        private owner;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner);
        getBrand(): string;
        getModel(): string;
        getYear(): number;
        getVIN(): string;
        getRegistrationNumber(): string;
        getOwner(): Owner;
        printVehicleInfo(): void;
    }
    class CarImpl extends VehicleImpl implements Car {
        private bodyType;
        private carClass;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: CarBodyType, carClass: CarClass);
        getBodyType(): CarBodyType;
        getCarClass(): CarClass;
        printVehicleInfo(): void;
    }
    class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private frameType;
        private isSport;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: string, isSport: boolean);
        getFrameType(): string;
        getIsSport(): boolean;
        printVehicleInfo(): void;
    }
    class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        private creationDate;
        private vehicles;
        constructor();
        getCreationDate(): Date;
        getVehicles(): T[];
        addVehicle(vehicle: T): void;
        getAllVehicles(): T[];
    }
}
