import styles from './Personelcard.module.css';

export default function Personelcard({ data }) {
  console.log(data);
  return (
    <>
      <div className={styles.maindata}>
        <div className={styles.slidedata}>
          {data && data.images && (
            <div
              id="carouselExampleControlsNoTouching"
              className="carousel slide"
              data-bs-touch="false"
            >
              <div className="carousel-inner">
                {data.images.map((image, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    key={index}
                  >
                    <img src={image} className="d-block w-100" alt={`slide-${index}`} />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControlsNoTouching"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          )}
        </div>
        <div className={styles.pricedata}>
          {data && (
            <>
              <div>{data.description}</div>
              <h3>${data.price}</h3>
              <div className={styles.rating}>
                <h4>{data.rating}</h4>
                <i className="fa-regular fa-star" />
              </div>
              <div className={styles.delivery}>
                Free Delivery
              </div>
            </>
          )}
        </div>
      </div>
      {data && (
        <div className={styles.detail}>
          <h2>PRODUCT DETAILS</h2>
          <p><b>Title: {data.title}</b></p>
          <p><b>Category: {data.category}</b></p>
          <p><b>Brand: {data.brand}</b></p>
          <p><b>Quantity: {data.minimumOrderQuantity}</b></p>
          <p><b>Available: {data.availabilityStatus}</b></p>
          <p><b>Warranty: {data.warrantyInformation}</b></p>
          <p><b>Weight: {data.weight}</b></p>
          <p><b>Return Policy: {data.returnPolicy}</b></p>
          <p><b>Shipping Information: {data.shippingInformation}</b></p>
          <p><b>Sku: {data.sku}</b></p>
          <p><b>Stock: {data.stock}</b></p>
        </div>
      )}
      <div className={styles.buycard}>
        <button className={styles.but}><i className="fa-solid fa-cart-shopping" /> Add To Cart</button>
        <button className={styles.but}><i className="fa-solid fa-check" /> Buy Now</button>
      </div>
      {data && (
        <div className={styles.information}>
          <h4><b>Important Information</b></h4>
          <h6><b>Discount: {data.discountPercentage}%</b></h6>
          <h6><b>Quantity Available: {data.minimumOrderQuantity}</b></h6>
          <h6><b>Return Policy: {data.returnPolicy}</b></h6>
          <h6><b>Shipping Information: {data.shippingInformation}</b></h6>
          <h6><b>Warranty: {data.warrantyInformation}</b></h6>
        </div>
      )}
      {data && data.reviews && data.reviews.length > 0 && (
        <div className={styles.userdata}>
          {data.reviews.map((review, index) => (
            <div key={index} className={styles.reviews}>
              <h4 className={styles.name}>Name: {review.reviewerName} , {review.rating}<i className="fa-solid fa-star"></i></h4>
              <h5>Email: {review.reviewerEmail}, Date: {review.date}</h5>
              <h5><b>Comment:</b></h5> 
              <p style={{ marginLeft: '110px' }}>{review.comment}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
