import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import feature1 from "../public/images/feature1.jpg";
import feature2 from "../public/images/feature2.jpg";
import feature3 from "../public/images/feature3.jpg";
console.log(feature1);

export default function Feature() {
  return (
    <Grid container px={2} spacing={2} my={8}>
      <Grid item sm={6} md={4}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem"
          }}
        >
          <Image src={feature1} />
          <Typography variant="subtitle1" sx={{ fontWeight: "600" }} mt={2}>
            {" "}
            FEATURE 1
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            Talk about some of the details of your offer with a focus on the
            value people get back.
          </Typography>
        </Paper>
      </Grid>
      <Grid item sm={6} md={4}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem"
          }}
        >
          <Image src={feature2} />
          <Typography variant="subtitle1" mt={2} sx={{ fontWeight: "600" }}>
            {" "}
            FEATURE 2
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            Is there a pain point that your service resolves? Tell visitors
            about it here.
          </Typography>
        </Paper>
      </Grid>

      <Grid item sm={6} md={4}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem"
          }}
        >
          <Image src={feature3} />
          <Typography variant="subtitle1" mt={2} sx={{ fontWeight: "600" }}>
            {" "}
            FEATURE 3
          </Typography>
          <Typography variant="subtitle1" mt={2}>
            Alternatively, you could use this section to address some frequently
            asked questions.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
