import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap'
import resume from '../assets/json/resume.json'

const About = () => {
  document.documentElement.classList.remove('nav-open')
  useEffect(() => {
    document.body.classList.add('landing-page')
    return function cleanup() {
      document.body.classList.remove('landing-page')
    }
  })
  return (
    <Container>
      <div className="owner mt-6">
        <div className="avatar">
          <img
            alt="..."
            className="img-circle img-no-padding img-responsive"
            src={require('assets/img/profileImage.jpg')}
          />
        </div>
        <div className="name">
          <h4 className="title">
            {resume.about.name}
            <br />
          </h4>
          <h6 className="description">{resume.about.job}</h6>
        </div>
      </div>
      <Row>
        <Col className="ml-auto mr-auto text-center" md="6">
          <p>{resume.about.description}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default About
