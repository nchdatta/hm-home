import React, { Suspense } from 'react';
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../utils/firebase.init';
import Loading from '../../components/Loading';
const Profile = React.lazy(() => import('./Profile'));
const ChangePassword = React.lazy(() => import('./ChangePassword'));
const UpdateProfile = React.lazy(() => import('./UpdateProfile'));

const Dashboard = () => {
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    return (
        <div className='w-full min-h-screen px-2 lg:px-28 my-6 lg:my-10'>
            <div className="flex flex-col lg:flex-row gap-5">
                <div className='p-5 w-full lg:w-1/5 bg-gray-50 flex flex-row lg:flex-col flex-wrap items-start gap-4'>
                    <NavLink to="/profile" className="block hover:text-[#2CAEE2]"><i className="fa-solid fa-circle-user"></i> Profile</NavLink>
                    <NavLink to="/profile/change-password" className="block hover:text-[#2CAEE2]"><i className="fa-solid fa-key"></i> Change Password</NavLink>
                    <button onClick={async () => {
                        const success = await signOut();
                        if (success) {
                            navigate('/login', { replace: true });
                        }
                    }}>
                        <i className="fa-solid fa-right-from-bracket"></i> Sign out</button>
                </div>
                <div className='p-5 w-full  min-h-screen'>
                    <Routes>
                        <Route index element={<Suspense fallback={<Loading />}><Profile /></Suspense>} />
                        <Route path='change-password' element={<Suspense fallback={<Loading />}><ChangePassword /></Suspense>} />
                        <Route path='update-profile' element={<Suspense fallback={<Loading />}><UpdateProfile /></Suspense>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;