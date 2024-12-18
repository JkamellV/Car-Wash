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
            <button>Register </button>
          </div>
        </div>
      </div>
      <div className="sectio-bottom">
        <ul>
          <li>
            <h3>HELP</h3>
          </li>
          <li>Help Center</li>
          <li>How to shop</li>
        </ul>
        <ul>
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
        <ul>
          <li>3</li>
          <li>3</li>
          <li>3</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
