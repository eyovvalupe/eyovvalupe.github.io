import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            <b>About</b> me!
          </h1>
          <p>
            <p>
              {" "}
              I have extensive experience in blockchain development for over 4
              years, specializing in platforms such as Ethereum and Hyperledger
              Fabric. On Ethereum, I have developed smart contracts using
              Solidity and integrated them with decentralized applications
              (DApps) using technologies like Web3.js for front-end interaction
              and Truffle for testing and deployment. This includes projects
              involving tokenization, decentralized finance (DeFi) applications,
              and supply chain transparency solutions.
            </p>
            <br />
            Additionally, my background as a senior full-stack developer for
            over 8 years equips me with a comprehensive understanding of both
            front-end and back-end development. I have successfully delivered
            scalable and efficient solutions using a wide range of technologies
            including JavaScript, Python(Django), PHP(Laravel), Node.js,
            React(Next), Vue(Nuxt), and SQL(MySQL)/NoSQL(MongoDB) databases.
            <br />
            This dual proficiency allows me to seamlessly integrate blockchain
            solutions with existing systems or develop standalone decentralized
            applications tailored to specific business needs.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            {/* <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            /> */}
            <img src="/images/michael.png" width={300} className="about_img" />
          </Tilt>
        </div>
      </div>
    </>
  );
};

export default About;
