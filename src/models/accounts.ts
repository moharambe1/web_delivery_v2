export enum RolesEnum {
  ADMIN = "ADMIN",
  DILIVERY = "DILIVERY",
  CLIENTS = "CLIENTS",
}

export class Accounts {
  constructor(id: number, role: RolesEnum) {
    this.id = id;
    this.role = role;
  }

  id: number;
  role: RolesEnum;
}
