import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { config } from "@fortawesome/fontawesome-svg-core";
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'tailwindcss/tailwind.css';

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps)
{
  return <Component {...pageProps} />
}
