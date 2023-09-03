import React from "react";
import "./Blog.css"; 
import designImage from "./design.png";
import figmaImage from "./figma.png";
import homeImage from "./home.png"

const Blog = () => {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Evolution of Our Project Design</h1>
      <p className="blog-introduction"> {/* Introduction */}
        Welcome to our project blog! In this post, we'll take you through the
        journey of how our design evolved, the ideas behind it, and the
        challenges we encountered.
      </p>
      <div className="blog-section">
        <h2 className="section-title">Project Description</h2> {/* Project Description */}
        <p>
        The main goal of our project, the Blockchain Transaction Information Visualization System, 
        revolves around the seamless presentation and dynamic exploration of blockchain transaction data.
        On our website, we're dedicated to showcasing an array of comprehensive insights encompassing transaction specifics, wallet addresses, and the overarching activity within the network.
        Our team's primary goal is to offer a user-friendly platform that simplifies complex blockchain interactions, streamlining the visualization process. 
        By doing so, we hope users gain the ability to effortlessly pinpoint patterns, establish connections, and discern trends flourishing within the intricate web of the network. 
        Through our platform, we aim to empower individuals to unravel the intricacies of blockchain with ease and precision.
        </p>
      </div>

      <div className="blog-section">
        <h2 className="section-title">Languages and Technologies</h2> {/* Project description content */}
        <p>
        Our project has harnessed a toolkit of essential languages and technologies. These include HTML, CSS, and JavaScript, forming the foundational pillars that underpin the development of our website's frontend. 
        Building upon this foundation, we've leveraged React, a powerful and dynamic framework, to create a seamless and interactive user experience. 
        Additionally, we've incorporated the elegant design components of Material UI to further enhance the aesthetics and functionality of our website's frontend. This amalgamation of languages and technologies has played a pivotal role in crafting a visually appealing, user-centric,
         and technically robust interface for our Blockchain Transaction Information Visualization System.
        </p>
      </div>

      <div className="blog-section">
        <h2 className="section-title">Evolution of Design</h2> {/* Evolution of Design */}
        <p>
          As we started implementing our initial design, we realized the need to
          refine and enhance it. User feedback played a crucial role in shaping our
          design choices. We iterated through several versions, adjusting layouts,
          color schemes, and user interactions.
        </p>
        <div className="image-container">
          <img src={designImage} alt="Design Evolution" className="design-image" />
          <img src={figmaImage} alt="Figma" className="figma-image" />
        </div>

        <p>
          Our journey began with a Figma prototype as you can see in the above
          image, capturing our initial vision for the website's home page. This
          early exploration outlined our structure. However, as we progressed, we
          recognized the need for a polished and professional appearance.
        </p>
        <p>
          To achieve this, we transitioned to Material UI, a design framework
          renowned for its sleek components. Embracing Material UI allowed us to
          elevate our design with cleaner layouts, consistent styling, and enhanced
          interactivity. This strategic shift led to a visually appealing interface
          that resonates with users' needs and exudes professionalism. In the bellow image we
          can find the final design idea we came up with for the home page of our website.
        </p>

        <div className="image-container">
          <img src={homeImage} alt="Home Page" className="design-image" />
        </div>
      </div>

      <div className="blog-section">
        <h2 className="section-title">Challenges and Solutions</h2> {/* Challenges and Solutions */}
        <p>
        One of the  challenges we encountered during our project was an unexpected issue with the navigation bar. 
        Despite clicking on the desired pages and observing the URL changing accordingly, we were not able to navigate to the intended destinations. 
        After thorough investigation, we pinpointed the root cause to be a dependency conflict between React.js and Material UI, two essential libraries in our project. 
        This collision of imported dependencies led to unexpected behavior within our navigation components. Resolving this challenge required a deep dive into the dependencies 
        and a meticulous process of version management and compatibility checks with the help of our tutor. Ultimately, by addressing this dependency issue and ensuring harmony between React.js and Material UI, we were able to restore seamless navigation within our application, providing a smoother user experience
        </p>
      </div>

      <div className="blog-conclusion">{/* Conclusion */}

        <p>
          In conclusion, our project's design journey taught us the importance
          of adaptability and user feedback. By embracing change and
          persistently refining our design, we were able to create an interface
          that not only met our initial goals but exceeded user expectations. We also 
          found out that communication and team work and collaborative skills between all the team members
          were a key to the success of this part of our project.
        </p>
      </div>
    </div>
  );
};

export default Blog;
