import { Product } from 'src/hooks';
import {Card, CardBody, CardFooter, Image} from '@chakra-ui/react';
import reactLogo from '../../assets/react.svg';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Card w="sm">
      <CardBody>
        <Image src={reactLogo} alt="no product image provided" width="100%"/>
        product card
        {product.title}
      </CardBody>
      <CardFooter>
        {product.price} &euro;
      </CardFooter>
    </Card>
  );
}
