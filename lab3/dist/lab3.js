class OwnerImpl {
    constructor(lastName, firstName, middleName, birthDate, documentType, documentSeries, documentNumber) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.middleName = middleName;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }
    getLastName() { return this.lastName; }
    getFirstName() { return this.firstName; }
    getMiddleName() { return this.middleName; }
    getBirthDate() { return this.birthDate; }
    getDocumentType() { return this.documentType; }
    getDocumentSeries() { return this.documentSeries; }
    getDocumentNumber() { return this.documentNumber; }
    printInfo() {
        console.log(`
            Информация о владелеце:
            ФИО: ${this.lastName} ${this.firstName} ${this.middleName}
            Дата рождения: ${this.birthDate.toLocaleDateString()}
            Документ: ${this.documentType}
            Серия: ${this.documentSeries}
            Номер: ${this.documentNumber}
        `);
    }
}
class VehicleImpl {
    constructor(brand, model, year, vin, registrationNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }
    getBrand() { return this.brand; }
    getModel() { return this.model; }
    getYear() { return this.year; }
    getVIN() { return this.vin; }
    getRegistrationNumber() { return this.registrationNumber; }
    getOwner() { return this.owner; }
    printVehicleInfo() {
        console.log(`
            Транспортное средство:
            Марка: ${this.brand}
            Модель: ${this.model}
            Год выпуска: ${this.year}
            VIN: ${this.vin}
            Регистрационный номер: ${this.registrationNumber}
        `);
    }
}
class CarImpl extends VehicleImpl {
    constructor(brand, model, year, vin, registrationNumber, owner, bodyType, carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.bodyType = bodyType;
        this.carClass = carClass;
    }
    getBodyType() { return this.bodyType; }
    getCarClass() { return this.carClass; }
    printVehicleInfo() {
        super.printVehicleInfo();
        console.log(`
            Тип кузова: ${this.bodyType}
            Класс автомобиля: ${this.carClass}
        `);
    }
}
class MotorbikeImpl extends VehicleImpl {
    constructor(brand, model, year, vin, registrationNumber, owner, frameType, isSport) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.frameType = frameType;
        this.isSport = isSport;
    }
    getFrameType() { return this.frameType; }
    getIsSport() { return this.isSport; }
    printVehicleInfo() {
        super.printVehicleInfo();
        console.log(`
            Тип рамы: ${this.frameType}
            Для спорта: ${this.isSport ? 'Да' : 'Нет'}
        `);
    }
}
class VehicleStorageImpl {
    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }
    getCreationDate() { return this.creationDate; }
    getVehicles() { return this.vehicles; }
    addVehicle(vehicle) { this.vehicles.push(vehicle); }
    getAllVehicles() { return this.vehicles; }
}
var DocumentTypes;
(function (DocumentTypes) {
    DocumentTypes["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocumentTypes["DrivingLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocumentTypes["MilitaryID"] = "\u0412\u043E\u0435\u043D\u043D\u044B\u0439 \u0431\u0438\u043B\u0435\u0442";
})(DocumentTypes || (DocumentTypes = {}));
var CarBodyType;
(function (CarBodyType) {
    CarBodyType["CBT0"] = "CarBodyType0";
    CarBodyType["CBT1"] = "CarBodyType1";
    CarBodyType["CBT2"] = "CarBodyType2";
    CarBodyType["CBT3"] = "CarBodyType3";
    CarBodyType["CBT4"] = "CarBodyType4";
})(CarBodyType || (CarBodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["CC0"] = "CarClass0";
    CarClass["CC1"] = "CarClass1";
    CarClass["CC2"] = "CarClass2";
    CarClass["CC3"] = "CarClass3";
    CarClass["CC4"] = "CarClass4";
})(CarClass || (CarClass = {}));
//
const owner0 = new OwnerImpl('Имя0', 'Фамилия0', 'Отчество0', new Date('0000-00-00'), DocumentTypes.Passport, '9999', '999999');
const owner1 = new OwnerImpl('Имя1', 'Фамилия1', 'Отчество1', new Date('0000-00-00'), DocumentTypes.MilitaryID, '9999', '999999');
const car = new CarImpl('Марка0', 'Модель0', 2025, 'vin0', 'regNum0', owner0, CarBodyType.CBT1, CarClass.CC1);
const motorbike = new MotorbikeImpl('МаркаМотика1', 'МодельМотика1', 2024, 'vin1', 'regNum1', owner1, '123', true);
const carStorage = new VehicleStorageImpl();
carStorage.addVehicle(car);
const motorbikeStorage = new VehicleStorageImpl();
motorbikeStorage.addVehicle(motorbike);
console.log('Информация о Владельце:');
owner0.printInfo();
console.log('\nИнформация об Автомобиле:');
car.printVehicleInfo();
console.log('\nИнформация о Мотоцикле:');
motorbike.printVehicleInfo();
console.log('\nИнформация о АвтомобилЯХ:');
carStorage.getAllVehicles().forEach(car => car.printVehicleInfo());
console.log('\nИнформация о МотоциклАХ:');
motorbikeStorage.getAllVehicles().forEach(motorbike => motorbike.printVehicleInfo());
