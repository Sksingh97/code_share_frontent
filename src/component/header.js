import Link from 'next/link';
import React, { useState } from 'react';

export default () => {
    const [login_popup,set_login] = useState(false)
return (
    <>
    <div class="modal fade show" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    
    <div class="modal-content">
      <div class="modal-c-tabs">
      <div class="container d-flex justify-content-center">
    <div class="row my-5">
        <div class="col-md-6 text-left text-white lcol">
          <img src="/image/logo.png" id="lcolimg"/>
          <div class="greeting">
                <h3>Welcome to <span class="txt">Code Share</span></h3>
            </div>
            <h6 class="mt-3">Where any one can share there code and seek for help</h6>
        </div>
        <div class="col-md-6 rcol">
  <div><div>
    <ul class="nav nav-pills nav-fill mb-1" id="pills-tab" role="tablist">
      <li class="nav-item"> <a class="nav-link active" id="pills-signin-tab" data-toggle="pill" href="#pills-signin" role="tab" aria-controls="pills-signin" aria-selected="true">Sign In</a> </li>
      <li class="nav-item"> <a class="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false">Sign Up</a> </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-signin" role="tabpanel" aria-labelledby="pills-signin-tab">
        <div class="col-sm-12 rounded pt-2">
          <div class="text-center"><img src="https://placehold.it/80x80" class="rounded-circle border p-1"/></div>
          <form method="post" id="singninFrom">
            <div class="form-group">
              <label class="font-weight-bold">Email <span class="text-danger">*</span></label>
              <input type="email" name="email" id="email" class="form-control" placeholder="Enter valid email" required/>
            </div>
            <div class="form-group">
              <label class="font-weight-bold">Password <span class="text-danger">*</span></label>
              <input type="password" name="password" id="password" class="form-control" placeholder="***********" required/>
            </div>
            <div class="form-group">
              <div class="row">
                <div class="col">
                  <label><input type="checkbox" name="condition" id="condition"/> Remember me.</label>
                </div>
                <div class="col text-right"> <a href="javascript:;" data-toggle="modal" data-target="#forgotPass">Forgot Password?</a> </div>
              </div>
            </div>
            <div class="form-group">
              <input type="submit" name="submit" value="Sign In" class="btn btn-block btn-primary"/>
            </div>
          </form>
        </div>
      </div>
      <div class="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
        <div class="col-sm-12  rounded pt-2">
          <div class="text-center"><img src="https://placehold.it/80x80" class="rounded-circle border p-1"/></div>
          <form method="post" id="singnupFrom">
            <div class="form-group">
              <label class="font-weight-bold">Email <span class="text-danger">*</span></label>
              <input type="email" name="signupemail" id="signupemail" class="form-control" placeholder="Enter valid email" required/>
            </div>
            {/* <div class="form-group">
              <label class="font-weight-bold">User Name <span class="text-danger">*</span></label>
              <input type="text" name="signupusername" id="signupusername" class="form-control" placeholder="Choose your user name" required/>
              <div class="text-danger"><em>This will be your login name!</em></div>
            </div> */}
            {/* <div class="form-group">
              <label class="font-weight-bold">Phone #</label>
              <input type="text" name="signupphone" id="signupphone" class="form-control" placeholder="(000)-(0000000)"/>
            </div> */}
            <div class="form-group">
              <label class="font-weight-bold">Password <span class="text-danger">*</span></label>
              <input type="password" name="signuppassword" id="signuppassword" class="form-control" placeholder="***********" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Must have at least 6 characters' : ''); if(this.checkValidity()) form.password_two.pattern = this.value;"
                required/>
            </div>
            <div class="form-group">
              <label class="font-weight-bold">Confirm Password <span class="text-danger">*</span></label>
              <input type="password" name="signupcpassword" id="signupcpassword" class="form-control" pattern="^\S{6,}$" onchange="this.setCustomValidity(this.validity.patternMismatch ? 'Please enter the same Password as above' : '');" placeholder="***********" required/>
            </div>
            <div class="form-group">
              <label><input type="checkbox" name="signupcondition" id="signupcondition" required/> I agree with the <a href="javascript:;">Terms &amp; Conditions</a> for Registration.</label>
            </div>
            <div class="form-group">
              <input type="submit" name="signupsubmit" value="Sign Up" class="btn btn-block btn-primary"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="forgotPass" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <form method="post" id="forgotpassForm">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Forgot Password</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Email <span class="text-danger">*</span></label>
              <input type="email" name="forgotemail" id="forgotemail" class="form-control" placeholder="Enter your valid email..." required/>
            </div>
            <div class="form-group">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Sign In</button>
            <button type="submit" name="forgotPass" class="btn btn-primary"><i class="fa fa-envelope"></i> Send Request</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
            {/* <form class="sign-up">
                <h2 class="heading mb-4">Sign up</h2>
                <div class="form-group fone mt-2"> <i class="fas fa-user"></i> <input type="name" class="form-control" placeholder="Name"/> </div>
                <div class="form-group fone mt-2"> <i class="fas fa-envelope"></i> <input type="email" class="form-control" placeholder="Work email"/> </div>
                <div class="form-group fone mt-2"> <i class="fas fa-lock"></i> <input type="password" class="form-control" placeholder="Password"/>
                    <div class="image"><i class="fas fa-eye"></i></div>
                </div> <input type="checkbox" class="form-check-input ml-0" id="exampleCheck1"/> <label class="form-check-label ml-3" for="exampleCheck1">I agree to Stoke <u>Terms</u> and <u>Privacy Policy</u></label>
            </form> <button type="button" class="btn btn-success mt-5">Get satrted now</button>
            <p class="exist mt-4">Existing user? <span>Log in</span></p> */}
        </div>
    </div>
</div>
      </div>
    </div>
  </div>
</div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="logo" id="headerLeft">
    <Link href="/">
    <img className="logoimg" src="/image/HeaderLogo.png"/>
    </Link>
      
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
          <Link href="/">
        <a className="nav-link" href="/">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Snippet</a>
      </li>
      
    </ul>
  </div>
  <div>
    <form className="form-inline my-2 my-lg-0 right-align">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
</div>
<div className="vl"></div>
<ul className="navbar-nav">
    <li className="nav-item active">
        {/* <Link href="/" > */}
        <button type="button" class="btn btn-info btn-round" data-toggle="modal" data-target="#modalLRForm">
    Login/Signup
  </button>
        {/* </Link> */}
    </li>
</ul>
</nav>

</>
)
}