export type TodoItem = {
  id: number;
  title: string;
};

export async function getTodos(): Promise<TodoItem[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (response.ok) {
    return response.json();
  }
  throw new Error('BadRequest');
}
