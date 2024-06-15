import React, { useState, useEffect } from "react";
import Logo from "../../../Images/LogoBlack.png";
import Catalogue from "../../../Images/Catalogue.pdf";
import HomeVideo from "../../../Images/HomeVideo.mp4";
import HomeHeader from "../../../Images/HomeHeader.png";
import WhoWeAreImage from "../../../Images/WhoWeAreImage.png";
import WhyUsImage from "../../../Images/WhyUsImage.png";
import Image1 from "../../../Images/37.jpg";
import Image2 from "../../../Images/36.jpg";
import Image3 from "../../../Images/9.jpg";
import Image4 from "../../../Images/35.jpg";
import LightBackgroundRight from "../../../Images/LightBackgroundRight.png";
import LightBackgroundLeft from "../../../Images/LightBackgroundLeft.png";
import { toastError, toastSuceess } from "../../../util/reactToastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import CarouselItem from "../../../util/CarouselItem";
import CarouseContent from "../../../util/CarouseContent";

const Home = () => {
  const [formData, setFormData] = useState({});
  const [categories, setCategories] = useState([]);
  const [categoriesImages, setCategoriesImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://admin.indceramic.com/api/contactusapi",
        formData
      );
      setFormData({
        name: "",
        email: "",
        mobileNo: "",
        subject: "",
        message: "",
      });
      alert("Form submitted successfully");
    } catch (error) {
      alert("Form submission failed");
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        "https://admin.indceramic.com/api/categoryapi"
      );

      setCategories(response.data);
      setLoading(false);
      console.log("aaaa", response.data);
      console.log("bbbb", response.data[0].productImageNav);
    } catch (error) {
      alert("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <>
      <Sidebar />
      <nav
        style={{ zIndex: "10000" }}
        className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      >
        <div className="container-fluid">
          <div className="col-lg-5 d-flex justify-content-between align-items-center">
            <a
              className="navbar-brand"
              href="/"
              id="navbar-brand"
              style={{ color: "#fff" }}
            >
              <img
                id="logo"
                src={Logo}
                style={{ height: "10vh", borderRadius: 10 }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i
                className="fas fa-bars"
                style={{ color: "#000", fontSize: 24 }}
              />
            </button>
          </div>
          <div className="col-lg-7" style={{ float: "left" }}>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <center>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/"
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      HOME
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#AboutUsSection"
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      ABOUT US
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#OurProductsSection"
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      OUR PRODUCTS
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={Catalogue}
                      target="_blank"
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      OUR CATALOGUE
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href="/#ContactUsSection"
                      style={{
                        color: "#000",
                        fontSize: 18,
                        fontWeight: 600,
                        marginLeft: 10,
                      }}
                    >
                      CONTACT US
                    </a>
                  </li>
                </ul>
              </center>
            </div>
          </div>
        </div>
      </nav>
      <div
        className="col-lg-4 HideInDesktop"
        style={{ float: "left", paddingLeft: 0, paddingRight: 0 }}
      >
        <div className="video-content" style={{ textAlign: "center" }}>
          <div className="TopHeaderOverlap">
            <p className="text HeaderHeadingStyle">
              HiTemp Industrial Ceramics
            </p>
            <br />
            <p className="HeaderDescriptionStyle">
              HIC - Manufacturer, Supplier &amp; Exporter of Combustion Boats
              &amp; Tubes, Thermocouple Tubes, Alumina Tubes, Sheaths &amp;
              Beads, Muffle Tubes, End Caps, Muffles &amp; Grooved Refractories,
              Element Supporting Tubes, Alumina Crucibles, Bunsen Burner
              Crucibles, Cuplocks, Bobbins, Mullite kiln Furniture, Super
              Refractory Shapes.
            </p>
            <br />
            <a
              href="/#ContactUsSection"
              style={{
                color: "#000",
                background:
                  "linear-gradient(to right, rgba(255, 255, 255), rgb(235,242,250))",
                padding: "10px 30px 10px 30px",
                textDecoration: "none",
                borderRadius: 5,
                boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
                fontWeight: 600,
              }}
            >
              CONTACT NOW
            </a>
          </div>
        </div>
      </div>
      <>
        <CarouseContent />
        <br />
      </>

      {/* <div className="Headerrow" style={{backgroundImage: `url(${HomeHeader})`, backgroundPosition:"center", backgroundSize:"cover"}}>
     

        <div className="gradient-overlay HideInPhone" />
        <div
          className="col-lg-4"
          style={{ float: "left", marginLeft: "-15px" }}
        >
          <div className="video-content" style={{ textAlign: "center" }}>
            <div
              className="HideInPhone"
              style={{
                background:
                  "linear-gradient(to bottom, rgb(44,118,193), rgba(15,25,79))",
                padding: 30,
                height: "110vh",
                paddingTop: 120,
              }}
            >
              <p className="text HeaderHeadingStyle">
                HiTemp Industrial Ceramics
              </p>
              <br />
              <p className="HeaderDescriptionStyle">
                HIC - Manufacturer, Supplier &amp; Exporter of Combustion Boats
                &amp; Tubes, Thermocouple Tubes, Alumina Tubes, Sheaths &amp;
                Beads, Muffle Tubes, End Caps, Muffles &amp; Grooved
                Refractories, Element Supporting Tubes, Alumina Crucibles,
                Bunsen Burner Crucibles, Cuplocks, Bobbins, Mullite kiln
                Furniture, Super Refractory Shapes.
              </p>
              <br />
              <a
                href="/#ContactUsSection"
                style={{
                  color: "#000",
                  background:
                    "linear-gradient(to right, rgba(255, 255, 255), rgb(235,242,250))",
                  padding: "10px 30px 10px 30px",
                  textDecoration: "none",
                  borderRadius: 5,
                  boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
                  fontWeight: 600,
                }}
              >
                CONTACT NOW
              </a>
            </div>
          </div>
        </div>
      </div>
      <br /> */}
      <div
        className="row"
        id="AboutUsSection"
        style={{ display: "block", margin: 0, padding: 0, clear: "both" }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: 15,
            textTransform: "uppercase",
            // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="KnowAboutHeading">
            Know <span style={{ color: "#1E6FC0" }}>MORE</span>
          </span>
        </p>
        <div className="col-lg-6 KnowAboutImageDivStyle">
          <img src={WhoWeAreImage} className="KnowAboutLargeImage" />
          <img src={WhyUsImage} className="KnowAboutSmallImage HideInPhone" />
        </div>
        <div
          className="col-lg-6"
          style={{
            float: "left",
            backgroundImage: `url(${LightBackgroundRight})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="col-lg-1" style={{ float: "left" }} />
          <div className="col-lg-11 aboutcontent">
            <p style={{ fontSize: 18 }}>
              Hitemp Industrial Ceramics Started in 2021 is an expansion plan of
              Hitemp Ceramics Industries (1972).We at hitemp are serving wide
              varities of industries &amp; research establishments incorporating
              new techniques to meet international standards. We have a team of
              dedicated Engineers for R&amp;D to improve upon products, develop
              new products &amp; to meet out commited delivery schedules . Under
              one single roof we are providing best ceramics &amp; refractories.
              Besides this we also provide technical support &amp; solutions to
              our customers.
              <br />
              <br />
              <b>Hitemp has many in-house manufacturering facilities like:</b>
            </p>
            <ul>
              <li>Slip Casting</li>
              <li>Vacuum Extrusion</li>
              <li>Tabletting Press</li>
              <li>Mechanical Pressing</li>
              <li>Hydraulic Pressing</li>
              <li>Pneumatic and Vibratory Press</li>
              <li>Green Machining</li>
            </ul>
            <p />
          </div>
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "10vh" }} />
      <div
        className="row"
        id="OurProductsSection"
        style={{
          display: "block",
          margin: 0,
          padding: 0,
          clear: "both",
          // background: "linear-gradient(to bottom, rgb(245,247,251), #fff)",
        }}
      >
        <br />
        <br />
        <p
          style={{
            textAlign: "center",
            fontSize: 15,
            textTransform: "uppercase",
            // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="OurProductsStyle">
            Our <span style={{ color: "#1E6FC0" }}>Products Range</span>
          </span>
        </p>
        <br />
        {loading ? (
          <div>Loading...</div>
        ) : (
          categories.map((category, index) => {
            if (index % 2 === 0) {
              return (
                <>
                  <div
                    key={index}
                    className="container BackgroundRightStyle"
                    style={{
                      backgroundImage: `url(${LightBackgroundRight})`,
                    }}
                  >
                    <div className="col-lg-12">
                      <div className="col-lg-4" style={{ float: "left" }}>
                        <div
                          id={`carouselExampleControls-${category.id}`}
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner">
                            {loading ? (
                              <div>Loading...</div>
                            ) : (
                              <CarouselItem
                                items={category.productImageNav}
                                index={index}
                                autoPlaySpeed={3000}
                              />
                            )}

                            {/* <div className="carousel-item">
                              <img
                                src={Image2}
                                className="homecoursesstyle CarouselSlideHeight image-zoom"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={Image3}
                                className="homecoursesstyle CarouselSlideHeight image-zoom"
                              />
                            </div>
                            <div className="carousel-item">
                              <img
                                src={Image4}
                                className="homecoursesstyle CarouselSlideHeight image-zoom"
                              />
                            </div> */}
                          </div>
                          <a
                            className="carousel-control-prev"
                            href={`#carouselExampleControls-${category.id}`}
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href={`#carouselExampleControls-${category.id}`}
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      <div className="col-lg-8" style={{ float: "left" }}>
                        <p className="ProductNameStyle">
                          <span style={{ color: "#1E6FC0" }}>
                            {category.name}
                          </span>
                        </p>
                        <p className="ProductDescriptionStyle">
                          {category.description}
                        </p>
                        <center>
                          <br />
                          <a
                            href={`/Product/${category.id}`}
                            style={{
                              color: "#fff",
                              background:
                                "linear-gradient(to right, rgb(44,118,193), rgba(15,25,79))",
                              padding: "10px 30px 10px 30px",
                              textDecoration: "none",
                              borderRadius: 5,
                              boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
                              fontWeight: 600,
                              textTransform: "uppercase",
                            }}
                          >
                            Product Details
                          </a>
                        </center>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                </>
              );
            } else {
              return (
                <>
                  <div
                    key={index}
                    className="container BackgroundLeftStyle"
                    style={{
                      backgroundImage: `url(${LightBackgroundLeft})`,
                    }}
                  >
                    <div className="col-lg-12">
                      <div className="col-lg-8" style={{ float: "left" }}>
                        <p className="ProductNameStyle">
                          <span style={{ color: "#1E6FC0" }}>
                            {category.name}
                          </span>
                        </p>
                        <p className="ProductDescriptionStyle">
                          {category.description}
                        </p>
                        <center>
                          <br />
                          <a
                            href={`/Product/${category.id}`}
                            style={{
                              color: "#fff",
                              background:
                                "linear-gradient(to right, rgb(44,118,193), rgba(15,25,79))",
                              padding: "10px 30px 10px 30px",
                              textDecoration: "none",
                              borderRadius: 5,
                              boxShadow: "4px 4px 6px rgba(0, 0, 0, 0.3)",
                              fontWeight: 600,
                              textTransform: "uppercase",
                            }}
                          >
                            Product Details
                          </a>
                        </center>
                      </div>
                      <div
                        className="col-lg-4 SliderMarginStyle"
                        style={{ float: "left" }}
                      >
                        <div
                          id={`carouselExampleControls1-${category.id}`}
                          className="carousel slide"
                          data-ride="carousel"
                        >
                          <div className="carousel-inner">
                            {loading ? (
                              <div>Loading...</div>
                            ) : (
                              <CarouselItem
                                items={category.productImageNav}
                                index={index}
                                autoPlaySpeed={5000}
                              />
                            )}
                          </div>
                          <a
                            className="carousel-control-prev"
                            href={`#carouselExampleControls1-${category.id}`}
                            role="button"
                            data-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Previous</span>
                          </a>
                          <a
                            className="carousel-control-next"
                            href={`#carouselExampleControls1-${category.id}`}
                            role="button"
                            data-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                </>
              );
            }
          })
        )}
      </div>
      <div
        className="row"
        style={{
          clear: "both",
          height: "10vh",
          background: "linear-gradient(to bottom, rgb(44,118,193,0.1), #fff)",
        }}
      />
      <div
        className="row"
        id="ContactUsSection"
        style={{ display: "block", margin: 0, padding: 0, clear: "both" }}
      >
        <div className="container-fluid">
          <div className="col-lg-4 ContactUsSectionStyle">
            <h4
              style={{
                textAlign: "center",
                fontSize: 25,
                textTransform: "uppercase",
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Contact <span style={{ color: "#1E6FC0" }}>Info</span>
            </h4>
            <br />
            <br />
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-map-marker" />
              </div>
              <div className="col-10 footercontact">
                <p style={{ fontSize: 16 }}>
                  <b>Office : </b>870 South Bhopa Road Muzaffarnagar -251001
                  <br />
                  <b>Works : </b>Bhandur, Muzaffarnagar (U.P.) India
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-phone-square" />
              </div>
              <div className="col-10 footercontact">
                <p style={{ fontSize: 16 }}>+91 9897111660</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-envelope" />
              </div>
              <div className="col-10 footercontact">
                <p style={{ fontSize: 16 }}>
                  hitempindustrialceramics@gmail.com, hitempceramics@gmail.com
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2">&nbsp;</div>
              <div className="col-lg-8">
                <center>
                  <a href="#" className="social-icon">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="social-icon">
                    <i className="fab fa-instagram" />
                  </a>
                </center>
              </div>
              <div className="col-lg-2">&nbsp;</div>
            </div>
          </div>
          <div className="col-lg-8" style={{ float: "left" }}>
            <h4
              style={{
                textAlign: "center",
                fontSize: 30,
                textTransform: "uppercase",
                fontWeight: 600,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Feel Free to <span style={{ color: "#1E6FC0" }}>Contact Now</span>
            </h4>
            <br />
            <form onSubmit={handleSubmit}>
              <div className="col-lg-6" style={{ float: "left" }}>
                <label style={{ fontWeight: 600 }}>Name</label>
                <input
                  className="form-controlCustomized"
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6" style={{ float: "left" }}>
                <label style={{ fontWeight: 600 }}>Email</label>
                <input
                  className="form-controlCustomized"
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div
                className="col-lg-6"
                style={{ float: "left", marginTop: 20 }}
              >
                <label style={{ fontWeight: 600 }}>Mobile No.</label>
                <input
                  className="form-controlCustomized"
                  type="text"
                  name="MobileNo"
                  id="MobileNo"
                  placeholder="Mobile No."
                  value={formData.mobileNo}
                  onChange={handleChange}
                />
              </div>
              <div
                className="col-lg-6"
                style={{ float: "left", marginTop: 20 }}
              >
                <label style={{ fontWeight: 600 }}>Subject</label>
                <input
                  className="form-controlCustomized"
                  type="text"
                  name="Subject"
                  id="Subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div
                className="col-lg-12"
                style={{ float: "left", marginTop: 20 }}
              >
                <label style={{ fontWeight: 600 }}>Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  name="Message"
                  id="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div
                className="col-lg-12"
                style={{ float: "left", marginTop: 40 }}
              >
                <center>
                  <button
                    type="submit"
                    style={{
                      textDecoration: "none",
                      background:
                        "linear-gradient(to right, rgb(44,118,193), rgba(15,25,79))",
                      color: "#fff",
                      padding: "10px 50px 10px 50px",
                      marginTop: 10,
                      borderRadius: 10,
                      border: "none",
                    }}
                  >
                    SUBMIT NOW
                  </button>
                </center>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row" style={{ clear: "both", height: "5vh" }} />
      <div
        className="row"
        style={{
          backgroundImage: `url(${LightBackgroundLeft})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          padding: "50px 30px 0px 30px",
          textAlign: "left",
          color: "black",
        }}
      >
        <div className="col-md-4 col-12" style={{ padding: 10 }}>
          <img src={Logo} style={{ height: "10vh", borderRadius: 10 }} />
          <br />
          <br />
          <p style={{ textAlign: "justify" }}>
            Hitemp Industrial Ceramics Started in 2021 is an expansion plan of
            Hitemp Ceramics Industries (1972).We at hitemp are serving wide
            varities of industries &amp; research establishments incorporating
            new techniques to meet international standards.{" "}
            <a
              style={{ textDecoration: "none", color: "#1E6FC0" }}
              href="/#AboutUsSection"
            >
              read more...
            </a>
          </p>
        </div>
        <div className="col-md-4 col-12" style={{ padding: 10 }}>
          <h2 style={{ textAlign: "left", fontSize: 25 }}>Connect With Us</h2>
          <hr />
          <div style={{ marginTop: 5, marginBottom: 5 }}>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-map-marker" />
              </div>
              <div className="col-10 footercontact">
                <p>
                  <b>Office : </b>870 South Bhopa Road Muzaffarnagar -251001
                  <br />
                  <b>Works : </b>Bhandur, Muzaffarnagar (U.P.) India
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-phone-square" />
              </div>
              <div className="col-10 footercontact">
                <p>+91 9897111660</p>
              </div>
            </div>
            <div className="row">
              <div className="col-1">
                <i style={{ fontSize: 18 }} className="fas fa-envelope" />
              </div>
              <div className="col-10 footercontact">
                <p>
                  hitempindustrialceramics@gmail.com, hitempceramics@gmail.com
                </p>
              </div>
            </div>
            <span id="siteseal"></span>
          </div>
        </div>
        <div className="col-md-4 col-12" style={{ padding: 10 }}>
          <h2 style={{ textAlign: "left", fontSize: 25 }}>Location</h2>
          <hr />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55574.58198434516!2d77.66765778469876!3d29.475194078566478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1713521929069!5m2!1sen!2sin"
            width="100%"
            height={200}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div
          className="row"
          style={{
            boxShadow: "0px -5px 5px rgba(0, 0, 0, 0.2)",
            paddingTop: 10,
            width: "100vw",
          }}
        >
          <center>
            <p style={{ textAlign: "center", width: "100vw" }}>
              Designed &amp; Developed By Innovate X
            </p>
          </center>
        </div>
      </div>
    </>
  );
};

export default Home;
