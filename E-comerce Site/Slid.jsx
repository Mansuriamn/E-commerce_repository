import './Slid.css'
export default function Slid(){
  return<>
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://media.istockphoto.com/id/1347626116/photo/beautiful-smiling-female-customer-shopping-in-clothing-store-choosing-stylish-clothes-picking.jpg?s=612x612&w=0&k=20&c=tgByyeCswsZ4t6SJvfJ_Q1HV5mXy6DTrLUeaqLJBfvY=" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1144273772/photo/one-mid-adult-woman-looking-at-clothing-in-a-boutique.jpg?s=612x612&w=0&k=20&c=q85ERl3Q0AU24sbJ9Q8vlswoo9IzUNBSj1V0Y9XnWfM=" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://media.istockphoto.com/id/1213352971/photo/shopping-shop.jpg?s=612x612&w=0&k=20&c=ezKLJYEyjw3-J_d66kkGKpAjvqxcTL_C7GqPKcxxCwQ="  className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  </>
}