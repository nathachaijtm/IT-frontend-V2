import Image from "next/image";

export default function Footer() {
  return (
<footer className="card">
  <div className="card-header">
    <div className="text-center">
      <i className="bi bi-facebook" style={{margin: '0 15px'}} />
      <i className="bi bi-youtube" style={{margin: '0 15px'}} />
      <i className="bi bi-twitter-x" style={{margin: '0 15px'}} />
    </div>
  </div>
  <div className="card-body mt-5 text-center">
    <p>© 2024 Hotline Miami</p>
  </div>
</footer>



  );
}
