import React from 'react'
import { Container, Button } from 'reactstrap'
import resume from '../assets/json/resume.json'

function Main() {
  let pageHeader = React.createRef()
  return (
    <>
      <div
        style={{
          backgroundImage: 'url(' + require('assets/img/mainBackgroundImage.jpg') + ')',
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>{resume.main.title}</h1>
            <h3>{resume.main.subtitle}</h3>
            <br />
            <div>
              {resume.main.links.map((link, index) => {
                return (
                  <Button
                    key={index}
                    className="btn-just-icon btn-neutral btn-lg"
                    color="link"
                    target="_blank"
                    href={link.path}
                  >
                    <i className={link.icon} />
                  </Button>
                )
              })}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Main
