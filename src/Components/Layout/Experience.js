import React from "react";
import { Row, Col } from "react-bootstrap";

import TransitionPage from "../UI/TransitionPage";
import "./Experience.scss";
import ExpSection from "./ExpSection";

const Experience = () => {
  const highlightSection = {
    title: "Highlights",
    icon: "fa-solid fa-star",
    content: (
      <>
        <h4>Front-End Web Development (6 Months)</h4>
        <ul>
          <li>Building websites with React, Redux, JavaScript, HTML, CSS</li>
          <li>Hosting and connecting websites to back-ends via Firebase</li>
          <li>Creating functional web applications and crypto dApps</li>
        </ul>
        <h4>Web Design (5 Years)</h4>
        <ul>
          <li>Designing and maintaining eCommerce websites</li>
          <li>Utilize WooCommerce and Shopify platforms</li>
          <li>
            Integrating sites with third-party apps for payment, taxes, shipping
          </li>
        </ul>
        <h4>Content Creation (5 Years)</h4>
        <ul>
          <li>Producing and editing photos and video for websites and </li>
          <li>
            Writing content for Search Engine Optimization (SEO) and consumption
          </li>
        </ul>
        <h4>Project Management (10 Years)</h4>
        <ul>
          <li>Leading teams up to 11 people to ensure successful projects</li>
          <li>Managing multi-million-dollar programs to exceed deliverables</li>
        </ul>
      </>
    ),
  };

  const workSection = {
    title: "Work Experience",
    icon: "fa-solid fa-briefcase",
    content: (
      <>
        <div className="work-div">
          <Row>
            <Col>
              <h4>Octago Products</h4>
              <h6>eCommerce Business Owner</h6>
            </Col>
            <Col className="text-end">
              <p>2019-Present</p>
              <p>Calgary, AB</p>
            </Col>
            <ul>
              <li>
                Established a succecssful eCommerce brand for crafting supplies
              </li>
              <li>
                Built a custom website and all content, including photography,
                video, and icons
              </li>
              <li>
                Managed all aspects of business, from supply chain to product
                design and sales
              </li>
            </ul>
          </Row>
        </div>
        <div className="work-div">
          <Row>
            <Col>
              <h4>Absorb Software</h4>
              <h6>Account Manager</h6>
            </Col>
            <Col className="text-end">
              <p>2019-2021</p>
              <p>Calgary, AB</p>
            </Col>
            <ul>
              <li>
                Managed a client base valued at $7M of
                annually-recurring-revenue
              </li>
              <li>
                Showcased software to clients, facilitated renewals and product
                upgrades, and coordinated with technical teams
              </li>
            </ul>
          </Row>
        </div>
        <div className="work-div">
          <Row>
            <Col>
              <h4>Prospect Human Services</h4>
              <h6>Program Manager</h6>
            </Col>
            <Col className="text-end">
              <p>2017-2019</p>
              <p>Calgary, AB</p>
            </Col>
            <ul>
              <li>
                Led a team of 11 to increase the skill set of Calgarians with
                disabilities
              </li>
              <li>
                Responsible for meeting multi-million dollar contract
                deliverables. Exceeded all contract requirements, ensuring the
                project's renewal.
              </li>
            </ul>
          </Row>
        </div>
        <div className="work-div">
          <Row>
            <Col>
              <h4>Prospect Human Services</h4>
              <h6>Workforce Advisor</h6>
            </Col>
            <Col className="text-end">
              <p>2014-2017</p>
              <p>Calgary, AB</p>
            </Col>
            <ul>
              <li>
                Worked with Fortune 500 and SME build more inclusive workplaces
                for people with disabilities
              </li>
              <li>
                Facilitated training for hundreds of employees, executive team
                meetings, and built strategic and operational plans for clients
              </li>
            </ul>
          </Row>
        </div>
      </>
    ),
  };

  const educationSection = {
    title: "Education",
    icon: "fa-solid fa-graduation-cap",
    content: (
      <>
        <div className="ed-div">
          <Row>
            <Col>
              <h4>University of Calgary</h4>
              <h6>BA Political Science</h6>
            </Col>
            <Col className="text-end">
              <p>2011</p>
              <p>Calgary, AB</p>
            </Col>
          </Row>
        </div>
        <div className="cert-div">
          <h4>Courses & Certificates</h4>
          <h6>The Complete Web Development Bootcamp</h6>
          <p>London App Brewery (2022)</p>
          <h6>JavaScript Algorithms and Data Structures Certification</h6>
          <p>freeCodeCamp (2022)</p>
          <h6>React - The Complete Guide</h6>
          <p>Academind (2022)</p>
          <h6>Complete React Developer Course</h6>
          <p>ZeroToMastery (2022)</p>
          {/* <h6>Responsive Web Design Certification</h6>
              <p>freeCodeCamp / 2022</p>
              <h6>Front-End Development Libraries Certification</h6>
              <p>freeCodeCamp / 2022</p> */}
        </div>
      </>
    ),
  };

  return (
    <>
      <TransitionPage title="Skills, experience, and education..." />
      <section className="experience-section">
        <ExpSection info={highlightSection} />
        <hr></hr>
        <ExpSection info={workSection} />
        <hr></hr>
        <ExpSection info={educationSection} />
      </section>
    </>
  );
};

export default Experience;
