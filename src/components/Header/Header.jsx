import React from "react";
import "./Header.css";
import { ReactComponent as SearchIcon } from "../../assets/images/searchIcon.svg";
import { ReactComponent as ArrowIcon } from "../../assets/images/arrowIcon.svg";
import { ReactComponent as Logout } from "../../assets/images/logoutIcon.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <ul>
          <li>
            <div className="profile-picture">
              <img src="https://picsum.photos/200" alt="profile" />
              <p>John Doe</p>
            </div>
          </li>
          <li>
            <div className="search-input">
              <SearchIcon className="search-icon" />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <div className="arrow">
                <ArrowIcon className="arrow-icon" />
              </div>
            </div>
          </li>
          <li className="logout">
            <Logout className="logout-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}
