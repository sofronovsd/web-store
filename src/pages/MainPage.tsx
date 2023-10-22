import { Header, ProductCard } from 'src/components';
import { Box, Container, Flex } from '@chakra-ui/react';
import { useProducts } from 'src/hooks';

export function MainPage() {
  const { products, isLoading } = useProducts();

  if (isLoading) return <Box>Loading...</Box>;

  return (
    <>
      <Header />
      <Container maxW="max" p="8" centerContent>
        <Flex flexWrap="wrap" gap="4">
          {(products || []).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
      </Container>
    </>
  );
}
