import React from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Users from "../Users/User";
import "./List.css";

class List extends React.Component {
  //   state = {};
  render() {
    return (
      <div className="row list mt-3" style={{ backgroundColor: "#f7fafc" }}>
        <SideMenu />
        <div className="col-md-9 col-12 flex-column">
          <Header />
          <Users />
        </div>
      </div>
    );
  }
}

export default List;
