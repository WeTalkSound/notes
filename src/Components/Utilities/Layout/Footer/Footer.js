import React from 'react'
import './Footer.css'
import Row from 'Components/Utilities/Layout/Containers/Row'
import { Link } from 'react-router-dom'
import Container from 'Components/Utilities/Layout/Containers/Container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <div className="col-sm-4">
            <h5>WeTalkSound</h5>
            <p>
              We are Nigeria's biggest music community. This blog represents our
              contribution to documenting and sharing knowledge regarding our rich
              musical heritage.
            </p>
            <a href="https://wetalksound.co/" className="btn btn-primary">About Us</a>
          </div>
          <div className="col-sm-4">
            <h5>Links</h5>
            <p>
              <a href="https://t.me/wetalksound">Our Community</a>
            </p>
            <p>
              <Link to="/contribute">Contribute</Link>
            </p>
            <p>
              <Link to="/credits">Credits</Link>
            </p>
          </div>
          <div className="col-sm-4">
            <h5>Links</h5>
            <p>
              <a href="https://t.me/wetalksound">Our Community</a>
            </p>
            <p>
              <Link to="/contribute">Contribute</Link>
            </p>
          </div>
        </Row>
        <Row>
          <div className="col-12 text-center">
            <p>
              &copy; 2020, WeTalkSound
            </p>
          </div>
        </Row>
      </Container>
    </footer>
  )
}