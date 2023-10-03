/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  spacer: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogout = () => {
    const confDelete = window.confirm("Sure You want to Logout?");
    if (confDelete) {
      localStorage.removeItem("isLogedIn");
      navigate(`/auth/login`);
    }
  };

  // useEffect(() => {
  //   if (localStorage.getItem("isLogedIn") === null) {
  //     navigate(`/auth/login`);
  //   }
  // }, []);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.spacer} />
        <Button color="inherit" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
