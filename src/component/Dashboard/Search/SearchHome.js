import React, { useState } from "react";
import FilterData from "../FilterData";
import SearchCard from "./SeachCard";

const SearchHome = () => {
    const [questionArray, setQuestionArray] = useState(["Title 1", "Title 2", " Title 3", "Title 4", "Title 5", "Title 6"]);

    const renderTitle = questionArray.map((item, key) => {
        return <SearchCard item={item} key={key} />;
    });

    return (
        <div>
            <div className="col-md-12">
                <div className="d-flex">
                    <div className="leftBase p-3 bg-light rounded">
                        <FilterData />
                    </div>
                    <div className="rightBase w-100 p-3">
                        <h5>
                            Search Result for :- "React" <small className="text-secondary">1540 Answers</small>
                        </h5>
                        <div className="searchList mt-4">
                            {renderTitle ? renderTitle : <h5 className="text-center p-3 h6 border bg-light">No Result Found !!</h5>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchHome;
