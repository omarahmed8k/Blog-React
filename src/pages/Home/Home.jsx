import React, { useEffect, useState } from "react";
import Post from "../../components/Posts/Post/Post";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="container">
        <Posts itemsPerPage={12} />
      </div>
    </>
  );
}
