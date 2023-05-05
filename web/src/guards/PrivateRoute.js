import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthStore';
import { Navigate, useParams } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext)
  const { id } = useParams()

  

  if (!user) {
    return <Navigate to="/login" replace={true} />
  } else if (user.community.id === id  || user.community === id ) {
    console.log(user.community)
    return <>{children}</>
  // } else {
  //   return <Navigate to="/403" replace={true} />
  // }
}
}
    
  


export default PrivateRoute