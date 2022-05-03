import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <>
      <section className="gray-section">
        <h1>Experience & Skills</h1>
        <Row>
          <Col lg={5}>
            <h3>
              <FontAwesomeIcon className="exp-icon" icon={faStar} />
              Skill Highlights
            </h3>
          </Col>
          <Col lg={7}>
            <h5>Web Development</h5>
            <p>Stuff I did.</p>
            <h5>Photography & Videography</h5>
            <p>Stuff I did.</p>
            <h5>Project Management</h5>
            <p>Stuff I did.</p>
          </Col>
        </Row>
        <hr></hr>

        {/* WORK EXPERIENCE */}
        {/* <Row>
          <Col lg={5}>
            <h3>Work Experience</h3>
          </Col>
          <Col lg={7}>
            <Row>
              <Col>
                <h5>eCommerce Business Owner</h5>
              </Col>
              <Col className="text-end">2021-Present</Col>
            </Row>
            <Row>
              <Col>
                <h6>Octago Products</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>Stuff I did.</p>
            <br />
            <Row>
              <Col>
                <h5>Account Manager</h5>
              </Col>
              <Col className="text-end">2021-Present</Col>
            </Row>
            <Row>
              <Col>
                <h6>Absorb Software</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>Stuff I did.</p>
            <br />
            <Row>
              <Col>
                <h5>Program Manager</h5>
              </Col>
              <Col className="text-end">2021-Present</Col>
            </Row>
            <Row>
              <Col>
                <h6>Prospect Human Services</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>Stuff I did.</p>
            <br />
            <Row>
              <Col>
                <h5>Workforce Advisor</h5>
              </Col>
              <Col className="text-end">2021-Present</Col>
            </Row>
            <Row>
              <Col>
                <h6>Prospect Human Services</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>Stuff I did.</p>
          </Col> */}

        <Row>
          <Col lg={5}>
            <h3>
              <FontAwesomeIcon className="exp-icon" icon={faBriefcase} />
              Work Experience
            </h3>
          </Col>
          <Col lg={7}>
            <Row>
              <Col>
                <h5>Octago Products</h5>
              </Col>
              <Col className="text-end">2021-Present</Col>
            </Row>
            <Row>
              <Col>
                <h6>eCommerce Business Owner</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>
              Established a best-selling eCommerce brand in the arts and crafts
              niche.
            </p>
            <p>
              Built and maintained all online operations, including our
              eCommerce website, Amazon.com, Walmart.com and other sales
              channels.
            </p>
            <br />
            <Row>
              <Col>
                <h5>Absorb Software</h5>
              </Col>
              <Col className="text-end">2019-2021</Col>
            </Row>
            <Row>
              <Col>
                <h6>Account Manager</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>
              Managed a client base valued at $7M of annually-recurring-revenue.
            </p>
            <p>
              Showcased software to clients, facilitated renewals and product
              upgrades, and coordinated with technical teams.
            </p>

            <br />
            <Row>
              <Col>
                <h5>Prospect Human Services</h5>
              </Col>
              <Col className="text-end">2014-2019</Col>
            </Row>
            <Row>
              <Col>
                <h6>Program Manager</h6>
              </Col>
              <Col className="text-end">Calgary, AB</Col>
            </Row>
            <p>
              Led a team of 11 to help disadvantaged Calgarians find employment.
            </p>
            <p>
              Responsible for meeting multi-million dollar contract
              deliverables. Exceeded all contract requirements, ensuring the
              project's renewal.
            </p>
            <Row>
              <Col>
                <h6>Workforce Advisor</h6>
              </Col>
              <Col className="text-end"></Col>
            </Row>
            <p>
              Worked with Fortune 500 and SME build more inclusive workplaces
              for people with disabilities.
            </p>
            <p>
              Facilitated presentations, executive team meetings, and build
              strategic and operational plans for companies to implement.
            </p>
            <br />
          </Col>

          {/* EDUCATION */}
        </Row>
        <hr></hr>
        <section>
          <Row>
            <Col lg={5}>
              <h3>
                <FontAwesomeIcon className="exp-icon" icon={faGraduationCap} />{" "}
                Education
              </h3>
            </Col>
            <Col lg={7}>
              <Row>
                <Col>
                  <h5>Bachelor of Arts</h5>
                </Col>
                <Col className="text-end">2011</Col>
              </Row>
              <Row>
                <Col>
                  <h6>University of Calgary</h6>
                </Col>
                <Col className="text-end">Calgary, AB</Col>
              </Row>
              <p>Political Science</p>
              <br />

              <h5>Courses & Certificates</h5>
              <h6>The Complete Web Development Bootcamp</h6>
              <p>London App Brewery / 2022</p>
              <h6>JavaScript Algorithms and Data Structures Certification</h6>
              <p>freeCodeCamp / 2022</p>
              <h6>React - The Complete Guide</h6>
              <p>Academind / 2022</p>
              <h6>Complete React Developer 2022 Course</h6>
              <p>ZeroToMastery / 2022</p>
              {/* <h6>Responsive Web Design Certification</h6>
              <p>freeCodeCamp / 2022</p>
              <h6>Front-End Development Libraries Certification</h6>
              <p>freeCodeCamp / 2022</p> */}
            </Col>
          </Row>
        </section>
      </section>
    </>
  );
};

export default Experience;
