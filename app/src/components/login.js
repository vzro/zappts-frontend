import { Content } from "./content";

export const Login = ({ setIsSigningUp, isSigningUp }) => {
  return (
    <Content primary="#fff" text="#000">
      <div className="brand-text">
        <h1>Invision</h1>
      </div>
      <h1 className="welcome-text">
        {isSigningUp ? "Getting Started" : "Welcome to Invision"}
      </h1>
      <form>
        {isSigningUp && (
          <div>
            <label htmlFor="fullname">Full name</label>
            <input
              type="text"
              id="name"
              placeholder="type your full name here"
            />
          </div>
        )}
        <div>
          <label htmlFor="email">
            {isSigningUp ? "Email" : "Username or Email"}
          </label>
          <input
            type="text"
            id="email"
            placeholder="type your email address here"
          />
        </div>
        <div>
          <label htmlFor="password">
            {isSigningUp ? "Create Password" : "Password"}
          </label>
          <input
            type="password"
            id="password"
            placeholder="type your password here"
          />
        </div>
        {!isSigningUp && <p className="forgot-password">Forgot password?</p>}
        <button type="submit">{isSigningUp ? "Sign up" : "Sign in"}</button>
      </form>

      <div className="divider">
        <hr /> <p>Or</p> <hr />
      </div>

      <div className="google-user">
        <button>
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="google-logo"
          ></img>
          <p>{isSigningUp ? "Sign up" : "Sign in"} with Google</p>
        </button>
      </div>

      {isSigningUp ? (
        <div>
          <div className="tos">
            <p>By signing up, you agree</p>
            <span>
              <a href="#">Terms of Conditions</a>
              <span> and </span>
              <a href="#">Privacy Policy</a>
            </span>
          </div>

          <div className="user-login">
            <span>
              <span>Already on Invision? </span>
              <a href="#" onClick={() => setIsSigningUp(false)}>
                Log in
              </a>
            </span>
          </div>
        </div>
      ) : (
        <div className="user-signup">
          <span>New to Invision? </span>
          <a href="#" onClick={() => setIsSigningUp(true)}>
            Create an Account
          </a>
        </div>
      )}
    </Content>
  );
};
