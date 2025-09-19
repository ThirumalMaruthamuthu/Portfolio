import React, { useState } from "react";
import { Grid, Typography, Button, Paper } from "@mui/material";

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState<number | null>(null);

  const handleHover = (index: number) => setHoveredProject(index);
  const handleLeave = () => setHoveredProject(null);
  const handleClick = (index: number) => setIsClicked(index);

  return (
    <div style={{ padding: "4rem 2rem", backgroundColor: "#000", fontFamily: "Poppins, sans-serif" }}>
      <Typography
        variant="h4"
        gutterBottom
        style={{
          fontWeight: "bold",
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "4rem",
          letterSpacing: "1px",
        }}
      >
        My <span style={{ color: "#CACACA" }}>Projects</span>
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={4}
            style={{
              padding: "2rem",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              borderRadius: hoveredProject === 0 || isClicked === 0 ? "12px" : "50%",
              minWidth: hoveredProject === 0 || isClicked === 0 ? "auto" : "150px",
              height: hoveredProject === 0 || isClicked === 0 ? "auto" : "150px",
              justifyContent: "center",
              overflow: "hidden",
              border: "1px solid #000000", // Border style
            }}
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(0)}
          >
            {/* Title and Stack */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                  color: "#111111",
                  marginBottom: "0.5rem",
                  letterSpacing: "1px",
                }}
              >
                Rent Master for GwayERP
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  color: "#444444",
                }}
              >
                <b>Stack:</b> React js, Redux, Nestjs, MongoDB,
              </Typography>
            </div>
            

            {/* Description and Button */}
            {hoveredProject === 0 || isClicked === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "12px",
                  padding: "1rem",
                  backgroundColor: "#F4F4F4",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    marginBottom: "1rem",
                    textAlign: "center",
                    color: "#444444",
                    fontStyle: "italic",
                  }}
                >
                  A confidential inventory module developed for GwayERP using React js.
                  Cannot be shared publicly due to company privacy policies.
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  disabled
                  style={{
                    width: "100%",
                    backgroundColor: "#000000", // Black button background
                    color: "#FFFFFF", // White text color
                    borderColor: "#000000", // Black border
                    padding: "0.8rem 1.2rem",
                    textTransform: "none", // Preserve the button text case
                  }}
                >
                  GitHub Link Not Available
                </Button>
              </div>
            ) : null}
          </Paper>
        </Grid>

        {/* BlueCollers Job Portal */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper
            elevation={4}
            style={{
              padding: "2rem",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              borderRadius: hoveredProject === 1 || isClicked === 1 ? "12px" : "50%",
              minWidth: hoveredProject === 1 || isClicked === 1 ? "auto" : "150px",
              height: hoveredProject === 1 || isClicked === 1 ? "auto" : "150px",
              justifyContent: "center",
              overflow: "hidden",
              border: "1px solid #000000", // Border style
            }}
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleLeave}
            onClick={() => handleClick(1)}
          >
            {/* Title and Stack */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <Typography
                variant="h6"
                style={{
                  fontWeight: "bold",
                  color: "#111111",
                  marginBottom: "0.5rem",
                  letterSpacing: "1px",
                }}
              >
                Matrimonial site
              </Typography>
              <Typography
                variant="body2"
                style={{
                  marginBottom: "1rem",
                  color: "#444444",
                }}
              >
                <b>Stack:</b> HTML, CSS, React Js,
              </Typography>
            </div>

            {/* Description and Button */}
            {hoveredProject === 1 || isClicked === 1 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "100%",
                  borderRadius: "12px",
                  padding: "1rem",
                  backgroundColor: "#F4F4F4",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    marginBottom: "1rem",
                    textAlign: "center",
                    color: "#444444",
                    fontStyle: "italic",
                  }}
                >
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  href="https://github.com/ThirumalMaruthamuthu/Matrimony-latest"
                  target="_blank"
                  style={{
                    width: "100%",
                    backgroundColor: "#000000", // Black button background
                    color: "#FFFFFF", // White text color
                    borderColor: "#000000", // Black border
                    padding: "0.8rem 1.2rem",
                    textTransform: "none", // Preserve the button text case
                  }}
                >
                  View on GitHub
                </Button>
              </div>
            ) : null}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Projects;
