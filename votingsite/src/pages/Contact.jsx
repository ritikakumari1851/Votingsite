import React from 'react'

export default function Contact() {
  return (
    <div className=' pt-32 flex justify-center bg-gray-900 p-20'>
      <div class="form-container">
      <form class="form">
        <p className=' text-3xl font-bold text-gray-200'>Got Problem? We will Reach You!</p>
        <div class="form-group">
          <label for="email">Company Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>
  
    </div>
  )
}
