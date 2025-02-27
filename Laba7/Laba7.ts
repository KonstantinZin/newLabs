//Вариант 5
//Автор: Зинченко Константин 6201-090301D

import { OwnerImpl, VehicleImpl, VehicleStorageImpl } from './Laba7_2';

const owner1 = new OwnerImpl('Ф1', 'И1', 'О1', 'doc1');
const owner2 = new OwnerImpl('Ф2', 'И2', 'О2','doc2');
const owner3 = new OwnerImpl('Ф3', 'И3', 'О3','doc3');

const vehicle1 = new VehicleImpl('Mark1', 'AModel', 'RN1', owner1);
const vehicle2 = new VehicleImpl('Mark2', 'CModel', 'RN2', owner2);
const vehicle3 = new VehicleImpl('Mark3', 'DModel', 'RN3', owner3);

const storage = new VehicleStorageImpl<VehicleImpl>();
storage.addVehicle(vehicle1);
storage.addVehicle(vehicle2);
storage.addVehicle(vehicle3);

console.log('Сортировка по модели от Я до А: ');
storage.sortByModel().forEach(vehicle => 
    console.log(`${vehicle.getVIN()} - ${vehicle.getRegistrationNumber()}`)
);

console.log('\nФильтрация по документу: ');
storage.filterByOwnerDoc('Doc2').forEach(vehicle => 
    console.log(vehicle.getBriefInfo())
);

console.log('\nИнформация о ТС:');
console.log(vehicle1.getBriefInfo());