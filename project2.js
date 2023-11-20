// Create a class for vehicles and define properties (name, manufacturer, ID)
class Vehicle {
    constructor(name, manufacturer, id) {
      this.name = name;
      this.manufacturer = manufacturer;
      this.id = id;
    }
  }
  
  // Create a class for cars that inherits from the Vehicle class
  class Car extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  // Create a class for planes that inherits from the Vehicle class
  class Plane extends Vehicle {
    constructor(name, manufacturer, id, type) {
      super(name, manufacturer, id);
      this.type = type;
    }
  }
  
  // Create a class named "Employee" to represent employees and define properties (name, ID, date of birth)
  class Employee {
    constructor(name, id, dateOfBirth) {
      this.name = name;
      this.id = id;
      this.dateOfBirth = dateOfBirth;
    }
  }
  
  // Create a class for drivers that inherits from the Employee class
  class Driver extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
      super(name, id, dateOfBirth);
      this.licenseId = licenseId;
    }
  }
  
  // Create a class for pilots that inherits from the Employee class
  class Pilot extends Employee {
    constructor(name, id, dateOfBirth, licenseId) {
      super(name, id, dateOfBirth);
      this.licenseId = licenseId;
    }
  }
  
  // Create a class for reservations with driver, vehicle, and reservation details (reservationDate, employeeId, vehicleId, reservationID)
  class Reservation {
    constructor(reservationDate, employeeId, vehicleId, reservationId) {
      this.reservationDate = reservationDate;
      this.employeeId = employeeId;
      this.vehicleId = vehicleId;
      this.reservationId = reservationId;
    }
  }
  
  //Create objects for three cars and two planes
  const car1 = new Car('Sedan', 'Toyota', 1, 'gas');
  const car2 = new Car('SUV', 'Honda', 2, 'electric');
  const car3 = new Car('Hatchback', 'Ford', 3, 'gas');
  
  const plane1 = new Plane('Jet', 'Boeing', 4, 'commercial');
  const plane2 = new Plane('Propeller', 'Cessna', 5, 'private');
  
  // Write a function to check compatibility and make reservations
  function makeReservation(employeeId, vehicleId) {
    const employee = employees.find(emp => emp.id === employeeId);
    const vehicle = vehicles.find(vehicle => vehicle.id === vehicleId);
  
    if (employee instanceof Pilot && vehicle instanceof Car) {
      console.log('Mismatch: Pilots cannot drive cars.');
    } else if (employee instanceof Driver && vehicle instanceof Plane) {
      console.log('Mismatch: Drivers cannot fly planes.');
    } else {
      const reservation = new Reservation(new Date(), employeeId, vehicleId, reservations.length + 1);
      reservations.push(reservation);
      console.log('Reservation made:', reservation);
    }
  }
  
  // Save all reservations in an array
  const reservations = [];
 
  
  // Create an array for employees and vehicles
  const employees = [
    new Driver('John Smith', 1, '01/15/1985', 'D12345'),
    new Pilot('Alice Johnson', 2, '05/22/1990', 'P67890'),
    new Driver('Bob Davis', 3, '11/30/1988', 'D54321')
  ];
  
  const vehicles = [car1, car2, car3, plane1, plane2];
  
  // Additional Step: Test making reservations
  makeReservation(2, 1);  
  makeReservation(1, 4); 
  makeReservation(3, 2);  
  makeReservation(2, 5);  
   
  // Print the content of the reservations array using the map function
  console.log('The Reservations List:');
  const reservationDetails = reservations.map(reservation => {
    const employee = employees.find(emp => emp.id === reservation.employeeId);
    const vehicle = vehicles.find(vehicle => vehicle.id === reservation.vehicleId);
    return { reservationId: reservation.reservationId, employee: employee.name, vehicle: vehicle.name };
  });
  console.log(reservationDetails);