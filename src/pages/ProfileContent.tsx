import React from "react";
import Grid from "@mui/material/Grid";
import { TypeAnimation } from "react-type-animation";
import '../styles/profile.css';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const socialLinks = [
    { label: "Instagram", link: "https://www.instagram.com/", icon: <InstagramIcon sx={{ width: 50, height: 50 }} /> },
    { label: "X", link: "https://www.twitter.com/", icon: <TwitterIcon sx={{ width: 50, height: 50 }} /> },
    { label: "Facebook", link: "https://www.facebook.com/", icon: <FacebookIcon sx={{ width: 50, height: 50 }} /> },
    { label: "LinkedIn", link: "https://www.linkedin.com/in/thirumal-maruthamuthu/", icon: <LinkedInIcon sx={{ width: 50, height: 50 }} /> }
];

const ProfileContent = React.forwardRef<HTMLDivElement>((_props, ref) => (
    <div className="col-section" ref={ref}>
        <div className="left_side">
            <h3>
                Hello, I'm <br />
                <b>Thirumal Maruthamuthu</b>
            </h3>
            <div className="typewriter-container">
                <TypeAnimation
                    sequence={['React Js', 2000,  'Frontend', 2000]}
                    wrapper="span"
                    cursor={false}
                    repeat={Infinity}
                    className="first-part"
                />
                &nbsp;
                <TypeAnimation
                    sequence={['Developer', 2000, 'Developer', 2000]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="second-part"
                />
            </div>
            <p>
                I'm a React js developer with 1 year 6 months of hands-on experience building responsive, high-performance web applications. I specialize in crafting clean UI/UX, integrating APIs, and developing scalable components using modern JavaScript and React ecosystems. I’m passionate about turning ideas into real-world apps and continuously learning new technologies to improve code quality and performance.
            </p>
        </div>
        <div className="social">
            <Grid container spacing={1}>
                {socialLinks.map(({ label, link, icon }, index) => (
                    <Grid key={index} >
                        <IconButton
                            aria-label={label}
                            sx={{ color: 'black' }}
                            component="a"
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </IconButton>
                    </Grid>
                ))}
            </Grid>
        </div>
    </div>
));

export default ProfileContent;
