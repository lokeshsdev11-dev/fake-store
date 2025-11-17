import { useEffect } from 'react';

function Alert({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div className="bg-red-500 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-3 max-w-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span className="text-sm sm:text-base">{message}</span>
        <button
          onClick={onClose}
          className="ml-auto text-white hover:text-gray-200 text-xl leading-none"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Alert;
