import Link from "next/link";

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

              <Link href="/home">
                <button>Sign Up</button>
              </Link>

              <div className="sign-in-prompt">
                <p className="question">Already have an account?</p>

                <Link href="/login">
                  <p className="link">Login</p>
                </Link>
              </div>

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
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
