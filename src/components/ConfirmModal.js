import React from 'react';

const ConfirmModal = ({ setIsModal, handleDelete }) => {
    return (
        <div className="relative z-10" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 py-9">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">

                                    <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Delete account</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">Are you sure you want to delete account? All of the data will be permanently deleted. This action can't be undone.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-6 py-3 lg:px-4 flex justify-end gap-2">
                            <button type="button" onClick={() => setIsModal(false)} className="border-0 outline-0 text-base font-normal py-1.5 px-6 text-white bg-[#2CAEE2] hover:bg-[#23a7db] rounded-[39px]">Cancel</button>
                            <button type="button" onClick={handleDelete} className="border-0 outline-0 text-base font-normal py-1.5 px-6 text-white bg-red-500 hover:bg-red-400 disabled:bg-red-300 rounded-[39px]">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;