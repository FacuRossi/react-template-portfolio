import React from 'react'
import { Container, Row, Col, Button, CardBody, CardFooter, CardTitle, Card } from 'reactstrap'
import resume from '../assets/json/resume.json'

function Team() {
  return (
    <Container>
      <h2 className="title">{resume.team.title}</h2>
      <Row>
        {resume.team.members.map(el => {
          return (
            <Col md={resume.team.sizeOfColumns} key={el.name}>
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <img alt="..." src={el.imagePath} />
                </div>
                <CardBody>
                  <div className="author">
                    <CardTitle tag="h4">{el.name}</CardTitle>
                    <h6 className="card-category">{el.job}</h6>
                  </div>
                  <p className="card-description text-center">{el.description}</p>
                </CardBody>
                <CardFooter className="text-center">
                  {el.links.map((link, index) => {
                    return (
                      <Button
                        key={index}
                        className="btn-just-icon btn-neutral"
                        color="link"
                        target="_blank"
                        href={link.path}
                      >
                        <i className={link.icon} />
                      </Button>
                    )
                  })}
                </CardFooter>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default Team
