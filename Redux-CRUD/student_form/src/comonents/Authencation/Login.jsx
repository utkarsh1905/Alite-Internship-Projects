/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Container,
  CssBaseline,
  Paper,
  Tabs,
  Tab,
  Typography,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const Login = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const user = storedData.find((userData) => userData.email === email);

    if (!user) {
      alert("User not found. Please sign up.");
    } else if (user.password !== password) {
      alert("Incorrect password.");
    } else {
      alert("Login successful!");
      localStorage.setItem("isLogedIn", true);
      setEmail("");
      setPassword("");
      navigate(`/frm`);
    }
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem("userData")) || [];
    const userExists = storedData.some((userData) => userData.email === email);
    if (userExists) {
      alert("User already exists. Please log in.");
    } else {
      const newUser = { email, password };
      storedData.push(newUser);
      localStorage.setItem("userData", JSON.stringify(storedData));
      alert("Sign up successful!");
      localStorage.setItem("isLogedIn", true);
      setEmail("");
      setPassword("");
      navigate(`/frm`);
      ``;
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Paper elevation={3} style={{ padding: theme.spacing(3), width: 400 }}>
        <Typography component="h1" variant="h5" align="center">
          {activeTab === 0 ? "Login" : "Sign Up"}
        </Typography>
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Sign Up" />
        </Tabs>
        <Box
          component="form"
          onSubmit={activeTab === 0 ? handleLoginSubmit : handleSignupSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing(2),
          }}
        >
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {activeTab === 1 && (
            <TextField
              label="Confirm Password"
              variant="outlined"
              type="password"
              required
            />
          )}
          <Button type="submit" variant="contained" color="primary">
            {activeTab === 0 ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
