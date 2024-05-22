console.log(import.meta.env.VITE_API_KEY);

import { Container, Typography, Box, TextField } from "@mui/material";

export default function App() {

  const onSubmit = e => {
    e.preventDefault();
    console.log("submit");
  }

  return (
    <Container
      maxWidth="xs"
      sx={{mt:2}}
      >
        <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        >
          Weather App
        </Typography>
        <Box
          sx={{display:"grid", gap: 2}}
          component="form"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          <TextField 
            id="city"
            label="City"
            variant="outlined"
            size="small"
            required
          />
        </Box>
    </Container>
  );
}