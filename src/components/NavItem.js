import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = ({ to, menu }) => {
    return (
        <li>
            <Link to={to} className='block text-sm text-gray-900 hover:text-[#2CAEE2]'>{menu}</Link>
        </li>
    );
};

export default NavItem;