function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="h-48 sm:h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-2 mb-2 h-12">
          {product.title}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs sm:text-sm text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400 text-sm">★</span>
            <span className="text-xs sm:text-sm text-gray-600 ml-1">
              {product.rating?.rate || 0} ({product.rating?.count || 0})
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl sm:text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
