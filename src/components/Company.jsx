import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import resume from '../assets/json/resume.json'

function Company() {
  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="title">{resume.company.title}</h2>
          <h5 className="description">{resume.company.description}</h5>
          <br />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        {resume.company.knowledgeFields.map(el => {
          return (
            <Col md={resume.company.sizeOfColumns} key={el.name}>
              <div className="info">
                <div className="icon icon-info">
                  <i className={el.icon} />
                </div>
                <div className="description">
                  <h4 className="info-title">{el.name}</h4>
                  <p className="description">{el.description}</p>
                </div>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Company
