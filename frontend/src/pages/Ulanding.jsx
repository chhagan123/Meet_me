import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import "../styles/Uland.css"; // 👈 add this new CSS file

const featuresRow1 = [
  {
    id: 1,
    title: "Share meeting links with anyone on any device",
    description: "",
    icon: "🔗",
    image: "./Newimg/img.jpg",
    big: true,
  },
  {
    id: 2,
    title: "Meet for free up to 60 mins",
    description: "Instant or schedule ahead",
    icon: "📹",
    image: "./Newimg/img3.webp",
  },
  {
    id: 3,
    title: "View Live captions",
    description: "In over 40 languages",
    icon: "💬",
    image: "./Newimg/img4.webp",
  },
];

const featuresRow2 = [
  {
    id: 4,
    title: "Entertain the crowd",
    description: "With interactive emoji",
    icon: "😊",
    image: "./Newimg/crowd.png",
  },
  {
    id: 5,
    title: "Share your screen",
    description: "For live collab and play",
    icon: "⬆️",
    image: "./Newimg/share.png",
  },
  {
    id: 6,
    title: "Choose backgrounds and views to set the scene",
    description: "",
    icon: "🎨",
    image: "./Newimg/back.png",
    big: true,
  },
];

export default function Ulandig() {
  const renderFeatureCard = (feature) => (
    <Grid
      item
      xs={12}
      sm={feature.big ? 12 : 6}
      md={feature.big ? 6: 3}
      key={feature.id}
    >
      <Card
        className="feature-card" // 👈 custom class for CSS hover
        sx={{
          height: "90%",
          borderRadius: 3,
          boxShadow: 3,
          textAlign: "center",
          p: 2,
          bgcolor: feature.big ? "#f5f5ff" : "white",
        }}
      >
        <CardContent>
          <Box sx={{ fontSize: 40, mb: 2 }}>{feature.icon}</Box>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 1 }}
            gutterBottom
          >
            {feature.title}
          </Typography>

          {feature.description && (
            <Typography variant="body2" color="text.secondary" mb={2}>
              {feature.description}
            </Typography>
          )}

          <Box
            component="img"
            src={feature.image}
            alt={feature.title}
            sx={{
              width: "100%",
              height: feature.big ? 250 : 190,
              borderRadius: 2,
              objectFit: "cover",
              mt: 2,
            }}
          />
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Box sx={{ p: 4, bgcolor: "#fafafa" }}>
      <Grid container spacing={3} justifyContent="center" mb={2}>
        {featuresRow1.map(renderFeatureCard)}
      </Grid>

      <Grid container spacing={3} justifyContent="center">
        {featuresRow2.map(renderFeatureCard)}
      </Grid>
    </Box>
  );
}
