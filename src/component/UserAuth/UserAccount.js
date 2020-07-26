import React from "react";

export default () => {
    return (
        <div className="modal fade show" id="modalLRForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div className="modal-dialog cascading-modal" role="document">
                <div className="modal-content">
                    <div className="modal-c-tabs">
                        <div className="container d-flex justify-content-center">
                            <div className="row my-5">
                                <div className="col-md-6 text-left text-white lcol">
                                    <img src="/image/logo.png" id="lcolimg" />
                                    <div className="greeting">
                                        <h3>
                                            Welcome to <span className="txt">Code Share</span>
                                        </h3>
                                    </div>
                                    <h6 className="mt-3">Where any one can share there code and seek for help</h6>
                                </div>
                                <div className="col-md-6 rcol">
                                    <div>
                                        <div>
                                            <ul className="nav nav-pills nav-fill mb-1" id="pills-tab" role="tablist">
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link active"
                                                        id="pills-signin-tab"
                                                        data-toggle="pill"
                                                        href="#pills-signin"
                                                        role="tab"
                                                        aria-controls="pills-signin"
                                                        aria-selected="true"
                                                    >
                                                        Sign In
                                                    </a>
                                                </li>
                                                <li className="nav-item">
                                                    <a
                                                        className="nav-link"
                                                        id="pills-signup-tab"
                                                        data-toggle="pill"
                                                        href="#pills-signup"
                                                        role="tab"
                                                        aria-controls="pills-signup"
                                                        aria-selected="false"
                                                    >
                                                        Sign Up
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="tab-content" id="pills-tabContent">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="pills-signin"
                                                    role="tabpanel"
                                                    aria-labelledby="pills-signin-tab"
                                                >
                                                    <div className="col-sm-12 rounded pt-2">
                                                        <div className="text-center">
                                                            <img src="https://placehold.it/80x80" className="rounded-circle border p-1" />
                                                        </div>
                                                        <form method="post" id="singninFrom">
                                                            <div className="form-group">
                                                                <label className="font-weight-bold">
                                                                    Email <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="email"
                                                                    id="email"
                                                                    className="form-control"
                                                                    placeholder="Enter valid email"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="font-weight-bold">
                                                                    Password <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    name="password"
                                                                    id="password"
                                                                    className="form-control"
                                                                    placeholder="***********"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <div className="row">
                                                                    <div className="col">
                                                                        <label>
                                                                            <input type="checkbox" name="condition" id="condition" /> Remember me.
                                                                        </label>
                                                                    </div>
                                                                    <div className="col text-right">
                                                                        <a href="#" data-toggle="modal" data-target="#forgotPass">
                                                                            Forgot Password?
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <input
                                                                    type="submit"
                                                                    name="submit"
                                                                    value="Sign In"
                                                                    className="btn btn-block btn-primary"
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                                                    <div className="col-sm-12  rounded pt-2">
                                                        <div className="text-center">
                                                            <img src="https://placehold.it/80x80" className="rounded-circle border p-1" />
                                                        </div>
                                                        <form method="post" id="singnupFrom">
                                                            <div className="form-group">
                                                                <label className="font-weight-bold">
                                                                    Email <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="signupemail"
                                                                    id="signupemail"
                                                                    className="form-control"
                                                                    placeholder="Enter valid email"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="font-weight-bold">
                                                                    Password <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    name="signuppassword"
                                                                    id="signuppassword"
                                                                    className="form-control"
                                                                    placeholder="***********"
                                                                    pattern="^\S{6,}$"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="font-weight-bold">
                                                                    Confirm Password <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="password"
                                                                    name="signupcpassword"
                                                                    id="signupcpassword"
                                                                    className="form-control"
                                                                    pattern="^\S{6,}$"
                                                                    placeholder="***********"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>
                                                                    <input type="checkbox" name="signupcondition" id="signupcondition" required /> I
                                                                    agree with the
                                                                    <a href="#">Terms &amp; Conditions</a> for Registration.
                                                                </label>
                                                            </div>
                                                            <div className="form-group">
                                                                <input
                                                                    type="submit"
                                                                    name="signupsubmit"
                                                                    value="Sign Up"
                                                                    className="btn btn-block btn-primary"
                                                                />
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="modal fade" id="forgotPass" tabIndex="-1" role="dialog" aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <form method="post" id="forgotpassForm">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title">Forgot Password</h5>
                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <div className="form-group">
                                                                <label>
                                                                    Email <span className="text-danger">*</span>
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    name="forgotemail"
                                                                    id="forgotemail"
                                                                    className="form-control"
                                                                    placeholder="Enter your valid email..."
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="form-group"></div>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                                                Sign In
                                                            </button>
                                                            <button type="submit" name="forgotPass" className="btn btn-primary">
                                                                <i className="fa fa-envelope"></i> Send Request
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
