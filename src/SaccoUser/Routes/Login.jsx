import React from 'react';
import "../Design/login.css";
import SAVE from "../../assets/save.jpg";
import { Avatar, Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Link from "@mui/material/Link";
export default function Login() {
  return (
    <div className="log_cntr">
      <div className="bg-im">
        <img src={SAVE} alt="Sacco" />
      </div>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <Avatar>
            <LockOutlinedIcon />
          </Avatar>
        </div>
        <div>Sign in</div>
        <Box>
          <div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </div>
          <div>
            <Button type="submit" fullWidth variant="contained">
              Sign In
            </Button>
          </div>
          <div className='lnk-to'>
            <Link href="#">Forgot password?</Link>
            <Link href="/">
              Don't have an account? Sign Up
            </Link>
          </div>
        </Box>
      </Box>
    </div>
  );
}
