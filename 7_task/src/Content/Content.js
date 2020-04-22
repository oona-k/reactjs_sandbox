import React from "react";

const Content = ({ love, hate }) => {
  if (love === 0 && hate === 0) {
    return (
      <div>
        <h2>
          Nothing to show yet! <br />
          Be first to give an opinion.
        </h2>
      </div>
    );
  }

  return (
    <div>
      <h1>Votes:</h1>
      <h2>Love: {love}</h2>
      <h2>Hate: {hate}</h2>
    </div>
  );
};
export default Content;
