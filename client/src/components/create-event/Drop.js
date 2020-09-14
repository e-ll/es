import React from "react";
import ReactDOM from "react-dom";
import DropzoneComponent from "react-dropzone-component";
import "./drop.css"
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    // For a full list of possible configurations,
    // please consult http://www.dropzonejs.com/#configuration
    this.djsConfig = {
      acceptedFiles: "image/jpeg,image/png,image/gif",
      addRemoveLinks: true,
      params: {
        myParam: "Hello from a parameter!",
        anotherParam: 43,
      },
    };

    this.componentConfig = {
      iconFiletypes: [".jpg", ".png", ".gif"],
      showFiletypeIcon: true,
      postUrl: "http://localhost:8081/api/upload",
    };

    // If you want to attach multiple callbacks, simply
    // create an array filled with all your callbacks.
    this.callbackArray = [() => console.log("Hi!"), () => console.log("Ho!")];

    // Simple callbacks work too, of course
    this.callback = (file, {responseText}) => this.props.onChange(file, responseText)
  }

  render() {
    const config = this.componentConfig;
    const djsConfig = this.djsConfig;

    // For a list of all possible events (there are many), see README.md!
    const eventHandlers = {
      drop: this.callbackArray,
      success: this.callback,
    };

    return (
      <DropzoneComponent
        config={config}
        eventHandlers={eventHandlers}
        djsConfig={djsConfig}
      />
    );
  }
}
