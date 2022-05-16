import Link from "next/link";

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

            <Link href="/home">
              <button>Sign in</button>
            </Link>

            <div className="or-option">
              <div></div>
              <span>or</span>
              <div></div>
            </div>

            <Link href="/home">
              <div className="google-button">
                <img src="/assets/google_icon.svg" alt="google_icon" />
                <span>Sign in with Google</span>
              </div>
            </Link>

            <div className="sign-up-prompt">
              <p className="question">New Here?</p>

              <Link href="signup">
                <p className="link">Create an account</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
