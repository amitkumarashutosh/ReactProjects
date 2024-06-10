import { useEffect, useState } from "react";
import "./pagination.css";

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const pageHandler = (pageIndex) => {
    setPage(pageIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=10&skip=${page * 10}`
        );
        const data = await res.json();
        if (res.ok) {
          setProducts(data.products);
          setTotalPages(Math.ceil(data.total / 10));
        }
      } catch (error) {
        console.log("error while fetching the data");
      }
    };
    fetchData();
  }, [page]);
  return (
    <>
      {products.length > 0 ? (
        <main className="paginate">
          <div className="product__container">
            {products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product__image"
                  />
                  <div className="product__details">
                    <span>{product.title}</span>
                    <span>Rs.{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pagination__container">
            <button
              className="btn prev"
              disabled={page === 0}
              onClick={() => setPage(page - 1)}
            >
              Prev
            </button>
            <div>
              {Array(totalPages)
                .fill(null)
                .map((_, index) => {
                  return (
                    <button
                      key={index}
                      className={page === index ? "num btn active" : "num btn"}
                      onClick={() => pageHandler(index)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
            </div>
            <button
              className="btn next"
              disabled={page === totalPages - 1}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default Pagination;
