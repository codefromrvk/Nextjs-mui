import { Grid, Box, Typography } from "@mui/material";
import About from "../components/About";

import Benefit from "../components/Benifit";
import Demo from "../components/Demo";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Review from "../components/Review";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <Benefit />
      <Demo />
      <Review />
      <Feature />
      <About />
      <Footer />
    </>
  );
}

/* <Grid container>
<Grid item xs={12} sm={6} lg={6}>
  <Grid container direction="column" sx={{ border: "2px solid black" }}>
    <Grid item>
      {" "}
      <FavoriteBorderOutlinedIcon color="primary" /> Benifit 1
    </Grid>
    <Grid item>
      {" "}
      <SplitscreenOutlinedIcon color="primary" /> Benefit 2
    </Grid>
    <Grid item>
      {" "}
      <ConstructionOutlinedIcon color="primary" /> Benefit 3
    </Grid>
  </Grid>
</Grid>
<Grid item xs={12} sm={6} lg={6}>
  <Box
    component="div"
    sx={{
      margin: "2rem auto",
      width: "100%"
    }}
  >
    <Typography variant="h5"> Schedule an Appointment </Typography>

    <TextField label="First name" sx={{ display: "block" }}></TextField>
    <TextField label="Last name" sx={{ display: "block" }}></TextField>

    <TextField label="Email" sx={{ display: "block" }}></TextField>

    <TextField
      label="Phone number"
      sx={{ display: "block" }}
    ></TextField>

    <Select value="Type" sx={{ width: "100%" }}>
      <MenuItem disabled value="Type">
        Type
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </Box>
</Grid>
</Grid> */
