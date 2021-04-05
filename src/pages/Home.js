import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const videos = [
  {
    id: 1,
    title: "One Piece",
    channel: "Animes",
    views: "11 mi de visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb1.jpg",
  },
  {
    id: 2,
    title: "Hunter x Hunter",
    channel: "Animes",
    views: "957 mil visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb2.jpg",
  },
  {
    id: 3,
    title: "Death Note",
    channel: "Animes",
    views: "106 mil visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb3.jpg",
  },
  {
    id: 4,
    title: "Naruto",
    channel: "Animes",
    views: "5,6 mi de visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb4.jpg",
  },
  {
    id: 5,
    title: "Bleach",
    channel: "Animes",
    views: "2,2 mi de visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb5.jpg",
  },
  {
    id: 6,
    title: "Dororo",
    channel: "Animes",
    views: "233 mil visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb6.jpg",
  },
  {
    id: 7,
    title: "Overlord",
    channel: "Animes",
    views: "118 mil visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb7.jpg",
  },
  {
    id: 8,
    title: "Dragon Ball",
    channel: "Animes",
    views: "1,9 mi de visualizações",
    date: "há 1 semana",
    thumb: "/images/thumb8.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "64px",
    paddingLeft: "240px",
    backgroundColor: theme.palette.background.dark,
    minHeight: '100vh'
  },
  box: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box p={8}>
        <Typography
          variant="h5"
          color="textPrimary"
          style={{ fontWeight: 600 }}
        >
          Recomendados
        </Typography>

        <Grid container spacing={4}>
          {videos.map((item, index) => (
            <Grid item lg={3} md={4} sm={6} xs={12}>
              <Box>
                <img
                  style={{ width: "100%" }}
                  alt={item.title}
                  src={item.thumb}
                />
                <Box>
                  <Typography
                    style={{ fontWeight: 600 }}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {`${item.views} • ${item.date}`}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
