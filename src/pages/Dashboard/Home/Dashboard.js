
import React from 'react';
import { useAuthContext } from '../../Contexts/AuthContext';
export default function Dashboard() {
  const { user } = useAuthContext()
  const { userName } = user;

  return (
<>
<div className="container">
  <div className="row">
    <div className="col mt-4">
      <h2 className='text-center'>Dashboard Home {userName}</h2>
    </div>
  </div>
</div>
</>    
);
}