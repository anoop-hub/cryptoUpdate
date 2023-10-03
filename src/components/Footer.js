import React from 'react'


import './Footer.css'
const Footer = () => {
  return (
    <div>
      <div  class="padding">
    <div class="footer-clean">
      <footer>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li><a href="#" style={{color:'black'}}>Web design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">Hosting</a></li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li><a href="#">Company</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Legacy</a></li>
              </ul>
            </div>
            <div class="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li><a href="#">Job openings</a></li>
                <li><a href="#">Employee success</a></li>
                <li><a href="#">Benefits</a></li>
              </ul>
            </div>
            <div class="col-lg-3 item social">
              <a href="https://www.linkedin.com/in/uzer-khan-b5a507214/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9dzRo3YqRz2GZa5OlM%2BztA%3D%3D" style={{color:'#0A66C2'}}><i class="fa-brands fa-linkedin"></i></a
              ><a href="https://twitter.com/UzerKhan786" style={{color: '#00acee',backgroundColor: 'white'}}><i class="fa-brands fa-twitter"></i></a
              ><a href="https://github.com/Uzerkhan786" ><i class="fa-brands fa-github"></i></a>
              <p class="copyright">Company Name © 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </div>

  </div>
    </div>
  )
}

export default Footer
