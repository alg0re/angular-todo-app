export class Account {
  public Login: string;
  public Password: string;

  constructor(fields?: Partial<Account>) {
    if (fields) Object.assign(this, fields);
  }

  public equals(other: Account): boolean {
    if (other === null)
      return false;

    if (this.Login === other.Login
      && this.Password === other.Password)
      return true;

    return false;
  }
}
