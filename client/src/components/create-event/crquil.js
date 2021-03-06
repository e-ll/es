import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Grid,
  Typography,
  Button,
  FormLabel,
  InputLabel,
} from "@material-ui/core";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectFieldGroup from "../common/SelectFieldGroup";
import { createEvent } from "../../actions/eventActions";
import DropzoneComponent from "react-dropzone-component";
import Drop from "./Drop";
import "react-upload-gallery/dist/style.css";
import Editor from "../editor/editor";
import Up from "../firebase/Up";
import UpLogo from "../firebase/UpLogo";
import Gallery from "../event/galery/Gallery";
// import { initialState } from "../upload/data";

// const standList = [
//   "",
//
// ];
import config from "../firebase/con";
import firebase from "firebase";

firebase.initializeApp(config);
export { firebase };

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      partisipantName: "",
      standType: "",
      logoUrl: null,
      youTubeCode: null,
      numberofplayer: "",
      imageURL: "",
      location: "",
      start: "",
      description: "",
      galeryUrl: [],
      errors: {},
      shopId: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handlerChangeGallery = this.handlerChangeGallery.bind(this);
    this.handlerChangeLogotype = this.handlerChangeLogotype.bind(this);
    this.handlerDeleteImageFromGallery = this.handlerDeleteImageFromGallery.bind(
      this
    );
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.match.params.id) {
      const event = this.props.event.event;

      this.setState({
        id: event._id,
        partisipantName: event.partisipantName,
        standType: event.standType,
        // numberofplayer: event.numberofplayer,
        imageURL: event.imageURL,
        location: event.location,
        // start: event.start,
        description: event.description,
        logoUrl: event.logoUrl,
        youTubeCode: event.youTubeCode,
        galeryUrl: event.galeryUrl ? event.galeryUrl : [],
        shopId: event.shopId,
        files: [],
        imagePreviewUrls: [],
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eventData = {
      id: this.state.id,
      galeryUrl: this.state.galeryUrl,
      partisipantName: this.state.partisipantName,
      standType: this.state.standType,
      // numberofplayer: this.state.numberofplayer,
      imageURL: this.state.imageURL,
      location: this.state.location,
      // start: this.state.start,
      description: this.state.description,
      logoUrl: this.state.logoUrl,
      youTubeCode: this.state.youTubeCode,
      shopId: this.state.shopId,
    };
    this.props.createEvent(eventData, this.props.history);
  }

  handleChange(value) {
    this.setState({ description: value });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handlerChangeGallery(file, response) {
    console.log(response, this.state.galeryUrl);
    this.setState((prevState) => ({
      galeryUrl: [...prevState.galeryUrl, response],
    }));
  }

  changeGalery = (updatedArray) => {
    this.setState({ galeryUrl: updatedArray });
  };
  // changeGalery = (changeobj) => {
  //      this.setState(changeobj);
  //   };
  changeLogo = (logosArray) => {
    this.setState({ logoUrl: logosArray[0] ? logosArray[0] : "" });
  };

  handlerChangeLogotype(file, response) {
    const logoUrl = response;
    this.setState({ logoUrl });
  }

  handlerDeleteImageFromGallery(image) {
    console.log(1);
    const gallery = this.state.galeryUrl;
    const galeryUrl = gallery.filter((pic) => pic !== image);
    this.setState({ galeryUrl });
  }

  render() {
    const {
      errors,
      logoUrl = [],
      galeryUrl,
      partisipantName,
      imageURL = [],
      standType,
      shopId,
    } = this.state;
    return (
      <Grid container justify="center" className="marginX-1">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Создайте свой стенд
          </Typography>
          <UpLogo
            changeLogo={this.changeLogo}
            currentLogo={this.state.logoUrl}
          />
          <Up
            changeGalery={this.changeGalery}
            currentGallery={this.state.galeryUrl}
          />

          {/*  {this.state.galery ?(<Typography variant="h6" component="h4" align="center" gutterBottom>
              Добавленные изображения
          </Typography>):null}
          <Gallery images={galeryUrl} />*/}
          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              required
              label="Название компании или проекта"
              placeholder=""
              name="partisipantName"
              type="name"
              value={partisipantName}
              onChange={this.onChange}
              error={errors.partisipantName}
            />
            {/* <Up > */}
            <TextFieldGroup
              label="Если вам сказали  номер стенда то впишите его в это поле"
              placeholder="например E8_2"
              name="standType"
              type="name"
              value={standType}
              onChange={this.onChange}
              error={errors.standType}
            />

            {/* <TextFieldGroup
              label="Ссылка на изображение"
              placeholder="EX: https://unsplash.com/photos/-JzHSIzNYnU"
              name="imageURL"
              type="name"
              value={imageURL}
              onChange={this.onChange}
              error={errors.imageURL}
            /> */}

            <TextFieldGroup
              required
              label="Адрес для карты"
              placeholder="пример: Екатеринбург, ул.Бориса Ельцина, д.1"
              name="location"
              type="name"
              value={this.state.location}
              onChange={this.onChange}
              error={errors.location}
            />
            <ReactQuill
              theme="snow"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              error={errors.description}
              label="Описание компании или проекта"
              placeholder="Описание своего проекта"
            />

            <TextFieldGroup
              label="Код Youtube видео или трансляции для показа (если есть)"
              placeholder="например I_GMll3HJpM"
              name="youTubeCode"
              type="name"
              value={this.state.youTubeCode}
              onChange={this.onChange}
              error={errors.youTubeCode}
            />
            <TextFieldGroup
              label="Код магазина в Ecwid (если есть)"
              placeholder="например 34300034"
              name="shopId"
              type="name"
              value={shopId}
              onChange={this.onChange}
              error={errors.shopId}
            />

            <Button
              className="primary-color marginB-2"
              type="submit"
              variant="contained"
              fullWidth
            >
              Сохранить
            </Button>
          </form>
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  event: state.events,
  errors: state.errors,
});

export default connect(mapStateToProps, { createEvent })(
  withRouter(CreateEvent)
);
