import React, { Component } from "react";

import Dropzone from "react-dropzone";

class Dropcomp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDrop = acceptedFiles => {
    const fileName = acceptedFiles[0].name;
    this.setState({ fileName: fileName });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div
            className="col-md-6 col-sm-12 d-flex align-items-center"
            style={{ height: "100vh" }}
          >
            <div className="card text-center w-100">
              <div className="card-header">Téléversement de fichier</div>
              <div className="card-body p-0">
                <Dropzone onDrop={this.onDrop} multiple={false}>
                  {({ getRootProps, getInputProps }) => (
                    <section className="dropzone mx-auto">
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <h5
                          className="card-title d-flex align-items-center justify-content-center mb-0"
                          style={{ height: "150px" }}
                        >
                          Glissez votre fichier, ou cliquez ici.
                        </h5>
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              {this.state.fileName && (
                <div className="card-footer text-muted">
                  Fichier téléchargé : {this.state.fileName}
                </div>
              )}
            </div>
          </div>
          <div className="col-3" />
        </div>
      </div>
    );
  }
}

export default Dropcomp;
