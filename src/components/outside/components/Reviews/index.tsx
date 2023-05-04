import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Reviews: React.FC = () => {
  return (
    <Box
      sx={{
        py: 5,
        backgroundColor: "#D0CC83",
      }}
    >
      <Container maxWidth="lg" component="div">
        <Typography
          variant="h4"
          align="center"
          color="primary"
          fontWeight={400}
          gutterBottom
          sx={{
            fontSize: {
              xs: "16px",
              md: "24px",
              lg: "35px",
            },
          }}
          className="font-LGC"
        >
          {
            "‘‘Nisha's strategies for us to use at home have been essential in supporting Theos\'s language development\’’"
          }
        </Typography>

        <Typography
          variant="h3"
          align="center"
          color="primary"
          fontWeight={500}
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: {
              xs: "20px",
              md: "35px",
              lg: "40px",
            },
          }}
          className="font-LGC"
        >
          Sarah, UK{" "}
          <Rating
            name="read-only"
            color="primary"
            size="large"
            value={5}
            readOnly
            sx={{
              ml: {
                xs: 1,
                md: 2,
              },
              fontSize: {
                xs: "20px",
                md: "35px",
                lg: "40px",
              },
              "& .MuiRating-iconFilled": {
                color: "primary.main",
              },
              "& .MuiRating-iconHover": {
                color: "primary.main",
              },
            }}
          />
        </Typography>
      </Container>
    </Box>
  );
};

export default Reviews;
