import Image from "next/image";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function contect() {
  return (
<>
<br /><br/><br/>

  <div className="container-fluid">
<div className="row g-2">
<div className="col-md-4">
<figure className="figure">
  <img src="assets/img/owl.jpg" className="figure-img img-fluid rounded" alt="..." width={600} height={600}/>
  <figcaption className="figure-caption">A caption for the above image.</figcaption>
</figure>
</div>

<div className="col-md-4">
<figure className="figure">
  <img src="assets/img/horse.jpg" className="figure-img img-fluid rounded" alt="..." width={600} height={600}/>
  <figcaption className="figure-caption">A caption for the above image.</figcaption>
    </figure>
  </div>
  
  <div className="col-md-4">
<figure className="figure">
  <img src="assets/img/chicken.jpg" className="figure-img img-fluid rounded" alt="..." width={600} height={600}/>
  <figcaption className="figure-caption">A caption for the above image.</figcaption>
    </figure>
  </div>

  </div>
  </div>



</>
  );
}
