import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {GridList, GridListTile, GridListTileBar, Fade, Modal, Backdrop} from "@material-ui/core";
// import ModalImage from "react-modal-image";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
 
}));

export default function Gallery(props) {
  const classes = useStyles();

  const { images } = props;
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {images.map((image, index) => (
        
            <GridListTile key={image} onClick={null}>
              {/* <img src={`http://localhost:8081/uploads/${image}`} alt="image" /> */}
              <img src={image} alt={`изображение стенда Nr. ${index + 1}`} />
              {/* <ModalImage style={{position:"absolute", width: "50vw", height: "50vh"}}  small={image} large={image} /> */}
            </GridListTile>
         
        ))}
      </GridList>
    </div>
  );
}
