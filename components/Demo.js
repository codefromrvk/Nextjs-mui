import { Box, Typography } from "@mui/material";

export default function Demo() {
  return (
    <Box
      component="div"
      py={8}
      px={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f3eee4",
        textAlign: "center"
      }}
    >
      <Typography
        variant="h3"
        mb={1}
        sx={{
          fontSize: {
            xs: 30,
            md: 40
          },
          fontWeight: "600"
        }}
      >
        Show visitors what they're signing up for
      </Typography>
      <Typography variant="body1" mb={3}>
        Include a video or photo from one of your sessions to help people
        understand your service (or just to hype ‘em up).
      </Typography>
      <Box mt={2}>
        <video loop className="video" controls>
          <source
            src="https://cdn.videvo.net/videvo_files/video/free/2013-10/small_watermarked/Background_06_preview.webm"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Box>
  );
}
