import React, { useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

const About = () => {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <Container>
      <div className="owner">
        <div className="avatar">
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src={require("assets/img/faces/joe-gardner-2.jpg")}
          />
        </div>
        <div className="name">
          <h4 className="title">
            Jane Faker <br />
          </h4>
          <h6 className="description">Music Producer</h6>
        </div>
      </div>
      <Row>
        <Col className="ml-auto mr-auto text-center" md="6">
          <p>
            An artist of considerable range, Jane Faker — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
