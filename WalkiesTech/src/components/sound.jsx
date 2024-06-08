import React from "react";

export const Sound = (props) => {
  return (
    <div id="sound">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
                {" "}
                <img src="img/app.png" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="painPoint-text">
                <h1>{props.data ? props.data.title : "loading..."}</h1>
                <p>{props.data ? props.data.description : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
