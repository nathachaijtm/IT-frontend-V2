import Image from "next/image";
import Carousel from "../components/carousel";
import Card from "../components/card";

export default function about() {
  return (
<>
<br /><br/><br/>
   <div className="d-flex position-relative">
  <img src="assets/img/tiger.png" className="flex-shrink-0 me-3 mx-3" alt="..." width={120} height={120}/>
  <div>
    <h5 className="mt-0 .text-info">Custom component with stretched link</h5>
    <p>This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like, and we're using it here to give the component a bit of body and size.</p>
    <a href="#" className="stretched-link">Go somewhere</a>
  </div>
</div>

<br /><br/><br/>

</>
  );
}
