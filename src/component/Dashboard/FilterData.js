import React from "react";

const FilterData = () => {
    return (
        <div className="card filterData m-auto">
            <div className="card-header d-flex justify-content-between bg-white">
                <p className="mb-0">Filters</p>
                <a href="#" className="small text-danger">
                    Clear
                </a>
            </div>
            <div className="list-group">
                <button type="button" className="list-group-item list-group-item-action">
                    Relevance
                </button>
                <button type="button" className="list-group-item list-group-item-action">
                    Newest
                </button>
                <button type="button" className="list-group-item list-group-item-action active">
                    Active
                </button>
                <button type="button" className="list-group-item list-group-item-action">
                    Votes
                </button>
            </div>
        </div>
    );
};

export default FilterData;
