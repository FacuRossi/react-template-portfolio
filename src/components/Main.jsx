import React from 'react'
import { Container } from 'reactstrap'
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
          </div>
        </Container>
      </div>
    </>
  )
}

export default Main
