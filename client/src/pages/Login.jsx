import React, { useState } from "react";
import { Container, Paper, Typography, TextField, Button, Stack, Avatar, IconButton } from "@mui/material";
import { CameraAlt } from '@mui/icons-material'
import { VisuallyHiddenInput } from "../components/Styles/StyledComponnets";
import useInputValidation from '6pp';
import { userNameValidator } from "../utils/validator";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const userName = useInputValidation('', userNameValidator)
  const bio = useInputValidation('')
  const password = useInputValidation('')
  const name = useInputValidation('')
  const toggleLogin = () => {
    setIsLogin((prev) => !prev);
  }
  return (
    <Container
      component={"main"}
      maxWidth={"xs"}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5"> Login </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                LOGIN
              </Button>

              <Typography textAlign={"center"} marginTop={"1rem"}>
                OR
              </Typography>

              <Button
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                SIGN UP INSTEAD
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5"> Sign Up </Typography>
            <form
              style={{
                width: "100%",
                marginTop: "1rem",
              }}
            >
              {/* <Stack
                position={'relative'}
                width={'10rem'}
                margin={'auto'}
              >
                <Avatar
                  sx={{
                    width: '10rem',
                    height: '10rem',
                    objectFit: 'contain'
                  }}
                />
                <IconButton
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    color: '#FFFFFF',
                    bgcolor: 'rgba(0,0,0,0.5)',
                    ':hover': {
                      bgcolor: 'rgba(0,0,0,0.7)'
                    }
                  }}
                  component = {'label'}
                >
                  <>
                    <CameraAlt />
                    <VisuallyHiddenInput type="file" />
                  </>
                </IconButton>
              </Stack> */}
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={userName.value}
                onChange={userName.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                sx={{
                  marginTop: "1rem",
                }}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                SIGNUP
              </Button>

              <Typography textAlign={"center"} marginTop={"1rem"}>
                OR
              </Typography>

              <Button
                fullWidth
                variant="text"
                onClick={toggleLogin}
              >
                LOGIN INSTEAD
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
