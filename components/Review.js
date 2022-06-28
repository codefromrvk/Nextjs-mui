import { Typography, Box, Grid } from "@mui/material";
import ProfileCard from "./ProfileCard";
import person1 from "../public/images/person1.jpg";
import person2 from "../public/images/person2.jpg";

export default function Review() {
  return (
    <Box px={4} my={14}>
      {" "}
      <Typography
        variant="subtitle2"
        my={8}
        sx={{
          fontWeight: "800",
          letterSpacing: "2px",
          textAlign: "center",
          color: "#915c00"
        }}
      >
        DON'T JUST TAKE OUR WORD FOR IT
      </Typography>
      <Grid container direction="row" spacing={8}>
        <Grid item md={6}>
          <Typography variant="h6">
            <em>
              Share a real testimonial that hits some of your benefits (but
              isn't too sales-y).
            </em>
          </Typography>
          <ProfileCard img={person1} />
        </Grid>
        <Grid item md={6}>
          <Typography variant="h6">
            <em>
              Include someone talking about how easy it was to sign up and
              participate.
            </em>
          </Typography>

          <ProfileCard img={person2} />
        </Grid>
      </Grid>
    </Box>
  );
}
