import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import './App.css';
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Login() {
        const [data, setData] = useState({
            email: "",
            password: "",
          });
          const navigate = useNavigate();
        
          const handleRegister = (e) => {
            setData({
              ...data,
              [e.target.name]: e.target.value,
            });
          };
        
          const registerForm = (e) => {
            e.preventDefault();
            try {
              const res = axios.post("https://backend-hostel-complaint-website.vercel.app/api/v1/login", data)
              .then((result) => {
                if(result.data === "Success") {
                    toast.success(result.data);
                    navigate('/main');
                }
                else {
                    toast.error("Incorrect data");
                }
              })
              
              console.log(res);
              
            } catch (err) {
              console.log(err);
            }
          };
          console.log(data);
        
          return (
            <section
              
              class="vh-100 bg-image"
              
              id="bg-register"
            >
              <div class="mask d-flex align-items-center h-100 gradient-custom-3">
                <div class="container h-100">
                  <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                      <div
                        class="card"
                        // style="border-radius: 15px;"
                        id="card-register"
                      >
                        <div class="card-body p-5">
                          <h2 class="text-uppercase text-center mb-5">
                            LOGIN
                          </h2>
        
                          <form onSubmit={registerForm}>
                            <div>
                            
        
                              <div data-mdb-input-init class="form-outline mb-4">
                                Email :
                                <input
                                  type="email"
                                  id="form3Example3cg" class="form-control form-control-lg"
                                  placeholder="enter your email"
                                  name="email"
                                  value={data.email}
                                  onChange={handleRegister}
                                />
                              </div>
        
                              <div data-mdb-input-init class="form-outline mb-4">
                                Password :
                                <input
                                  type="password"
                                  id="form3Example4cg" class="form-control form-control-lg"
                                  placeholder="enter your password"
                                  name="password"
                                  value={data.password}
                                  onChange={handleRegister}
                                />
                              </div>
                              <div class="d-flex justify-content-center">
                                <button
                                  type="submit"
                                  data-mdb-button-init
                                  data-mdb-ripple-init
                                  class="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                                >
                                  Login
                                </button>
                              </div>
        
                              <p class="text-center text-muted mt-5 mb-0">
                                Do not have account?{" "}
                                <Link to="/register" class="fw-bold text-body">
                                  <u>Register here</u>
                                </Link>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
    );
}

export default Login;
