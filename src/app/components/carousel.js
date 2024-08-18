import Image from "next/image";

export default function Carousel() {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <Image
              src="/assets/img/jack.jpg"
              layout="responsive"
              width={1800}
              height={960}
              alt="1"
              style={{ borderRadius: '15px' }} // เพิ่มการจัดการมุมโค้งที่นี่
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Image
              src="/assets/img/pado.jpg"
              layout="responsive"
              width={1800}
              height={960}
              alt="2"
              style={{ borderRadius: '15px' }} // เพิ่มการจัดการมุมโค้งที่นี่
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Image
              src="/assets/img/richard.png"
              layout="responsive"
              width={1800}
              height={960}
              alt="3"
              style={{ borderRadius: '15px' }} // เพิ่มการจัดการมุมโค้งที่นี่
            />
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
    </div>
  );
}
