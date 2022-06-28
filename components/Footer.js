import { Box, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Stack
      mt={10}
      py={6}
      sx={{ bgcolor: "#3a3327", color: "white" }}
      direction="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography variant="h6">MULTOR</Typography>
      <Typography variant="subtitle2" sx={{ fontSize: "0.7rem" }}>
        @Multor.All rights reserved
      </Typography>
    </Stack>
  );
}
