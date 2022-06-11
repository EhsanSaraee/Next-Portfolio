import '../styles/globals.css';
import { Navbar } from '@/components';

const MyApp = ({ Component, pageProps }) => {
   return (
      <>
         <Navbar />
         <Component {...pageProps} />
      </>
   );
};

export default MyApp;
