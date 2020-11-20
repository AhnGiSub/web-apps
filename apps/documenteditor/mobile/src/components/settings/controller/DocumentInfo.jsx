import React, { Component } from "react";
import DocumentInfo from "../document-info/DocumentInfo";

class DocumentInfoController extends Component {
  constructor(props) {
    super(props);
  }

  getDocProps() {
    const api = Common.EditorApi.get();
    if (api) {
      let docProps = api.asc_getCoreProps();
      return docProps;
    }
  }

  getAppProps() {
    const api = Common.EditorApi.get();
    if (api) {
      const appProps = api.asc_getAppProps();
      if (appProps) {
        console.log(appProps);
        let appName =
          (appProps.asc_getApplication() || "") +
          (appProps.asc_getAppVersion() ? " " : "") +
          (appProps.asc_getAppVersion() || "");
        return appName;
      }
    }
  }

  getModified() {
    const docProps = this.getDocProps();
    if (docProps) {
      let valueModified = docProps.asc_getModified();
      if (valueModified) {
        return (
          valueModified.toLocaleString(_lang, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }) +
          " " +
          valueModified.toLocaleTimeString(_lang, { timeStyle: "short" })
        );
      }
    }
  }

  getModifiedBy() {
    const docProps = this.getDocProps();
    if (docProps) {
      let valueModifiedBy = docProps.asc_getLastModifiedBy();
      if (valueModifiedBy) {
        console.log(valueModifiedBy);
        return Common.Utils.UserInfoParser.getParsedName(valueModifiedBy);
      }
    }
  }

  componentDidMount() {
    const api = Common.EditorApi.get();
    if (api) {
      api.startGetDocInfo();
    }
  }

  render() {
    return (
      <DocumentInfo
        getDocProps={this.getDocProps}
        getAppProps={this.getAppProps}
        getModified={this.getModified}
        getModifiedBy={this.getModifiedBy}
      />
    );
  }
}

export default DocumentInfoController;
