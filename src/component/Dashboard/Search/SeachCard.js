import React, { useState } from "react";

const SearchCard = ({ item }) => {
    return (
        <div className="col searchList my-3">
            <div className="card text-center">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <span className="card-title h5 questionHeader">{item}</span>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                Active
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                View Code
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="card-body">
                    <p className="text-left">With supporting text below as a natural lead-in to additional content.</p>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
