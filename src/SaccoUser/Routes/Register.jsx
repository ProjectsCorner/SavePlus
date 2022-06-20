import React from 'react';
import "../Design/register.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box, Checkbox, FormControlLabel, TextField } from '@mui/material';
import Link from "@mui/material/Link";
export default function Register() {
  return (
    <div className="contr">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="avtr">
          <Avatar style={{ backgroundColor: "blue", textAlign: "center" }}>
            <LockOutlinedIcon style={{ justifyContent: "center" }} />
          </Avatar>
          <div>Register Sacco</div>
        </div>
        <div className="">
          <Box noValidate sx={{ mt: 3 }}>
            <form>
              <div className="half-width">
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  variant="outlined"
                  color="primary"
                  id="firstName"
                  fullWidth
                  label="First Name"
                  autoFocus
                />
                <TextField
                  required
                  variant="outlined"
                  color="primary"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </div>
              <div>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div className="half-width">
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  variant="outlined"
                  color="primary"
                  id="firstName"
                  fullWidth
                  label="First Name"
                  autoFocus
                />
                <TextField
                  required
                  variant="outlined"
                  color="primary"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </div>
              <div>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to terms and conditions of Sacco"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </div>
              <div>
                <Link href="/login">
                  Already have an account? Sign in
                </Link>
              </div>
            </form>
          </Box>
        </div>
      </Box>
    </div>
  );
}
