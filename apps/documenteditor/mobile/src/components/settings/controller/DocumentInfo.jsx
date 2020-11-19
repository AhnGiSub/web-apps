import React, { Component } from "react";
import { DocumentInfo } from "../document-info/DocumentInfo";

class DocumentInfoController extends Component {
  constructor(props) {
    super(props);
  }

  // initPageInfo() {
  //     // var me = this;
  //     const api = Common.EditorApi.get();

  //     if(api) {
  //         api.startGetDocInfo();
  //         var document = Common.SharedSettings.get('document') || {},
  //             info = document.info || {};

  //         document.title ? $('#settings-document-title').html(document.title) : $('.display-document-title').remove();
  //         var value = info.owner || info.author;
  //         value ? $('#settings-document-owner').html(value) : $('.display-owner').remove();
  //         value = info.uploaded || info.created;
  //         value ? $('#settings-doc-uploaded').html(value) : $('.display-uploaded').remove();
  //         info.folder ? $('#settings-doc-location').html(info.folder) : $('.display-location').remove();

  //         var appProps = (api) ? api.asc_getAppProps() : null;
  //         if (appProps) {
  //             var appName = (appProps.asc_getApplication() || '') + (appProps.asc_getAppVersion() ? ' ' : '') + (appProps.asc_getAppVersion() || '');
  //             appName ? $('#settings-doc-application').html(appName) : $('.display-application').remove();
  //         }
  //         var props = api ? api.asc_getCoreProps() : null;
  //         if (props) {
  //             value = props.asc_getTitle();
  //             value ? $('#settings-doc-title').html(value) : $('.display-title').remove();
  //             value = props.asc_getSubject();
  //             value ? $('#settings-doc-subject').html(value) : $('.display-subject').remove();
  //             value = props.asc_getDescription();
  //             value ? $('#settings-doc-comment').html(value) : $('.display-comment').remove();
  //             value = props.asc_getModified();
  //             value ? $('#settings-doc-last-mod').html(value.toLocaleString(_lang, {year: 'numeric', month: '2-digit', day: '2-digit'}) + ' ' + value.toLocaleTimeString(_lang, {timeStyle: 'short'})) : $('.display-last-mode').remove();
  //             value = props.asc_getLastModifiedBy();
  //             value ? $('#settings-doc-mod-by').html(Common.Utils.UserInfoParser.getParsedName(value)) : $('.display-mode-by').remove();
  //             value = props.asc_getCreated();
  //             value ? $('#settings-doc-date').html(value.toLocaleString(_lang, {year: 'numeric', month: '2-digit', day: '2-digit'}) + ' ' + value.toLocaleTimeString(_lang, {timeStyle: 'short'})) : $('.display-created-date').remove();
  //             value = props.asc_getCreator();
  //             var templateCreator = "";
  //             value && value.split(/\s*[,;]\s*/).forEach(function(item) {
  //                 templateCreator = templateCreator + "<li class='item-content'><div class='item-inner'><div class='item-title'>" + item + "</div></div></li>";
  //             });
  //             templateCreator ? $('#list-creator').html(templateCreator) : $('.display-author').remove();
  //         }
  //     }
  // }

  // API handlers

  // onApiGetDocInfoStart() {
  //     // var me = this;
  //     const api = Common.EditorApi.get();

  //     _.defer(function(){
  //         if (!inProgress)
  //             return;

  //         $('#statistic-pages').html(api.txtLoading);
  //         $('#statistic-words').html(api.txtLoading);
  //         $('#statistic-paragraphs').html(api.txtLoading);
  //         $('#statistic-symbols').html(api.txtLoading);
  //         $('#statistic-spaces').html(api.txtLoading);
  //     });
  // }

  // onApiGetDocInfoEnd() {
  //     inProgress = false;

  //     $('#statistic-pages').html(infoObj.PageCount);
  //     $('#statistic-words').html(infoObj.WordsCount);
  //     $('#statistic-paragraphs').html(infoObj.ParagraphCount);
  //     $('#statistic-symbols').html(infoObj.SymbolsCount);
  //     $('#statistic-spaces').html(infoObj.SymbolsWSCount);
  // }

  // onApiDocumentName(name) {
  //     $('#settings-document-title').html(name ? name : '-');
  // }

  componentDidMount() {
    const api = Common.EditorApi.get();
    if (api) {
      api.startGetDocInfo();
    }
  }

  render() {
    // return (
    //     <DocumentInfo initPageInfo={this.initPageInfo}
    //                       onApiGetDocInfoStart={this.onApiGetDocInfoStart}
    //                       onApiGetDocInfoEnd={this.onApiGetDocInfoEnd}
    //                       onApiDocInfo={this.onApiDocInfo}
    //                       onApiDocumentName={this.onApiDocumentName}
    //     />
    // )
  }
}

export default DocumentInfoController;
