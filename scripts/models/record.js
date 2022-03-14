class Record {
  // Private static property
  static _records = {};

  constructor({ ...payload }) {
    if (this.constructor.name === "Record")
      throw new Error("Ga boleh inisiasi dari kelas abstract");
    this.constructor.attributes.forEach((attr) => (this[attr] = payload[attr]));
  }

  save() {
    const records = [...this.constructor.records];
    const idx = records.findIndex((i) => i.id === this.id);

    idx > -1 ? (records[idx] = this) : records.push(this);

    this.constructor.setRecords(records);
  }

  // Public static methods
  static create(payload) {
    payload.id = this.generateId();
    if (this.attributes.includes("createdAt")) payload.createdAt = new Date();
    if (this.attributes.includes("updatedAt"))
      payload.updatedAt = payload.createdAt;

    const instance = new this(payload);

    instance.save();

    return instance;
  }

  static update(id, payload) {
    const oldRecord = this.records.find((record) => record.id === id);

    if (!oldRecord) return;

    if (this.attributes.includes("updatedAt")) payload.updatedAt = new Date();

    const record = new this({
      ...oldRecord,
      ...payload,
    });

    record.save();

    return record;
  }

  static findAll() {
    return this.records;
  }

  static find(id) {
    return this.records.find((i) => i.id === id);
  }

  static destroy(id) {
    this.setRecords(this.records.filter((i) => i.id !== id));
  }

  static get records() {
    return this._records[this.name] || [];
  }

  static setRecords(records) {
    this._records[this.name] = records;
  }

  // Protected static methods
  static generateId() {
    const records = this._records[this.name] || [];
    const sortedRecords = records.sort((a, b) => a.id - b.id);
    const latestRecordId = sortedRecords[sortedRecords.length - 1]?.id || 0;
    return latestRecordId + 1;
  }
}
