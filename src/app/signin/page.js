"use client";
import { useState } from "react";

export default function SignIn() {
  // State สำหรับการควบคุมการแสดงรหัสผ่าน
  const [showPassword, setShowPassword] = useState(false);

  // ฟังก์ชันสำหรับสลับการแสดงรหัสผ่าน
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

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

            <div className="card ">
              <h4 class="card-header text-center text-bg-dark mb-3 ">
                <b>Sign In</b>
              </h4>

              <div className="card-body ">
                <label htmlFor="inputEmail4" className="form-label">
                  Username
                </label>
                <div className="input-group flex-nowrap">
                  <span className="input-group-text" id="addon-wrapping">
                    <i className="bi bi-person"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="addon-wrapping"
                    id="inputUsername"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">
                      <i className="bi bi-key-fill"></i>
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="addon-wrapping"
                      id="inputPassword4"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={togglePassword}
                    >
                      <i
                        className={
                          showPassword ? "bi bi-eye-slash" : "bi bi-eye"
                        }
                      ></i>
                    </button>
                  </div>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-info">
                    Sign In
                  </button>
                </div>
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
