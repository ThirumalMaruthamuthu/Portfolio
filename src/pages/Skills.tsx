import React from 'react';
import {
    Card,
    CardContent,
    Grid,
    Typography,
    Box,
    LinearProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import reactsvg from "../assets/skills/react.svg";
import html from "../assets/skills/html.svg";
import css_svg from "../assets/skills/css-3.svg";
import redux_saga_svg from "../assets/skills/redux-saga.svg";
import jssvg from "../assets/skills/java-script.svg";
import tssvg from "../assets/skills/typescript.svg";
import nestjssvg from "../assets/skills/Nest.js.svg";
import mongodbsvg from "../assets/skills/MongoDB.svg";
import "./../styles/skills.css"

const skills = [
    { label: 'JavaScript', icon: jssvg, level: 90 },
    { label: 'React JS', icon: reactsvg, level: 85 },
    { label: 'Nest JS', icon: nestjssvg, level: 75 },
    { label: 'TypeScript', icon: tssvg, level: 75 },
    { label: 'Redux Saga', icon: redux_saga_svg, level: 70 },
    { label: 'HTML', icon: html, level: 95 },
    { label: 'CSS', icon: css_svg, level: 90 },
    { label: 'Mongo DB', icon: mongodbsvg, level: 60 },
];

const SkillCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    borderRadius: theme.spacing(2),
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#F1F1F1',
    color: 'black',
    position: 'relative',
    overflow: 'hidden',
    minHeight: '160px',
    '&:hover': {
        backgroundColor: '#242424',
        color: '#fff',
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[6],
        '& img': {
            filter: 'brightness(0) invert(1)',
        },
        '& .progress-container': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    '& img': {
        transition: 'filter 0.3s ease',
    },
}));

const ProgressContainer = styled('div')(({ theme }) => ({
    opacity: 0,
    transform: 'translateY(10px)',
    transition: 'all 0.3s ease-in-out',
    marginTop: theme.spacing(2),
    color: '#fff',
}));

const Skills: React.FC = () => {
    return (
        <div className='background-layer'>
        <Box sx={{ padding: '2rem', fontFamily: 'Poppins, sans-serif' }}>
            <Typography variant="h4" gutterBottom sx={{marginTop:5, textAlign:'center', color: 'black', fontFamily: 'Poppins, sans-serif' }}>
                My <b>Skills</b>
            </Typography>
            <Grid container spacing={3}>
                {skills.map((skill, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <SkillCard elevation={3}>
                            <CardContent>
                                <Box sx={{ mb: 1 }}>
                                    <img
                                        src={skill.icon}
                                        alt={skill.label}
                                        width={50}
                                        height={50}
                                    />
                                </Box>
                                <Typography variant="h6" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {skill.label}
                                </Typography>
                                <ProgressContainer className="progress-container">
                                    <Typography variant="body2" sx={{ color: 'inherit', mb: 0.5 }}>
                                        {skill.level}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.level}
                                        sx={{
                                            height: 8,
                                            borderRadius: 5,
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#fff',
                                            },
                                        }}
                                    />
                                </ProgressContainer>
                            </CardContent>
                        </SkillCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </div>
    );
};

export default Skills;
