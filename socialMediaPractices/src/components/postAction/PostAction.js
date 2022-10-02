import React, { useState, useEffect } from "react";

function PostAction() {
  const [users, setusers] = useState();

  const getPostByIdFrApi = (id) => {
    fetch("link..." + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setusers(data));
    console.log("first: " + JSON.stringify(users));
  };

  useEffect(() => {
    getPostByIdFrApi(2);
  }, []);

  return <div>
    <div>likee: {users?.likeCount}</div>
    <div>dislike: {users?.dislikeCount}</div>
  </div>;
}

export default PostAction;
