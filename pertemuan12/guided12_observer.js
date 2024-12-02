class WeatherStation {
  constructor() {
    this.devices = []; 
    this.temperature = 0; 
  }

  addDevice(device) {
    this.devices.push(device);
    console.log(`${device.name} ditambahkan ke stasiun cuaca.`);
  }

  removeDevice(device) {
    this.devices = this.devices.filter((d) => d !== device);
    console.log(`${device.name} dihapus dari stasiun cuaca.`);
  }

  updateTemperature(temp) {
    this.temperature = temp;
    console.log(`Suhu diperbarui ke ${temp}°C. Memberi tahu perangkat...`);
    this.devices.forEach((device) => device.notify(temp));
  }
}

class Device {
  constructor(name) {
    this.name = name;
  }

  notify(temp) {
    console.log(`${this.name} menerima suhu baru: ${temp}°C`);
  }
}

const station = new WeatherStation();
const phone = new Device("Phone");
const tablet = new Device("Tablet");

station.addDevice(phone);
station.addDevice(tablet);
station.updateTemperature(25);
station.removeDevice(phone);
station.updateTemperature(30); 
