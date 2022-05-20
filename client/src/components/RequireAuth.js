import {Navigate} from 'react-router-dom'

const RequireAuth = ({children, userData}) => {

  return ( 
    userData?.username ? children : <Navigate to="/" replace />
  );
}
 
export default RequireAuth;