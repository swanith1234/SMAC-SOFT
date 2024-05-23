import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./styles.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      {/* Navbar starts */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <Stack direction="row" spacing={2}>
              <Link to="/option">
                {" "}
                <Button variant="contained">REGISTER</Button>
              </Link>

              <Link to="/login">
                <Button variant="contained" href="#contained-buttons">
                  LOGIN
                </Button>
              </Link>
            </Stack>
          </div>
        </div>
      </nav>
      {/* Navbar ends */}
      {/* hero-section */}
      <div className="custom-div">
        <img src="images/box2_image.jpg" alt="Logo" className="custom-logo " />
        <div className="custom-content">
          <div className="website-name">Website Name</div>
          <p>
            Sharpen Your Edge: Elevating Student Soft Skills with Competitive
            Spirit. Unlock Potential, Connect Globally, and Excel in
            PersonalGrowth
          </p>
        </div>
      </div>
      {/* hero section ends */}
      {/* carousel */}
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/box1_image.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5> Unlock Your Future</h5>
                <p>
                  Dive into our Mock Interview Contest this Saturday, 5-6 PM,
                  and master the art to impress at your real interviews! Plus,
                  seize the chance to earn valuable points, rewards and
                  opportunities. Let's ace those interviews together!
                </p>
              </div>
            </div>
            <div className="carousel-item ">
              <img
                className="w-100 "
                style={{ height: "300px" }}
                src="data:image/jpeg;base64,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"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Step into the Spotlight</h5>
                <p>
                  Join our Group Discussion Contest this Saturday, 5-6 PM, and
                  sharpen your communication skills in a vibrant, collaborative
                  environment! Earn points on our platform for every insightful
                  contribution, unlocking exclusive rewards and enhancing your
                  journey to success.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/box3_image.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Brain Teasure</h5>
                <p>
                  Join us for an exhilarating puzzle and riddle contest from
                  5-6pm, where every challenge you conquer not only sharpens
                  your wit but also earns you coveted coins in your profile.
                  These coins aren't just symbols; they're your gateway to
                  unlocking exclusive rewards and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carousel */}
      {/*Accordian  */}
      <div
        className="accordion accordion-flush mt-5"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What distinguishes this platform from others for improving soft
              skills?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {" "}
              Our platform offers a unique blend of personalized features that
              set it apart. Each student receives a personalized profile
              showcasing their competence in various soft skills compared to
              other students globally. Additionally, students have the
              opportunity to engage in periodic contests focused on honing
              specific soft skills, providing a competitive yet supportive
              environment for continuous improvement.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How does the platform personalize learning experiences?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Upon registration, students complete a detailed assessment to
              identify their strengths, weaknesses, and learning goals. Based on
              this information, the platform recommends specific modules,
              activities, and resources tailored to each individual's needs.
              Moreover, as students interact with the platform, their progress
              is continuously tracked and analyzed.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              What assessments are available to identify skill strengths and
              weaknesses?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Our platform offers a comprehensive suite of assessments designed
              to evaluate various soft skills competencies. These assessments
              cover a wide range of skills, including communication, teamwork,
              problem-solving, adaptability, leadership, time management, and
              emotional intelligence.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How are students motivated to engage with the platform?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Motivating students to actively participate in their learning
              journey is a top priority for us. To achieve this, we incorporate
              various motivational strategies and incentives into our platform.
              One such strategy is gamification, where students earn points,
              badges, and rewards for completing activities, achieving
              milestones, and demonstrating mastery of key concepts.
            </div>
          </div>
        </div>
      </div>
      {/*accordian */}
      {/* cards */}
      <div className="cards-header text-center">
        <h2>What are users saying?</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/box1_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  "As a student navigating the complexities of soft skills
                  development, I found this platform to be a game-changer. The
                  personalized competing experience helped me focus on areas
                  needing improvement, while the global comparison feature
                  motivated me to excel"
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/box1_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  I recommend this platform for anyone looking to enhance their
                  soft skills. The assessments provided valuable insights into
                  my strengths and weaknesses, guiding my learning journey
                  effectively. Participating in contests not only sharpened my
                  skills but also boosted my confidence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="images/box1_image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Joining this platform was one of the best decisions I made for
                  my personal and professional growth. The diverse range of
                  resources kept learning engaging and dynamic. The gamification
                  elements made the process fun and addictive, motivating me to
                  strive for excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards end */}
    </>
  );
}
