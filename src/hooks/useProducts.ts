import { useQuery } from 'react-query';
import { getTodos, TodoItem } from 'src/api';
import { useMemo } from 'react';

export type Product = TodoItem & {
  imageSrc: string;
  price: number;
};

type UseProducts = {
  products: Product[];
  isLoading: boolean;
}

export function useProducts(): UseProducts {
  const { data , isLoading} = useQuery('products', getTodos);

  const products: Product[] = useMemo(
    () =>
      data?.map(
        (todoItem) => {
          const product: Product = {
            ...todoItem,
            imageSrc: '/image',
            price: Math.round((Math.random() + 2) * 100),
          }
          return product;
        }
      ) || [],
    [data]
  );

  return {
    products,
    isLoading,
  };
}
