import React from "react";

const Home = () => {
    return(
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx auto  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <div className="col-md-6">
                                <h1>Grow your business with <strong className="brand-name">NavReactor</strong></h1>
                                <h2 className="my-3">
                                    We are the team of talented developer making websites
                                </h2>
                                <div className="mt-3">
                                    <a href="" className="btn-get-started">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
