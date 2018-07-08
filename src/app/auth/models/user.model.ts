export class User {
  public Login: string;
  public Password: string;

  constructor(fields?: Partial<User>) {
    if (fields) Object.assign(this, fields);
  }
}
