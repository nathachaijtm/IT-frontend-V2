import Image from "next/image";
import Carousel from "./components/carousel";
import Card from "./components/card";

export default function Home() {
  return (
  <>
  <br /><br/><br/>
  <div style={{backgroundColor:""}}>
    <Carousel/>
    <br />
    <Card/>
    <br/>
    </div>
  </>
  );
}
