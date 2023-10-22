import { Product, ProductsContext } from 'src/hooks';
import { Card, CardBody, CardFooter, Image } from '@chakra-ui/react';
import reactLogo from '../../assets/react.svg';
import { useContext, useState } from 'react';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { selectProduct } = useContext(ProductsContext);
  const [isSelected, setSelected] = useState(false);
  return (
    <Card
      w="sm"
      cursor="pointer"
      _hover={{
        background: 'gray.200',
      }}
      onClick={() => {
        console.log({
          id: product.id,
        });
        selectProduct(product.id);
        setSelected((prev) => !prev);
      }}
    >
      <CardBody>
        <Image src={reactLogo} alt="no product image provided" width="100%" />
        {product.title} {isSelected ? 'isSelected' : 'not selected'}
      </CardBody>
      <CardFooter>{product.price} &euro;</CardFooter>
    </Card>
  );
}
