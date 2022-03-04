<div>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta charSet="utf-8" />
  <title>Log In and Sign up menus</title>
  <link rel="shortcut icon" href="." />
  <link rel="stylesheet" href="assets/css/login.css" />
  <div className="container">
    <form className="form " id="Login">
      <h1 className="form__title">Login</h1>
      <div className="form__message form__message--error">.</div>
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autofocus
          placeholder="Username"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autofocus
          placeholder="Password"
        />
        <div className="form__input-error-message" />
      </div>
      <button className="form__button" type="submit">
        Continue
      </button>
      <p className="form__text">
        <a href="#" className="form__link">
          Forgot your password?
        </a>
      </p>
      <p className="form__text">
        <a className="form__link" href id="linkcreateAccount">
          Don't have an account? Create one
        </a>
      </p>
    </form>
    {/*HERE THE REGISTRATION FORM STARTS BELOW*/}
    <form className="form form--hidden" id="createAccount">
      <h1 className="form__title">Create Account</h1>
      <div className="form__message form__message--error" />
      {/*Input Fields */}
      <div className="form__input-group">
        <input
          type="text"
          className="form__input"
          autofocus
          placeholder="Email Address"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autofocus
          placeholder="Password"
        />
        <div className="form__input-error-message" />
      </div>
      <div className="form__input-group">
        <input
          type="password"
          className="form__input"
          autofocus
          placeholder="Confirm Password"
        />
        <div className="form__input-error-message" />
      </div>
      <button className="form__button" type="submit">
        Continue
      </button>
      <p className="form__text">
        <a className="form__link" href id="linkLogin">
          Already have an account?{" "}
        </a>
      </p>
    </form>
  </div>
</div>;
