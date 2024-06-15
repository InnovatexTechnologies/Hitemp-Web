import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
const CarouseContent = ({ items }) => {
  return (
    <Carousel
      responsive={responsive}
      itemClass="px-3"
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
    >
      <div className="row">
        <div
          className="col-lg-7 BackgroundLeftStyle1"
          style={{ padding: "80px 50px 50px 100px" }}
        >
          <p className="text HeaderHeadingStyle">
            HiTemp{" "}
            <span style={{ color: "#1E6FC0", textAlign: "center" }}>
              Industrial Ceramics
            </span>
          </p>
          <br />
          <p className="HeaderDescriptionStyle">
            HIC - Manufacturer, Supplier &amp; Exporter of Combustion Boats
            &amp; Tubes, Thermocouple Tubes, Alumina Tubes, Sheaths &amp; Beads,
            Muffle Tubes, End Caps, Muffles &amp; Grooved Refractories, Element
            Supporting Tubes, Alumina Crucibles, Bunsen Burner Crucibles,
            Cuplocks, Bobbins, Mullite kiln Furniture, Super Refractory Shapes.
          </p>
          <br />
          <a
            href="index.html#ContactUsSection"
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
            Contact Now
          </a>
        </div>
        <div className="col-lg-5">
          <img src="Images/Header2.png" style={{ height: "87vh" }} />
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-7 BackgroundLeftStyle1"
          style={{ padding: "80px 50px 50px 100px" }}
        >
          <p className="text HeaderHeadingStyle">
            HiTemp{" "}
            <span style={{ color: "#1E6FC0", textAlign: "center" }}>
              Industrial Ceramics
            </span>
          </p>
          <br />
          <p className="HeaderDescriptionStyle">
            HIC - Manufacturer, Supplier &amp; Exporter of Combustion Boats
            &amp; Tubes, Thermocouple Tubes, Alumina Tubes, Sheaths &amp; Beads,
            Muffle Tubes, End Caps, Muffles &amp; Grooved Refractories, Element
            Supporting Tubes, Alumina Crucibles, Bunsen Burner Crucibles,
            Cuplocks, Bobbins, Mullite kiln Furniture, Super Refractory Shapes.
          </p>
          <br />
          <a
            href="index.html#ContactUsSection"
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
            Contact Now
          </a>
        </div>
        <div className="col-lg-5">
          <img src="Images/Header3.png" style={{ height: "87vh" }} />
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-7 BackgroundLeftStyle1"
          style={{ padding: "80px 50px 50px 100px" }}
        >
          <p className="text HeaderHeadingStyle">
            HiTemp{" "}
            <span style={{ color: "#1E6FC0", textAlign: "center" }}>
              Industrial Ceramics
            </span>
          </p>
          <br />
          <p className="HeaderDescriptionStyle">
            HIC - Manufacturer, Supplier &amp; Exporter of Combustion Boats
            &amp; Tubes, Thermocouple Tubes, Alumina Tubes, Sheaths &amp; Beads,
            Muffle Tubes, End Caps, Muffles &amp; Grooved Refractories, Element
            Supporting Tubes, Alumina Crucibles, Bunsen Burner Crucibles,
            Cuplocks, Bobbins, Mullite kiln Furniture, Super Refractory Shapes.
          </p>
          <br />
          <a
            href="index.html#ContactUsSection"
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
            Contact Now
          </a>
        </div>
        <div className="col-lg-5">
          <img src="Images/Header4.png" style={{ height: "87vh" }} />
        </div>
      </div>
      <div className="row">
        <div
          className="col-lg-7 BackgroundLeftStyle1"
          style={{ padding: "80px 50px 50px 100px" }}
        >
          <p className="text HeaderHeadingStyle">
            HiTemp{" "}
            <span style={{ color: "#1E6FC0", textAlign: "center" }}>
              Industrial Ceramics
            </span>
          </p>
          <br />
          <p className="HeaderDescriptionStyle">
            HIC - Manufacturer, Supplier &amp; Exporter of Combustion Boats
            &amp; Tubes, Thermocouple Tubes, Alumina Tubes, Sheaths &amp; Beads,
            Muffle Tubes, End Caps, Muffles &amp; Grooved Refractories, Element
            Supporting Tubes, Alumina Crucibles, Bunsen Burner Crucibles,
            Cuplocks, Bobbins, Mullite kiln Furniture, Super Refractory Shapes.
          </p>
          <br />
          <a
            href="index.html#ContactUsSection"
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
            Contact Now
          </a>
        </div>
        <div className="col-lg-5">
          <img src="Images/Header1.png" style={{ height: "87vh" }} />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouseContent;
