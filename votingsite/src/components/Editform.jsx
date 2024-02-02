import React from 'react'

export default function Editform() {
  return (
    <div>
        <p className=' text-3xl font-serif m-3'>Edit Your Profile</p>
       <form>     
                        <div class="mb-3">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                            <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" value="username"/>
                        </div>
                     
                        <div class="row gx-3 mb-3">
                          
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Name</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="Valerie"/>
                            </div>
                         
                            <div class="col-md-6">
                                <label class="small mb-1" htmlFor="Gender">Gender</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Gender" value="Female"/>
                            </div>
                        </div>
                       
                        <div class="row gx-3 mb-3">
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputOrgName">Identification no</label>
                                <input class="form-control" id="inputOrgName" type="text" placeholder="Enter your identification no." value="N/A"/>
                            </div>
                            
                          
                        </div>
                       
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email address</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="ritikakri3708@example.com"/>
                        </div>
                      
                        <div class="row gx-3 mb-3">
                            
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputPhone">Phone number</label>
                                <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number" value="555-123-4567"/>
                            </div>
                           
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputBirthday">Birthday</label>
                                <input class="form-control" id="inputBirthday" type="text" name="birthday" placeholder="Enter your birthday" value="06/10/1988"/>
                            </div>
                        </div>
                       
                        <button className="btn btn-primary bg-blue-900 rounded-lg p-3 mb-4 text-gray-300 font-serif" type="button">Save changes</button>
                    </form>
                </div>
  )
}
