import React from "react";

function NotFound({ data }) {
  // console.log("props: ", data);
  return (
    <div>
      <h1>{data?.category_number}</h1>
      <h2>categories</h2>
    </div>
  );
}

export default NotFound;
