import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { dropdownItems, navItems } from '../utils/data';
import auth from '../utils/firebase.init';
import DropdownItem from './DropdownItem';
import NavbarBrand from './NavbarBrand';
import NavItem from './NavItem';
const arrowDown = <svg className="inline w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>;
const lang = <svg className='inline mr-2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0.625C4.82234 0.625 0.625 4.82234 0.625 10C0.625 15.1777 4.82234 19.375 10 19.375C15.1777 19.375 19.375 15.1777 19.375 10C19.375 4.82234 15.1777 0.625 10 0.625ZM6.83777 17.487C4.85348 16.6467 3.28365 15.0534 2.47283 13.0569C1.66202 11.0603 1.67647 8.82367 2.51301 6.83777C2.55286 6.74394 2.59453 6.65088 2.63801 6.55867L4.6875 8.40336V10.8735L7.69922 14.0625H9.21875V15.9784L7.38078 17.6938C7.19792 17.6315 7.01691 17.5625 6.83777 17.487V17.487ZM15.7452 15.7452C14.9917 16.501 14.0962 17.1003 13.1102 17.5087C12.1242 17.9172 11.0672 18.1266 10 18.125C9.61154 18.125 9.22356 18.0975 8.83898 18.0427L10.4688 16.5216V12.8125H8.23828L5.9375 10.3765V7.84664L3.26953 5.44563C4.15226 4.14542 5.39108 3.12723 6.83762 2.51301C8.07542 1.98939 9.42388 1.78133 10.7619 1.9075C12.1 2.03367 13.3858 2.49013 14.5039 3.2359L12.7241 5.52426L13.3291 7.03695L12.9196 7.44652L9.84855 6.83234L8.125 8.125V11.5625H15L16.9666 14.1846C16.6246 14.7527 16.2145 15.2768 15.7452 15.7452ZM18.125 10C18.1268 10.9996 17.9431 11.9908 17.5831 12.9233L15.625 10.3125H9.375V8.75L10.1514 8.16766L13.3304 8.80348L14.7959 7.33805L14.1509 5.72574L15.4869 4.00789C15.5744 4.0882 15.6605 4.17049 15.7451 4.25477C16.5009 5.00827 17.1002 5.90377 17.5087 6.88976C17.9171 7.87575 18.1266 8.93276 18.125 10V10Z" fill="#333333" />
</svg>;


const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    const [user] = useAuthState(auth);


    return (
        <nav>
            <div className="px-4 lg:px-28 w-full flex flex-wrap items-center justify-between py-[18px]">
                <NavbarBrand />
                <button onClick={() => setIsNavExpanded(!isNavExpanded)} className='lg:hidden justify-end p-2 hover:bg-gray-50 rounded-md'>
                    <i className="fa-solid fa-bars fa-xl"></i>
                </button>

                <div className={`${isNavExpanded ? 'flex' : 'hidden'} items-center justify-between w-full lg:flex lg:w-auto pt-8 pb-4 lg:pt-0 lg:pb-0`}>
                    <ul className="flex flex-col gap-3 lg:gap-7 lg:flex-row ">
                        {dropdownItems.map(item => <DropdownItem key={item.id} menu={item.menu} />)}

                        {navItems.map(item => <NavItem key={item.id} menu={item.menu} to={item.to} />)}
                        {user && <NavItem menu="Users" to="/users" />}

                        <ul className="flex items-center gap-7 text-sm lg:pl-20">
                            <li className='cursor-pointer'>{lang} En {arrowDown}</li>
                            {
                                user
                                    ? <li><Link to='/profile'><i className="fa-solid fa-circle-user fa-lg"></i></Link></li>
                                    : <li><Link to='/login' className='border-0 outline-0 text-base font-normal py-2 px-9 text-white bg-[#2CAEE2] hover:bg-[#23a7db] rounded-[39px]'>Login</Link></li>
                            }
                        </ul>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;