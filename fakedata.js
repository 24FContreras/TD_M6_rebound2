import { faker } from "@faker-js/faker/locale/es";
import casual from "casual";

//El programa genera pasajeros de vuelos aleatorios
class pasajero {
  nombre = casual.first_name;
  apellido = casual.last_name;
  destino = faker.location.country();
  aerolinea = faker.airline.airline();
  avion = faker.airline.airplane();
  vuelo = faker.airline.flightNumber();
  asiento = faker.airline.seat();
  clase = faker.helpers.arrayElement([
    "Primera clase",
    "Clase ejecutiva",
    "Clase premium economy",
    "Clase económica",
  ]);

  get informacionPasajero() {
    return `El pasajero ${this.nombre} ${this.apellido} está asignado al asiento ${this.asiento} de la sección ${this.clase}`;
  }

  get informacionVuelo() {
    return `El vuelo ${this.vuelo} de ${this.aerolinea.name}, realizado en un avión ${this.avion.name}, tiene como destino ${this.destino}.`;
  }
}

const pasajeroUno = new pasajero();

console.log(pasajeroUno.informacionPasajero);
console.log(pasajeroUno.informacionVuelo);
