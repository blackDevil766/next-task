import { useEffect, useRef, useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import validator from "email-validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header({ userData }) {
  const EmailInputRef = useRef();
  const PasswordInputRef = useRef();

  const [ff, setff] = useState();

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/register", {
          method: "POST",
          body: JSON.stringify(ff),
          headers: { "Content-Type": "application/json" },
        });
        const urlData = await response.json();
        setVal(urlData);
      } catch (err) {
        console.log(err);
      }
    };
    sendRequest();
  }, [ff]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = EmailInputRef.current.value;
    const passwordValue = PasswordInputRef.current.value;

    const validatePassword = (password) => {
      return /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
    };

    const isValidEmail = validator.validate(emailValue);
    const isValidPassword = validatePassword(passwordValue);

    console.log(isValidEmail, isValidPassword);

    if (isValidEmail && isValidPassword) {
      setRightMali(Success);
      handleClose();
      handleCloseSignIn();

      const userData = {
        email: emailValue,
        password: passwordValue,
      };

      setff(userData);
    } else {
      setWrongMali(Failed);
    }
  };

  const [rightEmail, setRightMali] = useState();
  const [wrongEmail, setWrongMali] = useState();
  const Success = () => toast.success("Success");
  const Failed = () => toast.error("Error!");
  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpen = () => setOpenSignUp(true);
  const handleClose = () => setOpenSignUp(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleOpenSignIn = () => setOpenSignIn(true);
  const handleCloseSignIn = () => setOpenSignIn(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <header>
      <div className="nav-container">
        <h1>
          <span>uiux</span> Labs
        </h1>
        <div className="nav-items">
          <ul className="items-list">
            <li>home</li>
            <li>collections</li>
            <li>stores</li>
            <li>contact us</li>
            <li>about us</li>
            <li>blog</li>
          </ul>
        </div>

        <div>
          <ul className="user-authentication">
            <li className="login">
              {" "}
              <Button id="logs" onClick={handleOpen}>
                Sign Up
              </Button>
            </li>

            <Modal
              open={openSignUp}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box component="form" onSubmit={handleSubmit} sx={style}>
                <h1 className=" box-title">Sign Up</h1>

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="filled"
                  inputRef={EmailInputRef}
                />
                <TextField
                  id="filled-basic"
                  type="text"
                  label="Password"
                  variant="filled"
                  inputRef={PasswordInputRef}
                />
                <br />
                <Button type="submit" variant="contained" color="success">
                  Sign Up
                </Button>
              </Box>
            </Modal>

            <li className="signIn">
              {" "}
              <Button id="logs" onClick={handleOpenSignIn}>
                {" "}
                sign In{" "}
              </Button>
            </li>

            <Modal
              open={openSignIn}
              onClose={handleCloseSignIn}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box component="form" onSubmit={handleSubmit} sx={style}>
                <h1 className=" box-title">Sign In</h1>

                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="filled"
                  inputRef={EmailInputRef}
                />
                <TextField
                  id="filled-basic"
                  type="text"
                  label="Password"
                  variant="filled"
                  inputRef={PasswordInputRef}
                />
                <br />
                <Button type="submit" variant="contained" color="success">
                  Sign In
                </Button>
              </Box>
            </Modal>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </header>
  );
}
