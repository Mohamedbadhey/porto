import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>MAKAAY JET DESIGNS</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
            Designed visually compelling marketing materials, including logos,
             brochures, social media graphics, and branding assets.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Tabarak centre</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
            Built end-to-end web applications, 
            handling both frontend (React, Angular, or Vue) and
            backend (Node.js, Python, or Java).
            
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Kismayo ICT solutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
            Developed and optimized software applications, focusing on performance, 
            scalability, and clean code.  Worked on backend systems, APIs, 
            and database management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
