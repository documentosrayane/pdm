import { createContext, useState } from 'react';
import { signIn } from '../services/AuthService';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({ email: null, logado: false });
  const [error, setError] = useState();

  const login = async (email, senha) => {
    try {
      await signIn(email, senha);
      setUsuario({ email, logado: true });
      setError(null);
    } catch (error) {
      setError(error.message)
    }
  };

  const logout = () => {
    setUsuario({ email: null, logado: false });
  };

  const register = (nome, email, senha) => {
    setUsuario({ email, logado: true });
  };

  return (
    <AuthContext.Provider value={{ usuario, login, error, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
