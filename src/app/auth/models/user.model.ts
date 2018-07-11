export class User {
  public Username: string;

  constructor(fields?: Partial<User>) {
    if (fields) Object.assign(this, fields);
  }
}
