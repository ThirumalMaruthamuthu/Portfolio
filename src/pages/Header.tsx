import React, { useState } from "react";
import "../styles/header.css";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import { setTab } from "../redux/tab/actionType";
import logo from "../assets/developer.svg";
import resume from "../assets/Thirumal Latest Resume (1).pdf";
import download from "../assets/downloads.svg";

interface HeaderProps {
    ref: any
};

const Header: React.FC<HeaderProps> = ({ ref }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const dispatch = useDispatch();
    const { activeTab } = useSelector((state: RootState) => state.tab);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickTab = (i: number) => {
        dispatch(setTab(i));
        ref[i - 1]?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const handleDownload = () => {
  const link = document.createElement("a");
  link.href = resume; 
  link.download = "Thirumal-Resume.pdf";
  link.click();
};

    return (
        <header className="header-container">
            <div className="left-section">
                <IconButton aria-label="developer mode" sx={{ outlineColor: 'white', color: 'black' }}>
                    {/* <DeveloperModeIcon /> */}
                    <img src={logo} style={{ width: 30, height: 30 }} />
                    <h6>Welcome!</h6>
                </IconButton>
            </div>
            <nav className="nav-section">
                {["About Me", "Projects", "Skills", "Contact"].map((label, i) => (
                    <Button
                        key={label}
                        className={`nav ${activeTab === i + 1 ? 'active' : ''}`}
                        sx={{
                            outlineColor: 'white',
                            color: 'black',
                            textTransform: 'none',
                        }}
                        variant="text"
                        onClick={() => handleClickTab(i + 1)}
                    >
                        {label}
                    </Button>
                ))}
            </nav>
            <div className="right-section">
                <Button
                    variant="contained"
                    sx={{ color: "white", outlineColor: 'white', backgroundColor: 'black', textTransform: 'none' }}
                    endIcon={
                        <img
                            src={download}
                            style={{
                                width: 18,
                                height: 18,
                                color: "#FFFFFF", 
                                filter: "invert(1)"
                            }}
                            alt="download"
                        />
                    }
                    onClick={handleDownload}
                >
                    Resume
                </Button>
            </div>

            <div className="menu_container">
                <IconButton
                    aria-label="menu"
                    onClick={handleMenuClick}
                    sx={{ color: 'black' }}
                >
                    <MenuIcon />
                </IconButton>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {["About Me", "Projects", "Skills", "Contact"].map((label, i) => (
                    <MenuItem
                        key={label}
                        onClick={() => {
                            handleClickTab(i + 1);
                            handleClose();
                        }}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </header>
    );
};

export default Header;
