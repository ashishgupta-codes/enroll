import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Import useNavigate

export function Login() {
    const navigate = useNavigate(); // hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        // 👉 Add your login validation logic here
        // For now, just navigate to signup after clicking login
        navigate("/registation");
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Paper elevation={3}>
                <Box p={4} width={350}>
                    <Typography variant="h5" align="center" gutterBottom>
                        🚀 Login
                    </Typography>

                    <Typography
                        variant="subtitle2"
                        align="center"
                        color="textSecondary"
                        gutterBottom
                    >
                        Welcome to <strong>TrioSync Technology</strong>
                    </Typography>

                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        onSubmit={handleSubmit} // 🔹 form submit handler
                    >
                        <TextField
                            label="Username"
                            name="username"
                            placeholder="Enter your username"
                            required
                            fullWidth
                        />

                        <TextField
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                            fullWidth
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Box>

                    <Typography variant="body2" align="center" mt={2}>
                        Don&apos;t have an account?{" "}
                        <Link
                            component={RouterLink}
                            to="/registation"
                            underline="hover"
                            color="secondary"
                        >
                            registration
                        </Link>
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
}

export default Login;