import { Header } from 'src/components';
import { Box } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { getProducts } from 'src/api';

export function MainPage() {
  const { data: products, isLoading } = useQuery('products', getProducts);

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <>
      <Header />
      <Box>
        {(products || []).map((product) => (
          <Box key={product.id}>{product.title}</Box>
        ))}
      </Box>
    </>
  );
}
