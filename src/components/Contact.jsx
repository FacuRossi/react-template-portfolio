import React from 'react'
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from 'reactstrap'
import resume from '../assets/json/resume.json'

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="text-center">{resume.contact.title}</h2>
          <Form className="contact-form">
            <Row>
              <Col md="6">
                <label>Name</label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </Col>
              <Col md="6">
                <label>Email</label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="text" />
                </InputGroup>
              </Col>
            </Row>
            <label>Message</label>
            <Input placeholder={resume.contact.textPlaceholder} type="textarea" rows="4" />
            <Row>
              <Col className="ml-auto mr-auto" md="4">
                <Button className="btn-fill" color="danger" size="lg">
                  {resume.contact.btnMsg}
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
