import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProductContextProvider } from 'src/hooks';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <ProductContextProvider>
          <RouterProvider router={router} />
        </ProductContextProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
