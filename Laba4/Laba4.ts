import { Transport } from './Laba4_2';

const owner0 = new Transport.OwnerImpl(
    'Имя0',
    'Фамилия0',
    'Отчество0',
    new Date('0000-00-00'),
    Transport.DocumentTypes.Passport,
    '9999',
    '999999'
);

const owner1 = new Transport.OwnerImpl(
    'Имя1',
    'Фамилия1',
    'Отчество1',
    new Date('0000-00-00'),
    Transport.DocumentTypes.MilitaryID,
    '9999',
    '999999'
);


const car = new Transport.CarImpl(
    'Марка0',
    'Модель0',
    2025,
    'vin0',
    'regNum0',
    owner0,
    Transport.CarBodyType.CBT1,
    Transport.CarClass.CC1
);

const motorbike = new Transport.MotorbikeImpl(
    'МаркаМотика1',
    'МодельМотика1',
    2024,
    'vin1',
    'regNum1',
    owner1,
    '123',
    true
);

const carStorage = new Transport.VehicleStorageImpl<Transport.CarImpl>();
carStorage.addVehicle(car);

const motorbikeStorage = new Transport.VehicleStorageImpl<Transport.MotorbikeImpl>();
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