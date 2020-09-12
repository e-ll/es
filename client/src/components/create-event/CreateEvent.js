import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectFieldGroup from "../common/SelectFieldGroup";
import { createEvent } from "../../actions/eventActions";
import DropzoneComponent from "react-dropzone-component";
import "react-upload-gallery/dist/style.css";
import Drop from "./Drop";

// import { initialState } from "../upload/data";

// const standList = [
//   "",
//
// ];

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
      gallery: null,
      errors: {},
      shopId: null,

    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
 
  }

  
  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.match.params.id) {
      const event = this.props.event.event;

      this.setState({
        id: event._id,
        partisipantName: event.partisipantName,
        standType: event.standType,
        numberofplayer: event.numberofplayer,
        imageURL: event.imageURL,
        location: event.location,
        start: event.start,
        description: event.description,
        logoUrl: event.logoUrl,
        youTubeCode: event.youTubeCode,
        gallery: event.gallery,
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
      partisipantName: this.state.partisipantName,
      standType: this.state.standType,
      numberofplayer: this.state.numberofplayer,
      imageURL: this.state.imageURL,
      location: this.state.location,
      start: this.state.start,
      description: this.state.description,
      logoUrl: this.state.logoUrl,
      youTubeCode: this.state.youTubeCode,
      gallery: this.state.gallery,
      shopId: this.state.shopId,
    };

    this.props.createEvent(eventData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;

    return (
      <Grid container justify="center" className="marginX-1">
        <Grid item xs={12} sm={8} md={6}>
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Создайте свой стенд
          </Typography>
          <form onSubmit={this.onSubmit}>
            <TextFieldGroup
              label="Название компании или проекта"
              placeholder=""
              name="partisipantName"
              type="name"
              value={this.state.partisipantName}
              onChange={this.onChange}
              error={errors.partisipantName}
            />
            <Grid container spacing={3}>
              {/* <Grid item xs={6}>
                <SelectFieldGroup
                  label="Type of Sport *"
                  name="standType"
                  type="name"
                  value={this.state.standType}
                  onChange={this.onChange}
                  standList={standList}
                  error={errors.standType}
                /> */}
            </Grid>
            {/* <Grid item xs={6}>
                <TextFieldGroup
                  label="Number of Player *"
                  placeholder="2-100 Players"
                  name="numberofplayer"
                  type="number"
                  value={this.state.numberofplayer}
                  onChange={this.onChange}
                  error={errors.numberofplayer}
                />
              </Grid> */}
            {/* </Grid> */}

            <TextFieldGroup
              label="Ссылка на изображение"
              placeholder="EX: https://unsplash.com/photos/-JzHSIzNYnU"
              name="imageURL"
              type="name"
              value={this.state.imageURL}
              onChange={this.onChange}
              error={errors.imageURL}
            />

            <TextFieldGroup
              label="Адрес для карты"
              placeholder="пример: Екатеринбург, ул.Бориса Ельцина, д.1"
              name="location"
              type="name"
              value={this.state.location}
              onChange={this.onChange}
              error={errors.location}
            />

            <TextAreaFieldGroup
              label="Описание компании или проекта"
              placeholder="Details about this event"
              name="description"
              type="name"
              value={this.state.description}
              onChange={this.onChange}
              error={errors.description}
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
              name="shopID"
              type="name"
              value={this.state.shopId}
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
          <Drop />
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
