import { Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function ProfileCard({ img }) {
  console.log("img", img);
  return (
    <Stack direction="row" spacing={2} mt={2}>
      <Image src={img} width="100px" height="100px" />
      <Stack justifyContent="space-evenly">
        <Typography variant="body1">Angela</Typography>
        <Typography variant="body2">America</Typography>
      </Stack>
    </Stack>
  );
}
