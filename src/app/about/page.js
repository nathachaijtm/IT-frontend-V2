import Image from "next/image";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function about() {
  return (
<>
<br /><br/><br/>

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="">
      <Image src="/assets/img/11.jpg" layout="responsive" width={1960} height={600} alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="">
      <Image src="/assets/img/22.jpg" layout="responsive" width={1960} height={600} alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="">
      <Image src="/assets/img/33.jpg" layout="responsive" width={1960} height={600} alt="..." />
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  

  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    <br/>

    <div class="ratio ratio-21x9">
  <iframe src="assets/img/meme.mp4" title="YouTube video" allowfullscreen width={100} height={100}></iframe>
</div>

<br /><br/><br/>

</>
  );
}
