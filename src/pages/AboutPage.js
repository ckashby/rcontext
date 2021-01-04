import React from "react";
import ShowContextData from "../ShowContextData";
import UpdateContextData from "../UpdateContextData";

const AboutPage = () => {
  return (
    <div>
      <h2>About Us</h2>
      <section>
        <ShowContextData />
        <hr />
        <UpdateContextData />
      </section>
    </div>
  );
};

export default AboutPage;
