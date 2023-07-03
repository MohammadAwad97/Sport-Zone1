import LandingPage from "./Pages/LandingPage.jsx";
import SignIn from "./Components/Header/Header.js";
import "./App.css";
import Header from "./Components/Header/Header";
import PostsList from "./Components/Comunity/PostsList.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="heroSec">
        <div className="container">
          <div className="about_Text">
            <h2>About us</h2>
            <br />
            <p>
              Welcome to our website! We are passionate about creating a dynamic
              online platform that serves various purposes, catering to the
              diverse needs and interests of our users. Whether you're seeking
              the latest sports news or browsing for top-notch products, we
              strive to provide a user-friendly experience that meets your
              expectations. As we continue to develop and improve our website,
              your feedback plays a crucial role in shaping its direction.We
              value your opinions and ideas, as they help us enhance your
              browsing experience and ensure that our platform aligns with your
              preferences.
            </p>
          </div>
          <div className="img">
            <img
              src="https://images.pexels.com/photos/1103833/pexels-photo-1103833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Tennis"
            />
          </div>
        </div>
      </section>
      <section className="comment_post_Sec">
        <LandingPage />
        <div className="comment_Description">
          <h2>Lorem Lorem Lorem</h2>
          <p>
            Welcome to our website! We are passionate about creating a dynamic
            online platform that serves various purposes, catering to the
            diverse needs and interests of our users. Whether you're seeking the
            latest sports news or browsing for top-notch products, we strive to
            provide a user-friendly experience that meets your expectations. As
            we continue to develop and improve our website.
          </p>
          <div className="pic2_div">
            <img
              alt="pic2"
              src="https://images.pexels.com/photos/1080884/pexels-photo-1080884.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
