import myLogo from "../../assets/front-logo.png";

export default function LoginRootLayout() {
  return (
    <div className="login-root">
      {/* LEFT (image) */}
      <div className="login-left">
        {<img src={myLogo} alt="Login" className="login-image" />}
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <div className="login-form-wrapper">
          
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your username"
              className="input"
            />
          </div>

          <div className="input-group password-group">
            <input
              type="password"
              placeholder="Enter your password"
              className="input"
            />

            <span className="eye-icon">👁️</span>
          </div>

          <div className="forgot-password">
            Forgot your password?
          </div>

          <button className="login-btn">
            Login
          </button>

        </div>
      </div>
    </div>
  );
}