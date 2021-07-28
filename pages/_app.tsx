import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { config } from "@fortawesome/fontawesome-svg-core";
<<<<<<< HEAD
import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'tailwindcss/tailwind.css';

=======

import "@fortawesome/fontawesome-svg-core/styles.css";
import 'tailwindcss/tailwind.css';

import AOS from "aos";

>>>>>>> ba1e63d091686e7686557c5274a20cbd11885980
config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps)
{
<<<<<<< HEAD
=======
  useEffect(() => AOS.init(), []);
  
>>>>>>> ba1e63d091686e7686557c5274a20cbd11885980
  return <Component {...pageProps} />
}
