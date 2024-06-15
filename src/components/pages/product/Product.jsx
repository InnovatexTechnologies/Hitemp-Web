import React, { useState, useEffect } from "react";
import Logo from "../../../Images/LogoBlack.png";
import Catalogue from "../../../Images/Catalogue.pdf";
import ProductDetails from "../../../Images/ProductDetails.png";
import { useParams } from "react-router-dom";
import LightBackgroundRight from "../../../Images/LightBackgroundRight.png";
import LightBackgroundLeft from "../../../Images/LightBackgroundLeft.png";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";

const Product = () => {
  const id = useParams();
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchProducts = async (id) => {
    try {
      const catId = id.id;
      const response = await axios.get(
        `https://admin.indceramic.com/api/productapi/${catId}`
      );
      setProducts(response.data);
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(id);
  }, []);
  return (
    <>
      <Sidebar />
      <nav style={{zIndex:"10000"}} className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
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
      <div className="row">
        <div
          className="col-lg-12"
          style={{
            backgroundImage: `url(${ProductDetails})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "45vh",
          }}
        />
      </div>
      <div
        className="row"
        id="OurProductsSection"
        style={{ display: "block", margin: 0, padding: 0, clear: "both" }}
      >
        <br />
        <br />
        <p
          style={{
            textAlign: "center",
            fontSize: 15,
            textTransform: "uppercase",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          {/* {console.log("yyyyyyyyy", Products[0].categoryNav.name)} */}
          <span className="OurProductsStyle">
            {Products[0]?.categoryNav.name}
          </span>
        </p>
        <br />
        {loading ? (
          <div>Loading...</div>
        ) : (
          Products.map((Products, index) => {
            // console.log(index);
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
                        <img
                          src={`https://admin.indceramic.com/Image/${Products.image}`}
                          className="homecoursesstyle CarouselSlideHeight image-zoom"
                        />
                      </div>
                      <div className="col-lg-8" style={{ float: "left" }}>
                        <p className="ProductNameStyle">
                          <span style={{ color: "#1E6FC0" }}>
                            {Products.name}
                          </span>
                        </p>
                        <p className="ProductDescriptionStyle">
                          {Products.description}
                        </p>
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
                            {Products.name}
                          </span>
                        </p>
                        <p className="ProductDescriptionStyle">
                          {Products.description}
                        </p>
                      </div>
                      <div className="col-lg-4" style={{ float: "left" }}>
                        <img
                          src={`https://admin.indceramic.com/Image/${Products.image}`}
                          className="homecoursesstyle CarouselSlideHeight image-zoom"
                        />
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
          backgroundImage: "url(/Images/LightBackgroundLeft.png)",
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

export default Product;
