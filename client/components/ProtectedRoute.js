import '../styles/globals.css';
import { AuthProvider } from '../contexts/authContext';
import ProtectedRoute from '../components/ProtectedRoute';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ProtectedRoute>
        <Component {...pageProps} />
      </ProtectedRoute>
    </AuthProvider>
  );
}

export default MyApp;
