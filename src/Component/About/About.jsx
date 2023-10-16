import React from "react";

function About() {
  return (
    <div>
      <div style={{ display: "flex", padding: "1%" }}>
        <div>
          <h2>ABOUT US</h2>
          <p
            style={{ fontSize: "30px", fontWeight: "bolder", color: "#C0195B" }}
          >
            35+ Years of Excellence <br />
            in Women and Child Care
          </p>
          <p>
            Ayushman Bharat Hospitals have been a pioneer in offering modern healthcare
            services for Women & Children in India since 1985. Over the last
            three decades we have regularly embraced the latest advancements in
            medical science and introduced cutting-edge medical technology to
            offer ‘best-in-class’ clinical outcomes and patient experiences.
            Patients have shown a relentless faith in our services and that has
            given us the confidence to grow from a modest 22 bedded paediatric
            nursing home in Mumbai more than three decades ago to a chain of
            multiple hospitals offering standardised care to women and children
            in the country.
          </p>
        </div>
        <img
          style={{ width: "60%" }}
          src="https://suryahospitals.com/wp-content/uploads/2021/01/Surya-mumbai.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default About;
