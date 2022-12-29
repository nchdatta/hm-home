import React from 'react';
import { NavLink, useMatch } from 'react-router-dom';

const NavItem = ({ to, menu }) => {
    const match = useMatch({ path: to, end: true });

    return (
        <li>
            <NavLink to={to} className={`block text-sm ${match ? 'text-[#2CAEE2]' : 'text-gray-900'}`}>{menu}</NavLink>
        </li>
    );
};

export default NavItem;