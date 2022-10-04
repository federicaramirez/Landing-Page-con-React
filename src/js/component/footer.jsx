import React from "react";

// include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

// create your first component
const Footer = () => {
    return (
        <div className="card bg-dark">
            <div className="card-footer text-light">
                Copyright @ Your Website 2022
            </div>
            {/* <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div> */}
        </div>
    );
};

export default Footer;
