import React from 'react'
import classnames from 'classnames'
import resume from '../assets/json/resume.json'

import {
  Collapse,
  NavbarBrand,
  Navbar as ReactNavbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from 'reactstrap'

function Navbar() {
  const [navbarColor, setNavbarColor] = React.useState('navbar-transparent')
  const [navbarCollapse, setNavbarCollapse] = React.useState(false)

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse)
    document.documentElement.classList.toggle('nav-open')
  }

  // React.useEffect(() => {
  //   const updateNavbarColor = () => {
  //     if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299) {
  //       setNavbarColor('')
  //     } else if (document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) {
  //       setNavbarColor('navbar-transparent')
  //     }
  //   }
  //   window.addEventListener('scroll', updateNavbarColor)
  //   return function cleanup() {
  //     window.removeEventListener('scroll', updateNavbarColor)
  //   }
  // })
  return (
    <ReactNavbar className={classnames('fixed-top', navbarColor)} color-on-scroll="300" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand href={'#home'} data-placement="bottom">
            {resume.navbar.headerTitle}
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames('navbar-toggler navbar-toggler', {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            {resume.navbar.headerLinks.map(link => {
              return (
                <NavItem key={link.name}>
                  <NavLink data-placement="bottom" href={link.link}>
                    {link.name}
                  </NavLink>
                </NavItem>
              )
            })}
          </Nav>
        </Collapse>
      </Container>
    </ReactNavbar>
  )
}

export default Navbar
