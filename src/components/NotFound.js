import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='flex flex-col gap-y-10 mt-20 items-center h-[100vh]'>
            <h1 className='text-accent font-bold text-[30px]'>Erreur 404</h1>
            <NavLink to='/'>
                <button className='btn btn-sm'>Retour à l'accueil</button>
            </NavLink>
        </div>
    );
};
<h1>Ereeur 404</h1>

export default NotFound;