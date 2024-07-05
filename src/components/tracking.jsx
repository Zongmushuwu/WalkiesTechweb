import React from "react";

export const Tracking = (props) => {
  return (
    <div id="tracking">
      <div className="container">
        <div className="row">
          
          <div className="col-xs-12 col-md-6">
            <div className="painPoint-text">
                <h1>{props.data ? props.data.title : "loading..."}</h1>
                <p>{props.data ? props.data.description : "loading..."}</p>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
                {" "}
                <img src="img/newApp.png" className="img-responsive" alt="" />{" "}
              </div>
        </div>
      </div>
    </div>
  );
};
