import { Navigate } from 'react-router-dom';
  
  function PrivateRoute({ children }) {
    const isAuthenticated = localStorage.getItem('user');
    return (
            isAuthenticated
              ? (
                children
              ) : (
                  <Navigate to="/login" replace/>
              )
    );
  }
  
  export default PrivateRoute;