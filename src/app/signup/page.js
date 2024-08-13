export default function signup() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
     
        <div className="container ">
          <div className="row justify-content-center ">
            <div className="col-md-6">
              <div className="card">
                <h4 class="card-header text-center text-bg-dark mb-1 ">
                  <b>Sign Up</b>
                </h4>

                <div class="card-body">
                  <form className="row g-3">
                    <div className="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        Email
                      </label>

                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i class="bi bi-envelope"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label for="inputEmail4" class="form-label">
                        password
                      </label>
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i class="bi bi-key-fill"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="password"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <label for="inputEmail4" class="form-label">
                        Username
                      </label>
                      <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                          <i class="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Username"
                          aria-label="Username"
                          aria-describedby="addon-wrapping"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-info">
                        Sign UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
