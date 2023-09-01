// import React from "react";
// import "./about.css"; // Import the CSS file


// const About = () => {

//   return   <div className="container">
//       <br />

//       <div className="profiles">
//         <div className="profile">
//           {/* insert image here */}
//           <img src="photo.JPG" className="profile-img" alt="Profile" />

//           <h3 className="user-name">Myer</h3>
//           <h5>FrontEnd Developer</h5>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
//             consequatur, architecto delectus magni pariatur hic explicabo
//             praesentium ipsa nisi asperiores suscipit animi.
//           </p>
//         </div>
//         <div className="profile">
//           {/* insert image here */}
//           <img src="photo.JPG" className="profile-img" alt="Profile" />

//           <h3 className="user-name">Sinha</h3>
//           <h5>FrontEnd Developer</h5>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
//             consequatur, architecto delectus magni pariatur hic explicabo
//             praesentium ipsa nisi asperiores suscipit animi.
//           </p>
//         </div>
//         <div className="profile">
//           {/* insert image here */}
//           <img src="photo.JPG" className="profile-img" alt="Profile" />

//           <h3 className="user-name">Yasindu</h3>
//           <h5>FrontEnd Developer</h5>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
//             consequatur, architecto delectus magni pariatur hic explicabo
//             praesentium ipsa nisi asperiores suscipit animi.
//           </p>

//           <a href="">
//             <ion-icon name="logo-github"></ion-icon>
//           </a>
//         </div>
//       </div>
//     </div>;
// };

// export default About;



// new code added here

import React from "react";
import "./about.css"; // Import the CSS file
import myerImage from "./myer.png";
import sinhaImage from "./sinha.png";
import yasiImage from "./yasi.png";



const About = () => {

  return   <div className="container">
      <br />

      <div className="profiles">
        <div className="profile">
          {/* insert image here */}
          <img src={myerImage} className="profile-img" alt="Profile" />

          <h3 className="user-name">Myer</h3>
          <h5>AI Enthusiast</h5>
          <p>
            Hey! My name is Myer, i am currently in my 2nd year of a computer science degree!
            I have a huge passion for technology and a deep passion for AI and understanding machine-human interactions.
          </p>
        </div>
        <div className="profile">
        {/* insert the image here */}
          <img src={sinhaImage} className="profile-img" alt="Profile" />

          <h3 className="user-name">Sinha</h3>
          <h5>BackEnd Developer</h5>
          <p>
           Ciao! I am Rajarshi Sinha, currently in my second year of Computer Science degree, pursuing a career in Data Science.  
           Besides, my days are filled with activities such as soccer, basketball and also meeting friends. 
          </p>
        </div>
        <div className="profile">
          {/* insert image here */}
          <img src={yasiImage} className="profile-img" alt="Profile" />

          <h3 className="user-name">Yasindu</h3>
          <h5>FrontEnd Developer</h5>
          <p>
          Hey, I am a second year Computer Science student, studying at Swinburne University of Technology and I am majoring in Data Science. I love playing soccer, coding and watching F1 during my free time.
          </p>

          <a href="">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>;
};

export default About;
