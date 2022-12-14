import "./Especialidades.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import logo from "../../assets/images/logoFavorit.jpeg";
import { Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useState, useContext, useEffect } from "react";

//import makeStyles from '@mui/styles/makeStyles';

import { SWContext } from "../../context/context";
import { AddShoppingCart } from "@material-ui/icons";
// import { Badge} from "@mui/material";
import Badge from "react-bootstrap/Badge";
import { MDBIcon } from "mdb-react-ui-kit";
import { CleaningServices } from "@mui/icons-material";
import { gridClasses } from "@mui/system";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export default function Especialidades() {
  const { platos } = useContext(SWContext);
  const [expanded, setExpanded] = React.useState(false);
  //const [platos, setPlatos] = useState();

  console.log(platos, "platos");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <Grid container spacing={2}>
        {platos.map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card
              elevation={5}
              sx={{
                borderRadius: "4px",
                justifyContent: "flex-start",
                flex: "1 0 auto",
                margin: "20px",
                flexDirection: "column",
                flexWrap: "wrap",
                ":hover": {
                  boxShadow: 20, // theme.shadows[20]
                },
              }}
            >
              <CardHeader
                avatar={
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                    src={logo}
                  ></Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
                // subheader=
                // <Badge bg="primary" text="bold">
                //   {item.price}&nbsp;???
                // </Badge>
              />
              <CardMedia
                component="img"
                //height="450"
                image={item.image}
                alt="Ensalada Favorit"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.descripcion}
                </Typography>
              </CardContent>
              <CardActions disableSpacing
              sx={{justifyContent:'space-between'}}
              >
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon style={{ fill: '#D81D0A' }}/>
                </IconButton>
                <div className="text-warning mb-1 me-2">
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <MDBIcon fas icon="star" />
                  <span className="text-black mx-2">{getRandomInt(25)}</span>
                </div>
               
                {/* <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore> */}
              </CardActions>
              {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    piment??n, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* </Box>  */}
    </div>
  );
}
