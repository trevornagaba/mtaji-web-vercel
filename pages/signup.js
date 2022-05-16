export default function SignUp() {
  return (
    <>
      <div className="main-container">
        <div className="background-container"></div>

        <div className="content">
          <div className="top-container">
            <div className="logo-container">
              <div className="logo">
                <img src="/assets/logo.svg" alt="logo" />
                <span>mtaji</span>
              </div>
            </div>
          </div>

          <p className="title">Sign Up</p>

          <form className="signup-form" action="#">
            <div className="inputs">
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />

              <button>Sign Up</button>

              <div className="sign-in-prompt">
                <p className="question">Already have an account?</p>
                <p className="link">Login</p>
              </div>

              <div className="or-option">
                <div></div>
                <span>or</span>
                <div></div>
              </div>

              <div className="google-button">
                <img src="/assets/google_icon.svg" alt="google_icon" />
                <span>Sign in with Google</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
