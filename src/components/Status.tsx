import React from "react";

type StatusProps = {
  status: "loading" | "success" | "failed";
};

const Status = (props: StatusProps) => {
  let message = "";
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "data fetched succes";
  } else if (props.status === "failed") {
    message = "data fetched failed";
  }

  return <div> status {message}</div>;
};

export default Status;
