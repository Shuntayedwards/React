import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import { CommentDetails } from "./CommentDetails";
import { ApprovalCard } from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
          icon={faker.image.avatar()}
          author="Shuntay"
          timeAgo="Today at 2:00PM"
          comment="You can never be like me NOOOB!!"
        ></CommentDetails>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          icon={faker.image.avatar()}
          author="Mommy"
          timeAgo="Today at 5:00AM"
          comment="Shuntay is the smartest child IN THE WOORRLLDD !!"
        ></CommentDetails>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          icon={faker.image.avatar()}
          author="Gio"
          timeAgo="2 weeks ago"
          comment="FAAARRTTT!!!!!!"
        ></CommentDetails>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
