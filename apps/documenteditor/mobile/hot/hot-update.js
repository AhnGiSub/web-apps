webpackHotUpdate("app",{

/***/ "../../apps/documenteditor/mobile/src/components/settings/controller/DocumentInfo.jsx":
/*!**************************************************************************************************!*\
  !*** D:/web-apps/apps/documenteditor/mobile/src/components/settings/controller/DocumentInfo.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _document_info_DocumentInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../document-info/DocumentInfo */ "../../apps/documenteditor/mobile/src/components/settings/document-info/DocumentInfo.jsx");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var DocumentInfoController = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(DocumentInfoController, _Component);

  var _super = _createSuper(DocumentInfoController);

  function DocumentInfoController(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, DocumentInfoController);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(DocumentInfoController, [{
    key: "getDocProps",
    value: function getDocProps() {
      var api = Common.EditorApi.get();

      if (api) {
        var docProps = api.asc_getCoreProps();
        return docProps;
      }
    }
  }, {
    key: "getAppProps",
    value: function getAppProps() {
      var api = Common.EditorApi.get();

      if (api) {
        var appProps = api.asc_getAppProps();
        console.log(appProps);

        if (appProps) {
          var appName = (appProps.asc_getApplication() || "") + (appProps.asc_getAppVersion() ? " " : "") + (appProps.asc_getAppVersion() || "");
          return appName;
        }
      }
    }
  }, {
    key: "getModified",
    value: function getModified() {
      var docProps = this.getDocProps();

      if (docProps) {
        var valueModified = docProps.asc_getModified();
        console.log(docProps);

        if (valueModified) {
          return valueModified.toLocaleString(_lang, {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          }) + " " + valueModified.toLocaleTimeString(_lang, {
            timeStyle: "short"
          });
        }
      }
    }
  }, {
    key: "getModifiedBy",
    value: function getModifiedBy() {
      var docProps = this.getDocProps();

      if (docProps) {
        var valueModifiedBy = docProps.asc_getLastModifiedBy();

        if (valueModifiedBy) {
          return Common.Utils.UserInfoParser.getParsedName(valueModifiedBy);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var api = Common.EditorApi.get();

      if (api) {
        api.startGetDocInfo();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_document_info_DocumentInfo__WEBPACK_IMPORTED_MODULE_6__["default"], {
        getAppProps: this.getAppProps,
        getModified: this.getModified,
        getModifiedBy: this.getModifiedBy,
        getDocProps: this.getDocProps
      });
    }
  }]);

  return DocumentInfoController;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DocumentInfoController);

/***/ })

})
//# sourceMappingURL=hot-update.js.map