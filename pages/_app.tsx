import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from 'components/Navbar';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <div className='h-8'></div>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
