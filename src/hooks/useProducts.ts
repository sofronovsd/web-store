import { useQuery } from 'react-query';
import { getTodos, TodoItem } from 'src/api';
import { useCallback, useMemo, useState } from 'react';

export type Product = TodoItem & {
  imageSrc: string;
  price: number;
};

type UseProducts = {
  products: Product[];
  isLoading: boolean;
  selectProduct: (productId: number) => void;
};

export function useProducts(): UseProducts {
  const { data, isLoading } = useQuery('products', getTodos);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectProduct = useCallback((productId: number) => {
    const existingIndex = selectedIds.findIndex(value => value === productId)
    if (existingIndex === -1) {
      selectedIds.push(productId)
    } else {
      selectedIds.splice(existingIndex, 1);
    }
    setSelectedIds(selectedIds)
  }, [selectedIds, setSelectedIds])

  const products: Product[] = useMemo(
    () =>
      data?.map((todoItem) => {
        const product: Product = {
          ...todoItem,
          imageSrc: '/image',
          price: Math.round((Math.random() * 6 + 2) * 100),
        };
        return product;
      }) || [],
    [data]
  );

  return {
    products,
    isLoading,
    selectProduct,
  };
}
