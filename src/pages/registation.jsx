import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box, Button, TextField, Typography, Radio, RadioGroup,
    FormControl, FormControlLabel, FormLabel, InputLabel, Select, MenuItem
} from "@mui/material";

export function Registation() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        profileImage: "",
        gender: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        country: "",
        jobProfile: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        navigate("/profile", { state: formData });
    };

    return (
        <Box component="form" onSubmit={handleRegisterClick} sx={{ p: 3 }}>
            <TextField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} fullWidth margin="normal" />
            <TextField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} fullWidth margin="normal" />
            <TextField name="email" label="Email" value={formData.email} onChange={handleChange} fullWidth margin="normal" />
            <FormControl fullWidth margin="normal">
                <input
                    type="file"
                    accept="image/*"           // only allow images
                    onChange={(e) => {
                        const file = e.target.files[0];
                        setFormData(prev => ({ ...prev, profileImage: file }));
                    }}
                />
            </FormControl>

            <FormControl component="fieldset" margin="normal">
                <FormLabel>Gender</FormLabel>
                <RadioGroup row name="gender" value={formData.gender} onChange={handleChange}>
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                </RadioGroup>
            </FormControl>

            <TextField name="mobile" label="Mobile Number" value={formData.mobile} onChange={handleChange} fullWidth margin="normal" />
            <TextField name="address" label="Address" value={formData.address} onChange={handleChange} fullWidth margin="normal" />
            <TextField name="city" label="City" value={formData.city} onChange={handleChange} fullWidth margin="normal" />
            <TextField name="state" label="State" value={formData.state} onChange={handleChange} fullWidth margin="normal" />
            <TextField name="country" label="Country" value={formData.country} onChange={handleChange} fullWidth margin="normal" />
            <FormControl fullWidth margin="normal">
                <InputLabel id="jobProfile-label">Job Profile</InputLabel>
                <Select
                    labelId="jobProfile-label"
                    name="jobProfile"
                    value={formData.jobProfile}
                    onChange={handleChange}
                >
                    <MenuItem value="Software Engineer">Software Engineer</MenuItem>
                    <MenuItem value="Designer">Designer</MenuItem>
                    <MenuItem value="Product Manager">Product Manager</MenuItem>
                    <MenuItem value="Data Analyst">Data Analyst</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>Register</Button>
        </Box>
    );
}
