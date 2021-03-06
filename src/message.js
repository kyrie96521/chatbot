import React from "react";
import a from "./";
import url from"./doctor.jpg";
class Message extends React.Component {
  constructor() {
    super();
  }

  render() {
    

    console.log(this.props);
    return (
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
          <div className="row valign-wrapper">
            {this.props.speaks === "jisoo" && (
              <div style={{left:"10px"}}>
                <img src={url} className="circle z-depth-2" height="60px"/>
              </div>
            )}
            <div className="col s10">
              <span className="black-text">
                {this.props.text}
                {this.props.addReply == undefined
                  ? ""
                  : this.props.addReply.map((each, index) => {
                      if (
                        each.content_type === "Label" ||
                        each.content_type === "Lable"
                      ) {
                        return (
                          <div style={{ marginTop: "5px" }}>
                            <button
                              className="btn-small"
                              key={index}
                              onClick={() =>
                                this.props.query_value(each.content)
                              }
                            >
                              {each.content}
                            </button>
                          </div>
                        );
                      } else if (each.content_type === "Link") {
                        return (
                          <div style={{ marginTop: "5px" }}>
                            <a href={each.content} target="_blank" key={index}>
                              {each.title}
                            </a>
                          </div>
                        );
                      } else if (each.content_type === "Text") {
                        return (
                          <div style={{ marginTop: "5px" }}>{each.content}</div>
                        );
                      }
                    })}

                {this.props.more &&
                this.props.addReply &&
                this.props.addReply[0].content_type === "Link" ? (
                  <button
                    className="btn-small right"
                    onClick={() => this.props.more_link()}
                  >
                    more
                  </button>
                ) : (
                  ""
                )}
              </span>
            </div>
            {this.props.speaks === "user" && (
              <div className="col s2">
                <a
                  href="/"
                  className="btn-floating btn-large waves-effect waves-light blue"
                >
                  {this.props.speaks}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Message;
