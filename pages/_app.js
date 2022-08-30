// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

// Custom styles import
import '../styles/main.css'

// React imports
import { useEffect } from 'react'

// NextUI imports
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps })
{
  useEffect(() =>
  {
    import('bootstrap/dist/js/bootstrap.bundle')
  }, []);

  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
