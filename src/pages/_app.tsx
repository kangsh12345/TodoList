import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { Layout } from '~/components/Layout/Layout';
import { reactQueryClient } from '~/utils/reactQueryClient';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => <Layout>{page}</Layout>);
  return (
    <Providers>
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </Providers>
  );
}

const Providers = ({ children }: PropsWithChildren<{}>) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={reactQueryClient}>
        {children}
      </QueryClientProvider>
    </RecoilRoot>
  );
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
