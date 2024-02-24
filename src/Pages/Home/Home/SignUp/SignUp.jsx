import "./SignUp.scss";

const SignUp = () => {
  return (
    <div className="signup">
      <div data-aos="flip-left" data-aos-duration="2000">
        <p className="signup-text">Sign up and get exclusive special deals</p>
      </div>
      <div class="input-group" data-aos="flip-down" data-aos-duration="2000">
        <input type="text" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignUp;
