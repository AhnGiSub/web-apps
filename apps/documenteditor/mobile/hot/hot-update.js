webpackHotUpdate("app",{

/***/ "../../apps/documenteditor/mobile/src/components/settings/document-info/DocumentInfo.jsx":
/*!*****************************************************************************************************!*\
  !*** D:/web-apps/apps/documenteditor/mobile/src/components/settings/document-info/DocumentInfo.jsx ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var framework7_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framework7-react */ "./node_modules/framework7-react/framework7-react.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





var PageDocumentInfo = function PageDocumentInfo(props) {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var _t = t("Settings", {
    returnObjects: true
  });

  var storeInfo = props.storeDocumentInfo;
  var docProps = props.getDocProps();
  var dataApp = props.getAppProps();
  var dataModified = props.getModified();
  var dataModifiedBy = props.getModifiedBy();
  var _storeInfo$infoObj = storeInfo.infoObj,
      pageCount = _storeInfo$infoObj.pageCount,
      paragraphCount = _storeInfo$infoObj.paragraphCount,
      symbolsCount = _storeInfo$infoObj.symbolsCount,
      symbolsWSCount = _storeInfo$infoObj.symbolsWSCount,
      wordsCount = _storeInfo$infoObj.wordsCount;
  var dataDoc = JSON.parse(JSON.stringify(storeInfo.dataDoc));
  var isLoaded = storeInfo.isLoaded; //   console.log(dataModified);
  //   console.log(dataModifiedBy);
  //   console.log(dataApp);
  //   console.log(docProps);
  //   console.log(isLoaded);
  //   console.log(dataDoc);
  //   console.log(wordsCount);
  //   console.log(paragraphCount);

  if (!isLoaded) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["Page"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      title: _t.textDocumentInfo,
      backLink: _t.textBack
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textDocumentTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: dataDoc.title
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textOwner), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: dataDoc.info.author
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textUploaded), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: dataDoc.info.created
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textStatistic), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "Pages",
      after: pageCount
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "Paragraphs",
      after: paragraphCount
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "Words",
      after: wordsCount
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "Symbols",
      after: symbolsCount
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "Spaces",
      after: symbolsWSCount
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textLastModified), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "11/19/2020 1:13 PM"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textLastModifiedBy), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "John Smith"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["BlockTitle"], null, _t.textApplication), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["List"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framework7_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
      title: "ONLYOFFICE/6.0.2.5"
    })));
  }
};

var DocumentInfo = Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["inject"])("storeDocumentInfo")(Object(mobx_react__WEBPACK_IMPORTED_MODULE_1__["observer"])(PageDocumentInfo));
/* harmony default export */ __webpack_exports__["default"] = (DocumentInfo);

/***/ }),

/***/ "../../apps/documenteditor/mobile/src/store/documentInfo.js":
/*!************************************************************************!*\
  !*** D:/web-apps/apps/documenteditor/mobile/src/store/documentInfo.js ***!
  \************************************************************************/
/*! exports provided: storeDocumentInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeDocumentInfo", function() { return storeDocumentInfo; });
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ "./node_modules/mobx/lib/mobx.module.js");






var _class, _descriptor, _descriptor2, _descriptor3, _temp;


var storeDocumentInfo = (_class = (_temp = /*#__PURE__*/function () {
  function storeDocumentInfo() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, storeDocumentInfo);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "infoObj", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "isLoaded", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "dataDoc", _descriptor3, this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(storeDocumentInfo, [{
    key: "switchIsLoaded",
    value: function switchIsLoaded(value) {
      this.isLoaded = value;
    }
  }, {
    key: "changeCount",
    value: function changeCount(obj) {
      if (obj) {
        if (obj.get_PageCount() > -1) this.infoObj.pageCount = obj.get_PageCount();
        if (obj.get_WordsCount() > -1) this.infoObj.wordsCount = obj.get_WordsCount();
        if (obj.get_ParagraphCount() > -1) this.infoObj.paragraphCount = obj.get_ParagraphCount();
        if (obj.get_SymbolsCount() > -1) this.infoObj.symbolsCount = obj.get_SymbolsCount();
        if (obj.get_SymbolsWSCount() > -1) this.infoObj.symbolsWSCount = obj.get_SymbolsWSCount();
      }
    }
  }, {
    key: "setDataDoc",
    value: function setDataDoc(obj) {
      this.dataDoc = obj;
    }
  }]);

  return storeDocumentInfo;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "infoObj", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      pageCount: 0,
      wordsCount: 0,
      paragraphCount: 0,
      symbolsCount: 0,
      symbolsWSCount: 0
    };
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "isLoaded", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "dataDoc", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "switchIsLoaded", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "switchIsLoaded"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "changeCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeCount"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "setDataDoc", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "setDataDoc"), _class.prototype)), _class);

/***/ })

})
//# sourceMappingURL=hot-update.js.map