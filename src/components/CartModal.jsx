function CartModal({ isOpen, onClose, cartItems, onRemoveFromCart }) {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-4 sm:p-6 border-b flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Shopping Cart ({cartItems.length})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 sm:p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 sm:h-20 sm:w-20 mx-auto text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-gray-500 text-base sm:text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg"
                >
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded flex items-center justify-center p-2 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-2 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 capitalize mb-2">
                      {item.category}
                    </p>
                    <p className="text-base sm:text-lg font-bold text-blue-600">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="self-start text-red-500 hover:text-red-700 font-semibold text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-2 bg-red-50 hover:bg-red-100 rounded transition-colors duration-200 flex-shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-4 sm:p-6 border-t bg-gray-50 sticky bottom-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-base sm:text-lg font-semibold text-gray-700">
                Total:
              </span>
              <span className="text-xl sm:text-2xl font-bold text-blue-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
