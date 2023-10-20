import React, { useState } from 'react';

const Modal = ({title, body, open, setIsOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-violet-950 bg-opacity-30 z-10"></div>
        <div className="w-5/6 max-w-xl overflow-y-scroll max-h-[600px] relative z-50 bg-black text-black rounded-lg shadow-lg">
          <div className="p-4 bg-black z-50 flex justify-between items-center sticky top-0">
            <div className='text-white'>
              {title}
            </div>
            <button className="p-2 pr-0 text-white" data-te-modal-dismiss aria-label="Close" onClick={closeModal}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div style={{ wordWrap: 'break-word' }} className="text-white max-h-[400px] overflow-y-auto ">
            <p className='px-4 pb-4'>
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
