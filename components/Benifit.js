import {
  MenuItem,
  Select,
  Paper,
  TextField,
  Grid,
  Box,
  Typography,
  Button
} from "@mui/material";
// / import Image from "next/image";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export default function Benefit() {
  return (
    <Grid container className="benefit" direction="column-reverse">
      <Grid item xs={12} sm={6} lg={6} pl={2}>
        <Grid
          container
          direction="column"
          spacing="3"
          mt={10}
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          <Grid item ml={3}>
            {" "}
            <Grid container direction="row">
              <Grid item xs={1} sx={{ marginTop: "0.5rem" }}>
                <FavoriteBorderOutlinedIcon color="primary" />
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Typography variant="h6"> Benifit 1</Typography>
                  <Typography>
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item ml={3}>
            {" "}
            <Grid container direction="row">
              <Grid item xs={1} sx={{ marginTop: "0.5rem" }}>
                <SplitscreenOutlinedIcon color="primary" />
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Typography variant="h6"> Benifit 2</Typography>
                  <Typography>
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item ml={3}>
            {" "}
            <Grid container direction="row">
              <Grid item xs={1} sx={{ marginTop: "0.5rem" }}>
                <ConstructionOutlinedIcon color="primary" />
              </Grid>

              <Grid item xs={6}>
                <Box>
                  <Typography variant="h6"> Benifit 3</Typography>
                  <Typography>
                    Highlight the benefits of signing up for an appointment,
                    online class, or video consultation.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} lg={6}>
        <Box
          className="form"
          sx={{ backgroundColor: "#3a3327", padding: "1rem 0" }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", marginTop: "1rem" }}
          >
            {" "}
            Schedule an Appointment{" "}
          </Typography>
          <Typography
            variant="body2"
            sx={{ padding: "1rem", textAlign: "center" }}
          >
            Here, let visitors know what will happen when they complete your
            form.
          </Typography>
          <Box
            component="div"
            sx={{
              margin: "2rem auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <TextField
              label="First name"
              variant="filled"
              color="grey"
              sx={{
                width: "64%",
                marginTop: "1rem",
                backgroundColor: "#cbbcaf"
              }}
            ></TextField>
            <TextField
              variant="filled"
              color="grey"
              label="Last name"
              sx={{
                width: "64%",
                marginTop: "1rem",
                backgroundColor: "#cbbcaf"
              }}
            ></TextField>

            <TextField
              variant="filled"
              color="grey"
              label="Email"
              sx={{
                width: "64%",
                marginTop: "1rem",
                backgroundColor: "#cbbcaf"
              }}
            ></TextField>

            <TextField
              variant="filled"
              color="grey"
              label="Phone number"
              sx={{
                width: "64%",
                marginTop: "1rem",
                backgroundColor: "#cbbcaf"
              }}
            ></TextField>

            <Select
              variant="filled"
              color="grey"
              value="Type"
              sx={{
                width: "64%",
                marginTop: "1rem",
                backgroundColor: "#cbbcaf"
              }}
            >
              <MenuItem disabled value="Type">
                Type
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <Button
              variant="contained"
              color="warning"
              sx={{
                width: "64%",
                display: "inline-block",
                marginTop: "1rem",
                backgroundColor: "#c3a948"
              }}
            >
              Contained
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
