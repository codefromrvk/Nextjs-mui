import { Grid, Box, Typography } from "@mui/material";
import About from "../components/About";

import Benefit from "../components/Benifit";
import Demo from "../components/Demo";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Review from "../components/Review";

export default function Hero() {
  return (
    <Box className="hero">
      {/* <Image src={hero} layout="responsive" sx={{ zindex: 0 }} /> */}
      <Box className="wrapper">
        <Grid container direction="column" spacing="3" sx={{ color: "white" }}>
          <Grid item xs>
            <Typography
              variant="h4"
              mt={2}
              // sx={{
              //   fontSize: {
              //     lg: 30,
              //     md: 30,
              //     sm: 20,
              //     xs: 20
              //   }
              // }}
              className="logo"
            >
              Multor
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              mt={1}
              variant="h2"
              className="hero-title"
              sx={{
                fontSize: {
                  lg: 50,
                  md: 40,
                  sm: 50,
                  xs: 40
                }
              }}
            >
              Describe the value of booking an appointment
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              mt={1}
              variant="body2"
              className="hero-subtitle"
              // sx={{
              //   fontSize: {
              //     lg: 20,
              //     md: 20,
              //     sm: 16,
              //     xs: 12
              //   }
              // }}
            >
              No need to get clever. Tell people exactly what you're offering,
              then use this space to communicate your key value proposition.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
