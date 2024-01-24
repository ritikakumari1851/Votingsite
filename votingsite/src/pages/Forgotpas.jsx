import React from 'react'
export default function Forgotpas() {
  return (
    <div className=' pt-36 flex justify-center'>
      <div className="form-container">
      <div class="logo-container">
        Forgot Password
      </div>

      <form class="form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Enter your email" required=""/>
        </div>

        <button class="form-submit-btn" type="submit">Send otp</button>
      </form>

      <p class="signup-link">
        Don't have an account?
        <a href="#" class="signup-link link"> Sign up now</a>
      </p>
    </div>
    </div>
  )
}
