import './Card.css';

export default function Card({ data, setpersonel }) {

  const truncateDescription = (description, maxWords) => {
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa-solid fa-star" aria-label="Full star"></i>);
    }
    for (let i = 0; i < halfStars; i++) {
      stars.push(<i key={`half-${i}`} className="fa-solid fa-star-half-stroke" aria-label="Half star"></i>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa-regular fa-star" aria-label="Empty star"></i>);
    }

    return stars;
  };

  return (
    <>
      {data.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.thumbnail} className="card-img-top" alt={item.title} />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{truncateDescription(item.description, 10)}</p>
            <div className="rating" style={{ color: "#ebc034" }}>
              {renderStars(item.rating)}
            </div>
            <p className="card-price">${item.price}</p>
            <button onClick={() => setpersonel(item)} className="btn btn-danger">
              BUY NOW
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
