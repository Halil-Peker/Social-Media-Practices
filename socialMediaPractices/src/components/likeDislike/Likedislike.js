import React, { useState, useEffect } from "react";
import "./Likedislike.css";

function Likedislike() {
  const [user, setUser] = useState([{}]);

  const [like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);

  const [likeActive, setLikeActive] = useState(false);
  const [disLikeActive, setdisLikeActive] = useState(false);

  const getPostById = async (id) => {
    // .this side should contain the link of data that shoulde be liked or disliked
    await fetch("link..." + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setLike(user.likeCount);
        setdisLike(user.dislikeCount);
      });
  };

  useEffect(() => {
    getPostById(2);
    console.log("first: " + JSON.stringify(user));
  },[]);

  function likef() {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
      if (disLikeActive) {
        setdisLikeActive(false);
        setLike(like + 1);
        setdisLike(disLike - 1);
      }
    }
  }

  function disLikef() {
    if (disLikeActive) {
      setdisLikeActive(false);
      setdisLike(disLike - 1);
    } else {
      setdisLikeActive(true);
      setdisLike(disLike + 1);
      if (likeActive) {
        setLikeActive(false);
        setdisLike(disLike + 1);
        setLike(like - 1);
      }
    }
  }

  console.log(JSON.stringify(user?.likeCount));
  console.log(JSON.stringify(user?.dislikeCount));

  return (
    <div className="btn">
      <div>
        {" "}
        <div>
          <br />
          <h3>like: {like}</h3> dislike: {disLike}
        </div>
      </div>

      <button onClick={likef} className={[likeActive ? "active-like" : null]}>
        Like {like}
      </button>
      <button
        onClick={disLikef}
        className={[disLikeActive ? "active-dislike" : null]}
      >
        Dislike {disLike}
      </button>
    </div>
  );
}

export default Likedislike;
