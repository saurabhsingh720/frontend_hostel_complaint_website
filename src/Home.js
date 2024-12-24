import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

export function Home() {
  // const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    branch: "",
    room: "",
    issue: "",
  });

  const handlChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = axios.post("https://backend-hostel-complaint-website.vercel.app/api/v1/userIssue", data);
      toast.success("Issue created Successfully");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBack = ()=> {
    // localStorage.removeItem("token");
    window.location.href = "/main";
    // navigate("/main")
  }
  console.log(data);

  return (
    <section
      class="vh-100 bg-image"
      id="bg-issue"
    >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div
                class="card"
                id="card-register"
              >
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-3">Submit Your hostel related Issue</h2>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <div>
                        Name :
                        <input
                          type="text"
                          placeholder="enter your name"
                          id="form3Example3cg" class="form-control form-control-lg"
                          name="name"
                          value={data.name}
                          onChange={handlChange}
                        />
                      </div>
                      <div>
                        Email :
                        <input
                          type="email"
                          id="form3Example3cg" class="form-control form-control-lg"
                          placeholder="enter your email"
                          name="email"
                          value={data.email}
                          onChange={handlChange}
                        />
                      </div>
                      <div>
                        Branch :
                        <input
                          type="text"
                          id="form3Example3cg" class="form-control form-control-lg"
                          placeholder="enter your branch name"
                          name="branch"
                          value={data.branch}
                          onChange={handlChange}
                        />
                      </div>
                      <div>
                        Room :
                        <input
                          type="number"
                          id="form3Example3cg" class="form-control form-control-lg"
                          placeholder="enter your room no."
                          name="room"
                          value={data.room}
                          onChange={handlChange}
                        />
                      </div>
                      <div>
                        Issue :
                        <textarea
                          type="text"
                          id="form3Example3cg" class="form-control form-control-lg"
                          placeholder="enter issue"
                          name="issue"
                          value={data.issue}
                          onChange={handlChange}
                        ></textarea>
                      </div>

                      <div class="d-flex justify-content-center mt-2">
                      <button type="submit" 
                      class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
                      
                      <div>
                      <button type="submit" onClick={handleBack}
                      class="btn btn-outline-success btn-block btn-lg gradient-custom-4 text-body">Back</button>
                      </div>
                      </div>
                      
                      
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

export default Home;
