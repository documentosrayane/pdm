import { useState, createContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState({ email:                                                                                                                                                                                                                                                                                                                                                                             'rayane.teste'});

  const login = (email, senha) => {
    setUsuario({ email });
  };

  const contexto = {
    usuario,
    login,
  };

  return (
    <AuthContext.Provider value={contexto}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
