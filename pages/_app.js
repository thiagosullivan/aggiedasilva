import { Toaster } from 'react-hot-toast';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Toaster position="bottom-right" />
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
