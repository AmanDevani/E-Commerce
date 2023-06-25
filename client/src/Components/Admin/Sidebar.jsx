import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ContactSupportIcon from "@mui/icons-material/ContactSupport"
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="logo">
        <h1>LOGO</h1>
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon />
          Dashboard
        </p>
      </Link>
      <Link to="/admin/products">
        <p>
          <PostAddIcon />
          Products
        </p>
      </Link>
      <Link to="/admin/product">
        <p>
          <AddIcon />
          Create Products
        </p>
      </Link>
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon />
          Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
      <Link to="/admin/contacts">
        <p>
          <ContactSupportIcon />
          Contacts
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
