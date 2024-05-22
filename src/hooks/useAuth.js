import { useContext } from 'react';
import { AuthContext ,AuthUpdateContext} from '../context/AuthProvider';

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuthUpdate = () => {
  return useContext(AuthUpdateContext);
};
