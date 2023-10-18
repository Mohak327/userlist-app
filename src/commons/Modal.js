import React, { useState } from 'react';

const Modal = ({title, body, open, setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-violet-950 bg-opacity-30 z-10"></div>
          <div className="relative z-50 max-w-lg p-4 bg-black text-black rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <div className='text-white'>
                {title}
              </div>
              <button className="p-2 text-white" data-te-modal-dismiss aria-label="Close" onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-white p-4 max-h-[400px] overflow-y-auto">
              <p>
                {body}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
