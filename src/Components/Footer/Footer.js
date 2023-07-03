import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="footer_Text">
          <p>
            <a href="/#" src="">
              Info
            </a>
            <a href="/#" src="">
              Support
            </a>
            <a href="/#" src="">
              Marketing
            </a>
          </p>
          <p>
            <a href="/#" src="">
              Terms of use
            </a>
            <a href="/#" src="">
              Privecy policy
            </a>
          </p>
          <p>@ 2023 SportZone</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
