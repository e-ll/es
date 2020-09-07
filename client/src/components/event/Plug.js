import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NoSsr from "@material-ui/core/NoSsr";
import Video from "./tabs/Video"
const useStyles = makeStyles({
  container: {
    width: "100%",
  },
});

export default function FrameDeferring() {
  const classes = useStyles();
  const [state, setState] = React.useState({ open: false, defer: false });

  return (
    <div>
      <div className={classes.container}>
        {state.open ? (
          <Video videoId={"DOpiwINoROQ"} />
        ) : (
          <img
            style={{ width: "100%", height: "100%" }}
            onClick={() =>
              setState({
                open: !state.open,
                defer: false,
              })
            }
            alt="Video"
            src="https://postium.ru/wp-content/uploads/2018/12/kartinka-na-video-dlya-youtube-kak-sdelat-696x392.jpg"
          />
        )}
      </div>
    </div>
  );
}
