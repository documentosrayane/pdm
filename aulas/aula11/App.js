import AuthProvider from './contexts/AuthContext';
import MainNavigation from './routes/MainNavigator';

const App = () => (
  <AuthProvider>
    <MainNavigation />
  </AuthProvider>
);

export default App;
