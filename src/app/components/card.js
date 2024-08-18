import Image from "next/image"

export default function card(){
    return (
        
        <div className="container-fluid">
        <div className="row g-2">
            <div className="col-md-4">
                <div className="card">
                <Image src="/assets/img/1.png" layout="responsive" className="card-img-top" width={1000} height={400} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <center><a href="#" className="btn btn-info">Go somewhere</a></center>
                </div>
                </div>
            </div>

        <div className="col-md-4">
                <div className="card">
                <Image src="/assets/img/2.png" layout="responsive" className="card-img-top" width={1000} height={400} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <center><a href="#" className="btn btn-info">Go somewhere</a></center>
                </div>
                </div>
            </div>
            
            <div className="col-md-4">
                <div className="card">
                <Image src="/assets/img/3.png" layout="responsive" className="card-img-top" width={1000} height={400} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <center><a href="#" className="btn btn-info">Go somewhere</a></center>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

