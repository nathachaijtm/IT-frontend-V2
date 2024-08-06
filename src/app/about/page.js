import Image from "next/image";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function about() {
  return (
<>
<br /><br/><br/>

<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="500">
      <Image src="/assets/img/11.jpg" layout="responsive" width={1920} height={600} alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <Image src="/assets/img/22.jpg" layout="responsive" width={1920} height={600} alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="500">
      <Image src="/assets/img/33.jpg" layout="responsive" width={1920} height={600} alt="..." />
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

    <br/>

   <div className="d-flex position-relative">
  <img src="assets/img/tiger.png" className="flex-shrink-0 me-3 mx-3" alt="..." width={120} height={120}/>
  <div>
    <h5 className="mt-0 .text-info">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" className="stretched-link">Go somewhere</a>
  </div>
</div>



</>
  );
}
