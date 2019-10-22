import React from 'react'
import { Row, Container } from 'reactstrap'
import resume from '../assets/json/resume.json'

function Footer() {
  return (
    <footer className="footer footer-black footer-white section-dark">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              {resume.footer.links.map(el => {
                return (
                  <li key={el.name}>
                    <a
                      href={el.path}
                      // eslint-disable-next-line react/jsx-no-target-blank
                      target="_blank"
                    >
                      {el.name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with <i className="fa fa-heart heart" />
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
