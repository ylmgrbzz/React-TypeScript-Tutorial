import React from "react";

type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <div>
          Hello {props.name} {props.messageCount}
        </div>
      ) : (
        <div>Bye {props.name}</div>
      )}
      Greet {props.name} {props.messageCount}{" "}
    </div>
  );
};

export default Greet;
