import React from "react";

type PersonListProps = {
  name: { first: string; last: string }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((name, index) => (
        <h2 key={index}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
