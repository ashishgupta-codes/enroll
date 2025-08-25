import React from "react";
import { Box, Typography, Avatar, Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

export function Profile() {
    const location = useLocation();
    const navigate = useNavigate();

    const data = location.state;

    if (!data) {
        // If user navigates directly without registration
        navigate("/registation");
        return null;
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Paper elevation={3} sx={{ p: 4, width: 400 }}>
                <Typography variant="h4" align="center" gutterBottom>
                    {data.firstName} {data.lastName}'s Profile
                </Typography>

                <Box display="flex" justifyContent="center" mb={2}>
                    <Avatar
                        src={data.profileImage ? URL.createObjectURL(data.profileImage) : ""}
                        alt="Profile Image"
                        sx={{ width: 120, height: 120 }}
                    />
                </Box>

                <Typography><strong>Email:</strong> {data.email}</Typography>
                <Typography><strong>Gender:</strong> {data.gender}</Typography>
                <Typography><strong>Mobile:</strong> {data.mobile}</Typography>
                <Typography><strong>Address:</strong> {data.address}, {data.city}, {data.state}, {data.country}</Typography>
                <Typography><strong>Job Profile:</strong> {data.jobProfile}</Typography>
            </Paper>
        </Box>
    );
}
