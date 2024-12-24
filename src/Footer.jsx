import React from "react";
import "./App.css";
import { MDBFooter, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className="bg-light text-center text-white flex-wrap" id="footer-icon">
      <MDBBtn style={{ backgroundColor: "green" }} href="https://linktr.ee/SaurabhSingh720?fbclid=PAAabjZyyVJZICy_D16UPaiuX5v_VBT_c7enVMQrNdUiOJVNy1-MZQ8GzZ4U0">
        <MDBIcon className="me-2" fab icon="linktree" /> Linktree
      </MDBBtn>

      <MDBBtn style={{ backgroundColor: "#0082ca" }} href="https://www.linkedin.com/in/saurabh-singh-ab008b228">
        <MDBIcon className="me-2" fab icon="linkedin" /> Linkedin
      </MDBBtn>

      <MDBBtn style={{ backgroundColor: "#333333" }} href="https://github.com/saurabhsingh720">
        <MDBIcon className="me-2" fab icon="github" /> Github
      </MDBBtn>

      <MDBBtn style={{ backgroundColor: "#55acee" }} href="https://x.com/SaurabhSingh_72">
        <MDBIcon className="me-2" fab icon="twitter" /> Twitter
      </MDBBtn>

      <div
        className="text-center p-4 mt-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        © 2024 Copyright: ❤️
        <a className="text-white" href="https://www.linkedin.com/in/saurabh-singh-ab008b228">
          Saurabh
        </a>
      </div>
    </MDBFooter>
  );
}
