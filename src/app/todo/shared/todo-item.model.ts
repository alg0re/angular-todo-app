export class TodoItem {
   public Title: string;

   constructor(fields?: Partial<TodoItem>) {
    if (fields) Object.assign(this, fields);
  }
}
