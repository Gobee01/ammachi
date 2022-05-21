import React from "react";
import styled from "./AboutUsContent.module.css";
import Heading from "../header/Heading";
import Wrapper from "../helpers/Wrapper";
import whitePlate from "../../images/white-plate.png";
import pizza from "../../images/pizza.png";

const AboutUsContent = () => {
  return (
    <section className={styled["about-us-content"]}>
      <Wrapper>
        <figure>
          <img src={whitePlate} alt="A plate of salad topped with salmon " />
        </figure>
        <article>
          <Heading
            text={
              <>
                serving you <span> good food</span> fast
              </>
            }
            className="heading-md"
          />
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            sit sit faucibus. Tincidunt cras sit viverra curabitur lectus
            aenean. Ut egestas odio pellentesque aenean. Mattis eu felis
            porttitor pretium.
          </p>

          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            sit sit faucibus. Tincidunt
          </p>

          <figure>
            <img src={pizza} alt="Pizza" />
          </figure>
        </article>
      </Wrapper>
    </section>
  );
};

export default AboutUsContent;