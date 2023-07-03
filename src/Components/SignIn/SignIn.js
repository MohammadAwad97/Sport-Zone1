import "./SignUp.css";

function SignIn() {
  return (
    <main>
      <form className="signUp">
        <h1>
          Welcom back to
          <span style={{ color: "rgb(250, 91, 56)", fontSize: "1.1em" }}>
            Sport
          </span>
          zone
        </h1>
        <div className="feilds">
          <label>Email:</label>
          <br />
          <input placeholder="Enter your Email:" />
          <br />
          <label>PassWord:</label>
          <br />
          <input placeholder="Enter your password:" />
          <br />
          <button className="btnForm">LogIn</button>
        </div>
      </form>
      <img
        alt="sports"
        src="https://render.fineartamerica.com/images/rendered/search/poster/5.5/8/break/images/artworkimages/medium/2/us-open-championship-final-round-doug-pensinger.jpg"
      />
    </main>
  );
}

export default SignIn;
