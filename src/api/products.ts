export type Product = {
  id: number;
  title: string;
};

export async function getProducts(): Promise<Product[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (response.ok) {
    return response.json();
  }
  throw new Error('BadRequest');
}
