import React from 'react';

const ListItem = ({ menu }) => {
    return (
        <li>
            <i class="fa-solid fa-angles-right fa-xs mr-2 text-[#2CAEE2]"></i> {menu}
        </li>
    );
};

export default ListItem;