import { useEffect, useRef } from 'react';
import type { AppProps /*, NextWebVitalsMetric, AppContext */ } from 'next/app';
import Head from 'next/head';
import { StyledEngineProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import createCache from '@emotion/cache';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from 'components/Layout/Layout';

export const cache = createCache({ key: 'css', prepend: true });
cache.compat = true;

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  });

  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
        },
      },
    });
    queryClientRef.current = queryClient;
  }

  // StyledEngineProvider needs to be outside of CacheProvider to ensure everything uses the same cache for SSG to work properly
  return (
    <StyledEngineProvider injectFirst>
      {/* gives our styles greater specificity https://material-ui.com/styles/advanced/#injectfirst */}
      <CacheProvider value={cache}>
        <Head>
          <title>Buddhism Dictionary</title>
          <meta name='viewport' content='initial-scale=1, width=device-width' />
        </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <QueryClientProvider client={queryClientRef.current}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}

export default App;
