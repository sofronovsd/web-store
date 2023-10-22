import { useQuery } from 'react-query';
import { getTodos, TodoItem } from 'src/api';
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

export type Product = TodoItem & {
  imageSrc: string;
  price: number;
};

type UseProducts = {
  products: Product[];
  isLoading: boolean;
  selectProduct: (productId: number) => void;
  selectedProductsAmount: number;
};

export const ProductsContext = createContext<UseProducts>({} as UseProducts);

type Props = {
  children: ReactNode;
};

export const ProductContextProvider = ({ children }: Props) => {
  const { data, isLoading } = useQuery('products', getTodos);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectProduct = useCallback(
    (productId: number) => {
      const copyOfSelectedIds = [...selectedIds];
      const existingIndex = copyOfSelectedIds.findIndex(
        (value) => value === productId
      );
      if (existingIndex === -1) {
        copyOfSelectedIds.push(productId);
      } else {
        copyOfSelectedIds.splice(existingIndex, 1);
      }
      setSelectedIds(copyOfSelectedIds);
    },
    [selectedIds, setSelectedIds]
  );

  const selectedProductsAmount = useMemo(
    () => selectedIds.length,
    [selectedIds]
  );

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

  const contextValue: UseProducts = {
    products,
    isLoading,
    selectProduct,
    selectedProductsAmount,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
