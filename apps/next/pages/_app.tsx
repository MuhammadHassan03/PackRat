import '@tamagui/core/reset.css';
import '@tamagui/font-inter/css/400.css';
import '@tamagui/font-inter/css/700.css';
import 'raf/polyfill';
import 'setimmediate';

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { Provider } from 'app/provider';
import { TamaguiProvider } from 'tamagui';

import Head from 'next/head';
import React from 'react';
import type { SolitoAppProps } from 'solito';
import { config } from '@packrat/ui';

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css');
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Tamagui Example App</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Disabling provider until tamagui + next js config is complete.

      Will need to refactor this ThemeProvider logic to take place in packages/app */}
      {/* <Provider> */}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </Provider> */}
    </>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme();

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any);
      }}
    >
      <TamaguiProvider
        disableRootThemeClass
        defaultTheme={theme}
        config={config}
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  );
}

export default MyApp;