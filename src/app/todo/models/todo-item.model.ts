export class TodoItem {
   public Title: string;
   public IsCompleted: boolean;

   constructor(fields?: Partial<TodoItem>) {
    if (fields) Object.assign(this, fields);
  }
}
