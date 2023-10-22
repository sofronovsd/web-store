import {
  Box,
  ButtonGroup,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tag,
} from '@chakra-ui/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { CartIcon } from 'src/icons';
import { ProductsContext } from 'src/hooks';
import { useContext } from 'react';

export function Header() {
  const { selectedProductsAmount } = useContext(ProductsContext);
  return (
    <Flex
      as="header"
      justifyContent="space-evenly"
      alignItems="center"
      gap="2"
      p="2"
    >
      <Box>
        <Heading color="gray">WebStore</Heading>
      </Box>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
        <Input type="search" placeholder="Search..." />
        <InputRightElement
          children={
            <IconButton
              variant="ghost"
              icon={<CloseIcon />}
              aria-label="Reset the search input value"
            />
          }
        />
      </InputGroup>
      <ButtonGroup>
        <Box>
          <IconButton aria-label="Show the cart" icon={<CartIcon />} />
          <Tag
            size="sm"
            colorScheme="red"
            position="absolute"
            top="2px"
            right="2px"
          >
            {selectedProductsAmount}
          </Tag>
        </Box>
      </ButtonGroup>
    </Flex>
  );
}
