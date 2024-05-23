import React from "react";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
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
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <div className="custom-div">
          <img src="images/box2_image.jpg" alt="Logo" className="custom-logo" />
          <div className="custom-content">
            <div className="website-name">Website Name</div>
            <p>
              Sharpen Your Edge: Elevating Student Soft Skills with Competitive
              Spirit. Unlock Potential, Connect Globally, and Excel in Personal
              Growth
            </p>
          </div>
        </div>

        <div id="carouselExampleDark" className="carousel carousel-dark slide">
          {/* Carousel code */}
        </div>

        <div
          className="accordion accordion-flush mt-5"
          id="accordionFlushExample"
        >
          {/* Accordion code */}
        </div>

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

            {/* Repeat the card structure for other testimonials */}
          </div>
        </div>
      </div>
    </>
  );
}
