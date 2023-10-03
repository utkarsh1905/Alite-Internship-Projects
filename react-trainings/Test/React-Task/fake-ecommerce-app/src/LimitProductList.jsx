import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

function LimitProductList({ products }) {
  const navigate = useNavigate();
  const pageSize = 5;

  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNum) => {
    if (pageNum === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (pageNum === "next" && endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    } else if (Number.isInteger(pageNum) && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleProducts = products.slice(startIndex, endIndex);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="absolute z-0 flex flex-col justify-center w-full p-4 align-center">
      <div className="grid grid-cols-1 gap-4 shadow sm:grid-cols-2 md:grid-cols-3 justify-items-center">
        {visibleProducts.map((product) => (
          <div
            className="border rounded-lg bg-base-200 w-80 card"
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            <figure>
              <img
                className="object-cover w-80 h-60"
                src={product.image}
                alt={product.title}
              />
            </figure>
            <div className="flex flex-col justify-between card-body ">
              <a href="#">
                <h5 className="font-medium text-info-content text-m card-title">
                  {product.title}
                </h5>
              </a>
              <div>
                <div className="flex items-center w-32 align-center">
                  <p className="text-sm font-bold text-info-content">Rating:</p>
                  <Rating rate={product.rating.rate} />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-info-content">
                  Price: ${product.price}
                </span>
                <button className="btn btn-sm btn-outline btn-accent">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 mb-2 text-center">
        <div className="join">
          <button
            className="join-item btn"
            onClick={() => handleClick("prev")}
            disabled={currentPage === 1}
          >
            «
          </button>
          <button className="join-item btn" disabled>
            Page {currentPage}
          </button>
          <button
            className="join-item btn"
            onClick={() => handleClick("next")}
            disabled={endIndex >= products.length}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
}

export default LimitProductList;
