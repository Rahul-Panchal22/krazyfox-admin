import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doLogin } from "../../actions/auth";
import { toAbsoluteUrl } from "../../utils";
import { toast } from "react-toastify";
import "./signin.scss";

const defaultFormField = {
  username: "",
  password: "",
};

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(defaultFormField);
  const { username, password } = formData;
  const [userNameError, setUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onFinish = (e) => {
    e.preventDefault();
    setUserNameError(false);
    setPasswordError(false);

    if (username === "") {
      return setUserNameError(true);
    }
    if (password === "") {
      return setPasswordError(true);
    }

    const data = {
      username: username,
      password: password,
    };
    dispatch(doLogin(data))
      .then((res) => {
        if (res.code === 200) {
          toast.success(res.message);
          localStorage.setItem(
            "auth_token",
           res.data.auth_token
          );
          localStorage.setItem(
            "user_type",
            res.data.role
          );
          navigate("/brand");
        } else {
          toast.error(res.message);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <>
      <div
        className="auth-page"
        style={{
          backgroundImage: `url(${toAbsoluteUrl("/images/auth-bg.png")})`,
        }}
      >
        <div className="auth-scroll">
          <div className="auth-box">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} className="text-center">
                <img src={toAbsoluteUrl("/images/logo_full.svg")} alt="" />
                <h6 className="auth-logo-text">Admin, Welcome aboard!</h6>
              </Grid>
              <Grid item xs={12} className="form-group">
                <InputLabel
                  id="demo-simple-select-label"
                  className="extra-label white"
                  required
                  onError={userNameError}
                >
                  Username
                </InputLabel>
                <FormControl variant="Outlined">
                  <TextField
                    id="outlined-basic"
                    label="Enter your username"
                    variant="outlined"
                    value={username}
                    name="username"
                    onChange={handleChange}
                    autoComplete='no'
                    sx={{ input: { color: "white" } }}
                  />
                </FormControl>
                {userNameError && (
                  <p style={{ color: "white", marginTop: "5px" }}>
                    User Name is required <em style={{ color: "red" }}>*</em>
                  </p>
                )}
              </Grid>
              <Grid item xs={12} className="form-group">
                <InputLabel
                  id="demo-simple-select-label"
                  className="extra-label white"
                  required
                  onError={passwordError}
                >
                  Password
                </InputLabel>
                <FormControl variant="Outlined">
                  <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="no"
                    value={password}
                    name="password"
                    onChange={handleChange}
                    autoSave="off"
                    sx={{ input: { color: "white" } }}
                  />
                </FormControl>
                {passwordError && (
                  <p style={{ color: "white", marginTop: "5px" }}>
                    Password is required<em style={{ color: "red" }}>*</em>
                  </p>
                )}
              </Grid>
              <Grid item xs={12} className="form-group">
                <Button
                  variant="contained"
                  className="auth-btn"
                  onClick={onFinish}
                >
                  LOGIN
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
