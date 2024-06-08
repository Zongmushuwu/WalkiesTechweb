import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="title">
          <h2>Why Us</h2>
        </div>
        {/* <div className="row fig">
          <div className="col-xs-4 col-md-4 collar">
            <img src="img/collar placeholder.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-4 col-md-4 app">
            <img src="img/app.png" className="img-responsive" alt="" />{" "}
          </div>
        </div> */}
        <div className="row fea">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-2">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
