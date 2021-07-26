import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody } from "reactstrap";
class CampsiteInfo extends Component {
  renderCampsite = (campsite) => {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={campsite.image} alt={campsite.name} />
          <CardImgOverlay>
            <CardTitle>{campsite.name}</CardTitle>
          </CardImgOverlay>
          <CardBody>{campsite.description}</CardBody>
        </Card>
      </div>
    );
  };

  renderComments = (comments) => {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {comments.map((comment) => {
            return (
              <div key={comment.id}>
                <p>
                  {comment.text}
                  <br />
                  {`--${comment.author}, `}
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit",
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </div>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { campsite } = this.props;
    if (campsite) {
      return (
        <div className="container">
          <div className="row">
            {this.renderCampsite(campsite)}
            {this.renderComments(campsite.comments)}
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default CampsiteInfo;
