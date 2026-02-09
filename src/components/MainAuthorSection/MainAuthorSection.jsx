import "./MainAuthorSection.css";
import authorImage from "../../assets/author-image.png";

function MainAuthorSection() {
  return (
    <section className="main__author-section">
      <div className="main__author-section-content">
        <img src={authorImage} alt="Author" className="main__author-image" />
        <div className="main__author-about">
          <h2 className="main__author-title">About the author</h2>
          <div className="main__author-description"></div>
          <p className="main__author-description-paragraph">
            My name is Zachary Chabot. I am a full-stack developer focused on
            building scalable, user-centered web applications using the MERN
            stack.
          </p>
          <p className="main__author-description-paragraph">
            I use HTML5, CSS, JavaScript, React, Node.js, Express, and MongoDB
            to build responsive interfaces and reliable backend systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MainAuthorSection;
