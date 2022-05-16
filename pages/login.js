export default function Login() {
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

          <p className="title">Welcome back</p>
          <p className="subtitle">Please sign in to your account</p>

          <form className="login-form" action="#">
            <div className="inputs">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <p className="password-reset">Forgot password?</p>
            </div>

            <button>Sign in</button>

            <div className="or-option">
              <div></div>
              <span>or</span>
              <div></div>
            </div>

            <div className="google-button">
              <img src="/assets/google_icon.svg" alt="google_icon" />
              <span>Sign in with Google</span>
            </div>

            <div className="sign-up-prompt">
              <p className="question">New Here?</p>
              <p className="link">Create an account</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
