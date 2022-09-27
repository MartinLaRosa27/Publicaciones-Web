import React from "react";
import { Posts } from "./assets/Posts.jsx";
import { NewPost } from "./assets/NewPost.jsx";
import { Helmet } from "react-helmet";

export const Main = () => {
  return (
    <main className="container">
      <Helmet>
        <title>Home | Posts Web</title>
      </Helmet>
      <div className="row">
        <div className="col-8">
          <Posts />
        </div>
        <div className="col-4">
          <NewPost />
        </div>
      </div>
    </main>
  );
};
