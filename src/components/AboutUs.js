// AboutUs.js
import React from 'react';

function AboutUs() {
  return (
    <div className="container">
      <h1 className="heading">Meet the Team</h1>
      <br />

      <div className="profiles">
        <div className="profile">
          {/* insert image here */}
          <img src="photo.JPG" className="profile-img" alt="Profile" />

          <h3 className="user-name">Myer</h3>
          <h5>FrontEnd Developer</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur, architecto delectus
            magni pariatur hic explicabo praesentium ipsa nisi asperiores suscipit animi.
          </p>
        </div>
        <div className="profile">
          {/* insert image here */}
          <img src="photo.JPG" className="profile-img" alt="Profile" />

          <h3 className="user-name">Sinha</h3>
          <h5>FrontEnd Developer</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur, architecto delectus
            magni pariatur hic explicabo praesentium ipsa nisi asperiores suscipit animi.
          </p>
        </div>
        <div className="profile">
          {/* insert image here */}
          <img src="photo.JPG" className="profile-img" alt="Profile" />

          <h3 className="user-name">Yasindu</h3>
          <h5>FrontEnd Developer</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae consequatur, architecto delectus
            magni pariatur hic explicabo praesentium ipsa nisi asperiores suscipit animi.
          </p>

          <a href="">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
