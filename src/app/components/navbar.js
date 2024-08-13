import Image from "next/image";
import Link from "next/link";

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src="/assets/img/now1.png" width={197} height={40} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link active " aria-current="page" href="/">
              <b>หน้าเเรก</b>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
              <b>เกี่ยวกับเรา</b>
              </a>
            </li>

            <div class="dropdown">
              <button
                class="btn btn-info dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                บริการของเรา
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>

            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/contect">
                <b>ติดต่อเรา</b>
              </a>
            </li>
          </ul>

          <Link href="/signup" className="btn btn-outline-info " type="submup">
            Sign UP
          </Link>
          <Link
            href="/signin"
            className="btn btn-outline-info mx-2"
            type="submit"
          >
            Sign IN
          </Link>
        </div>
      </div>
    </nav>
  );
}
