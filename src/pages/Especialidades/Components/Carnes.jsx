
//import { IconButton } from '@mui/material'
import React, { useEffect } from 'react';
import Card from "@mui/material/Card";
import { Grid } from "@material-ui/core";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { AddShoppingCart } from "@material-ui/icons";
import { MDBIcon } from "mdb-react-ui-kit";
import { FormattedMessage } from "react-intl";
import logo from "../../../assets/images/logoFavorit.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";


const Carnes = ({carnes}) => {

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <div>
    <Grid container spacing={2}>
      {carnes.map((item,index) => (
        <Grid item xs={12} md={6} lg={4} key={item.id}
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} // Alternar la dirección de la animación
        >
          <Card
            elevation={5}
            sx={{
              borderRadius: "12px",
              justifyContent: "flex-start",
              flex: "1 0 auto",
              margin: "20px",
              flexDirection: "column",
              flexWrap: "wrap",
              ":hover": {
                boxShadow: 20, // theme.shadows[20]
              },
              //border: "1px solid rgb(226, 178, 19)",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  // sx={{ bgcolor: red[500] }}
                  aria-label="recipe"
                  src={logo}
                ></Avatar>
              }
              // action={
              //   <IconButton aria-label="settings">
              //     <MoreVertIcon />
              //   </IconButton>
              // }
              title=<FormattedMessage id={item.title} />
            />
            <CardMedia
              component="img"
              image={item.image}
            />
            <CardContent>
              <Typography variant="body2" color="text.primary">
              <FormattedMessage id={item.descripcion}/>
              </Typography>
            </CardContent>
            {/* <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <AddShoppingCart />
              </IconButton>
              <div className="text-warning mb-1 me-2">
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
                <MDBIcon fas icon="star" />
              </div>
            </CardActions> */}
          </Card>
        </Grid>
      ))}
    </Grid>
    {/* </Box>  */}
  </div>
  )
}

export default Carnes