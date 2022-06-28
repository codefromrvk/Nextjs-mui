import { Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import professional from "../public/images/professional.jpg";

export default function About() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{ padding: "2rem" }}
      columnSpacing={6}
    >
      <Grid item xs={12} md={6}>
        <Image src={professional} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack>
          <Typography
            variant="subtitle2"
            my={1}
            sx={{ fontWeight: "600", letterSpacing: "2px" }}
          >
            ABOUT
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Some more information about your business
          </Typography>
          <Typography variant="body1">
            Share a little about yourself as a business owner, or maybe describe
            what makes your service unique. Give visitors one more reason to
            care about your offer and want to work with you.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
