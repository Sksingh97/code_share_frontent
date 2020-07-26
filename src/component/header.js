import Link from "next/link";
import React, { useState } from "react";
import UserAccount from "./UserAuth/UserAccount";

export default () => {
    return (
        <>
            <UserAccount />
            <nav className="navbar navbar-expand-lg navbar-dark bg-darkBlue">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="logo" id="headerLeft">
                    <Link href="/">
                        <img className="logoimg" src="/image/HeaderLogo.png" />
                    </Link>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Trending
                            </a>
                        </li>
                        <li className="nav-item active">
                            <button type="button" className="btn btn-primary btn-round" data-toggle="modal" data-target="#modalLRForm">
                                Account
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-light">
                <div className="col-md-12 my-2">
                    <form className="form-inline my-2 my-lg-0 right-align d-flex justify-content-center">
                        <div className="input-group w-75">
                            <input type="text" className="form-control" placeholder="Type your Question here..." />
                            <div className="input-group-append">
                                <button className="btn btn-info" type="button">
                                    <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    );
};
