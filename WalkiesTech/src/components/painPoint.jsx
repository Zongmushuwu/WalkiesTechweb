import React from "react";

export const PainPoint = (props) => {
  return (
    <div id="painPoint">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/icons8-quote-100.png" className="img-responsive quote" alt="" />
            <i>{props.data ? props.data.interview : "loading..."}</i>
            <img src="img/interview placeholder.jpg" className="img-responsive" alt="" />{" "}
            <div className="text-on-video">Watch what Maria say ...</div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="painPoint-text">
              <div className="row">
                {props.data && props.data.sta
                  ? props.data.sta.map((d, i) => (
                      <div key={`${d.title}-${i}`} className="">
                        <i className={d.icon}></i>
                        <h3>{d.title}</h3>
                        <p>{d.text}</p>
                      </div>
                    ))
                  : "Loading..."}
              </div>
              {/* <h2>Do you know that</h2> */}
              {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
              {/* <h3>Why Choose Us?</h3> */}
              {/* <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
