// import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import SimpleMap from "./SimpleMap";
import Footer from "./Footer";
import axios from "axios";

function Main() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {
    const fetchData = async() => {
      try {
        const response = await axios.get('http://localhost:3001/api/v1/userIssue');
        setUsers(response.data);
      } catch (error) {
        console.log("error in fetchdata", error)
      }
    }
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const handleIssue = () => {
    navigate("/home");
  };

  

  return (
    <section>
      <div>
        <div className="dashboard">
          <header className="dashboard-header">
            <button className="logout-button" onClick={handleLogout}>
              LOGOUT
            </button>
           
          </header>
          <marquee bgcolor="#FFEFD5">
            <h2>
            Madan Mohan Malaviya University of Technology, Hostels Complaint Website
            </h2>
          </marquee>

          <main className="dashboard-main" id="table">
            <section className="enquiries" id="t1">
              <h2>Issues</h2>
              <table className="enquiries-table" id="t2">
                <thead id="t3">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Branch</th>
                    <th>room</th>
                    <th>issue</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user) =>(
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.branch}</td>
                      <td>{user.room}</td>
                      <td>{user.issue}</td>
                    </tr>
                  ))
                  }
                  
                  
                </tbody>
              </table>
            </section>

          </main>
        </div>

        
        <div class="d-flex justify-content-center">
          <button
            class="btn btn-outline-success btn-block btn-lg gradient-custom-4 text-body"
            onClick={handleIssue}>
            Add Issue
          </button>
        </div>

        <div id="map">
          <SimpleMap/>
        </div>
        <div id="footer-main">
          <Footer/>
        </div>
      </div>
    </section>
  );
}

export default Main;
