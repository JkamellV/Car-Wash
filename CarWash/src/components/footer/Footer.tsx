import "./Footer.css";
function Footer() {
  return (
    <footer className="section-footer">
      <div className="section-top">
        <div className="title">
          <h1>CarWash</h1>
        </div>
        <div className="container-register">
          <div className="Text-input">
            <p>New to Car Wash? Join Us Now</p>
            <div className="input-text">
              <input type="text" placeholder="Enter your Email" />
            </div>
          </div>
          <div className="btn">
            <button className="btn-register">Register </button>
          </div>
        </div>
      </div>
      <div className="sectio-bottom">
        <ul className="box-text">
          <h3>HELP</h3>
          <li>
            {" "}
            <a href="/">Help Center</a>
          </li>
          <li>
            <a href=""></a>How to shop
          </li>
        </ul>
        <ul className="box-text">
          <h3>ABUOT</h3>
          <li>About Car Wash</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className="box-text">
          <h3>Contact us</h3>
          <li>Phone: +94 11 23145678</li>
          <li>Open Hour: Every day 8.00 am- 5.00pm</li>
          <li>Email: info@example.com</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
