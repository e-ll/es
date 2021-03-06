import React from "react";
import {IconButton} from "@material-ui/core"
//import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from "react-firebase-file-uploader/lib/CustomUploadButton";
import config from "./con";
import {getSizedParentNode} from "leaflet/src/dom/DomUtil";
import styles from "./up.module.css";
import DeleteIcon from "@material-ui/icons/Delete";

// Setup Firebase
// firebase.initializeApp(config);
import {firebase} from '../create-event/CreateEvent'


export default class UpLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filenames: [],
      downloadURLs: [],
      isUploading: false,
      uploadProgress: 0,
    }
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.state.downloadURLs.length === 0 && this.props.currentLogo && this.props.currentLogo.length > 0) {
      this.setState({downloadURLs: [this.props.currentLogo]})
    }
  }

  handleUploadStart = () =>
    this.setState({
      isUploading: true,
      uploadProgress: 0,
    });

  handleProgress = (progress) =>
    this.setState({
      uploadProgress: progress,
    });

  handleUploadError = (error) => {
    this.setState({
      isUploading: false,
      // Todo: handle error
    });
    console.error(error);
  };

  handleUploadSuccess = async (filename) => {
    const downloadURL = await firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL();

    console.log([downloadURL])
    this.setState((oldState) => ({
      filenames: [...oldState.filenames, filename],
//      downloadURLs: [...oldState.downloadURLs, downloadURL],
      downloadURLs: [downloadURL],
      uploadProgress: 100,
      isUploading: false,
    }));
    this.props.changeLogo(this.state.downloadURLs);
    // this.props.changeGalery({galleryUrl: this.state.downloadURLs});
  };

  deleteImage = (index) => {
    const oldUrls = this.state.downloadURLs;
    const downloadURLs = oldUrls.filter((url, i) => i !== index);
    console.log('DELETE', downloadURLs)
    const oldFilenames = this.state.filenames;
    const filenames = oldFilenames.filter((filename, i) => i !== index);
    this.setState({downloadURLs, filenames});
    this.props.changeLogo(downloadURLs);
  };

  render() {
    console.log('HEEEEERE', this.state)
    return (
      <>
        <label
          style={{
            backgroundColor: "steelblue",
            color: "white",
            padding: 10,
            display: "inline-block",
            marginBottom: 20,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          Загрузить логотип
          <FileUploader
            accept="image/*"
            name="image-uploader-multiple"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
            multiple
            maxHeight={800}
            maxWidth={800}
            hidden
          ></FileUploader>
        </label>
        {this.state.isUploading && <p>Progress: {this.state.uploadProgress}</p>}

        {/* {this.state.filenames.length > 0 && <p>Файлы: </p>}
        {this.state.filenames.length > 0 &&
          this.state.filenames.map((fileName) => <p>{fileName}</p>)} */}

        <div className={styles.imageGalleryLogo}>
          {this.state.downloadURLs && this.state.downloadURLs.map((downloadURL, index) => {
            return (
              <div key={downloadURL} className={styles.image}>
                <img style={{height: "100%"}} src={downloadURL}/>
                <div className={styles.deleteIcon}>
                  <IconButton
                    onClick={() => this.deleteImage(index)}
                    aria-label="delete"
                  >
                    <DeleteIcon fontSize="medium"/>
                  </IconButton>
                </div>
                {/* <span
                  className={styles.deleteIcon}
                  onClick={() => this.deleteImage(index)}
                >
                  X
                </span> */}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
