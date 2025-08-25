import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import "./signup.css"; // ✅ Import CSS

export function Signup() {
    return (
        <Box className="signup-container">
            <Paper elevation={3} className="signup-box">
                <Box>
                    <Typography variant="h5" align="center" gutterBottom>
                        Signup  `🚀
                    </Typography>

                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        display="flex"
                        flexDirection="column"
                        gap={2}
                    >
                        <TextField
                            label="Username"
                            name="username"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            required
                        />

                        <TextField
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            fullWidth
                            required
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Signup
                        </Button>
                    </Box>

                    <Typography variant="body2" align="center" mt={2}>
                        Already have an account?{" "}
                        <Link
                            component={RouterLink}
                            to="/"
                            underline="hover"
                            color="secondary"
                        >
                            Login
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}
