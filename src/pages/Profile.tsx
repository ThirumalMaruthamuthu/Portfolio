import React from "react";
import { Grid } from '@mui/material';
import ProfileContent from "./ProfileContent";
import profile from '../assets/thirumal_bro.jpg';
import '../styles/profile.css';

const Profile = React.forwardRef<HTMLDivElement>((props, ref) => (
    <div ref={ref}>
        <div className="web">
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <ProfileContent />
                </Grid>
                <Grid item xs={12} md={6} >
                    <div className="profile-img">
                        <img src={profile} alt="Profile" />
                    </div>
                </Grid>
            </Grid>
        </div>
        <div className="mobile">
            <Grid container direction="column" spacing={2}>
                <Grid item style={{ height: '50%' }}>
                    <div className="profile-img">
                        <img src={profile} alt="Profile" />
                    </div>
                </Grid>
                <Grid item style={{ height: '40%' }}>
                    <ProfileContent />
                </Grid>
            </Grid>
        </div>
    </div>
));

export default Profile;
    