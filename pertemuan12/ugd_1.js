//alif _231712467
class ConnectionManager {
  constructor() {
    if (!ConnectionManager.instance) {
      ConnectionManager.instance = this;
      this.connections = [];
    }
    return ConnectionManager.instance;
  }

  createConnection(type, host) {
    const factory = new DatabaseFactory();
    const connection = factory.createDatabase(type, host);
    this.connections.push(connection);
  }
  getConnections() {
    return this.connections;
  }
}

class DatabaseFactory {
  createDatabase(type, host) {
    switch (type.toLowerCase()) {
      case "mysql":
        return new MySQL(host);
      case "postgresql":
        return new PostgreSQL(host);
      default:
        throw new Error(`Tipe database "${type}" tidak dikenal.`);
    }
  }
}

class Database {
  constructor(type, host) {
    this.type = type;
    this.host = host;
  }

  connect() {
    console.log(`Terkoneksi ke ${this.type} di ${this.host}`);
  }
}

class MySQL extends Database {
  constructor(host) {
    super("MySQL", host);
  }
}

class PostgreSQL extends Database {
  constructor(host) {
    super("PostgreSQL", host);
  }
}
const manager = new ConnectionManager();
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach((conn) => conn.connect());

console.log(connections);
