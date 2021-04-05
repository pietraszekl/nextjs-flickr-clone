import { App } from '@/types/pages';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: App) {
  return <Component {...pageProps} />;
}

export default MyApp;
