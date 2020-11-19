webpackHotUpdate("app",{

/***/ "../../apps/documenteditor/mobile/src/controller/Main.jsx":
/*!**********************************************************************!*\
  !*** D:/web-apps/apps/documenteditor/mobile/src/controller/Main.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! mobx-react */ "./node_modules/mobx-react/dist/mobxreact.esm.js");
/* harmony import */ var _common_mobile_lib_controller_Collaboration_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/mobile/lib/controller/Collaboration.jsx */ "../../apps/common/mobile/lib/controller/Collaboration.jsx");







var _dec, _class;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var MainController = (_dec = Object(mobx_react__WEBPACK_IMPORTED_MODULE_7__["inject"])("storeDocumentSettings", "storeFocusObjects", "storeTextSettings", "storeParagraphSettings", "storeTableSettings", "storeDocumentInfo"), _dec(_class = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(MainController, _Component);

  var _super = _createSuper(MainController);

  function MainController(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, MainController);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(MainController, [{
    key: "initSdk",
    value: function initSdk() {
      var _this = this;

      var script = document.createElement("script");
      script.src = "../../../../sdkjs/develop/sdkjs/word/scripts.js";
      script.async = true;

      script.onload = function () {
        var dep_scripts = ["../../../vendor/xregexp/xregexp-all-min.js", "../../../vendor/sockjs/sockjs.min.js", "../../../vendor/jszip/jszip.min.js", "../../../vendor/jszip-utils/jszip-utils.min.js"];
        dep_scripts.push.apply(dep_scripts, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sdk_scripts));

        var promise_get_script = function promise_get_script(scriptpath) {
          return new Promise(function (resolve, reject) {
            var script = document.createElement("script");
            script.src = scriptpath;

            script.onload = function () {
              resolve("ok");
            };

            script.onerror = function () {
              reject("error");
            };

            document.body.appendChild(script);
          });
        };

        var loadConfig = function loadConfig(data) {
          var me = _this;
          console.log("load config");
          me.editorConfig = Object.assign({}, _this.editorConfig, data.config);
          me.appOptions.user = Common.Utils.fillUserInfo(me.editorConfig.user, me.editorConfig.lang, "Local.User"
          /*me.textAnonymous*/
          );
        };

        var loadDocument = function loadDocument(data) {
          _this.permissions = {};
          _this.document = data.doc;
          var docInfo = {};

          if (data.doc) {
            _this.permissions = Object.assign(_this.permissions, data.doc.permissions);

            var _permissions = Object.assign({}, data.doc.permissions),
                _user = new Asc.asc_CUserInfo();

            _user.put_Id(_this.appOptions.user.id);

            _user.put_FullName(_this.appOptions.user.fullname);

            docInfo = new Asc.asc_CDocInfo();
            docInfo.put_Id(data.doc.key);
            docInfo.put_Url(data.doc.url);
            docInfo.put_Title(data.doc.title);
            docInfo.put_Format(data.doc.fileType);
            docInfo.put_VKey(data.doc.vkey);
            docInfo.put_Options(data.doc.options);
            docInfo.put_UserInfo(_user);
            docInfo.put_CallbackUrl(_this.editorConfig.callbackUrl);
            docInfo.put_Token(data.doc.token);
            docInfo.put_Permissions(_permissions);
            docInfo.put_EncryptedInfo(_this.editorConfig.encryptionKeys); // var enable = !this.editorConfig.customization || (this.editorConfig.customization.macros!==false);
            // docInfo.asc_putIsEnabledMacroses(!!enable);
            // enable = !this.editorConfig.customization || (this.editorConfig.customization.plugins!==false);
            // docInfo.asc_putIsEnabledPlugins(!!enable);
            // let type = /^(?:(pdf|djvu|xps))$/.exec(data.doc.fileType);
            // if (type && typeof type[1] === 'string') {
            //     this.permissions.edit = this.permissions.review = false;
            // }
          }

          _this.api.asc_registerCallback("asc_onGetEditorPermissions", onEditorPermissions); // this.api.asc_registerCallback('asc_onLicenseChanged',       _.bind(this.onLicenseChanged, this));
          // this.api.asc_registerCallback('asc_onRunAutostartMacroses', _.bind(this.onRunAutostartMacroses, this));


          _this.api.asc_setDocInfo(docInfo);

          _this.api.asc_getEditorPermissions(_this.editorConfig.licenseUrl, _this.editorConfig.customerId); // Document Info


          var storeDocumentInfo = _this.props.storeDocumentInfo;
          storeDocumentInfo.setDataDoc(data.doc); // Common.SharedSettings.set('document', data.doc);
          // if (data.doc) {
          //     DE.getController('Toolbar').setDocumentTitle(data.doc.title);
          //     if (data.doc.info) {
          //         data.doc.info.author && console.log("Obsolete: The 'author' parameter of the document 'info' section is deprecated. Please use 'owner' instead.");
          //         data.doc.info.created && console.log("Obsolete: The 'created' parameter of the document 'info' section is deprecated. Please use 'uploaded' instead.");
          //     }
          // }
        };

        var onEditorPermissions = function onEditorPermissions(params) {
          var me = _this;
          var licType = params.asc_getLicenseType();
          me.appOptions.canLicense = licType === Asc.c_oLicenseResult.Success || licType === Asc.c_oLicenseResult.SuccessLimit; // me.appOptions.canEdit         = (me.permissions.edit !== false || me.permissions.review === true) && // can edit or review
          //     (me.editorConfig.canRequestEditRights || me.editorConfig.mode !== 'view') && // if mode=="view" -> canRequestEditRights must be defined
          //     (!me.appOptions.isReviewOnly || me.appOptions.canLicense) && // if isReviewOnly==true -> canLicense must be true
          //     me.isSupportEditFeature();
          // me.appOptions.isEdit          = me.appOptions.canLicense && me.appOptions.canEdit && me.editorConfig.mode !== 'view';
          // me.api.asc_setViewMode(!me.appOptions.isEdit);

          me.api.asc_setViewMode(false);
          me.api.asc_LoadDocument();
          me.api.Resize();
        };

        var _process_array = function _process_array(array, fn) {
          var results = [];
          return array.reduce(function (p, item) {
            return p.then(function () {
              return fn(item).then(function (data) {
                results.push(data);
                return results;
              });
            });
          }, Promise.resolve());
        };

        _process_array(dep_scripts, promise_get_script).then(function (result) {
          _this.api = new Asc.asc_docs_api({
            "id-view": "editor_sdk",
            mobile: true // 'translate': translate

          });
          _this.appOptions = {};

          _this.bindEvents();

          Common.Gateway.on("init", loadConfig); // Common.Gateway.on('showmessage',    _.bind(me.onExternalMessage, me));

          Common.Gateway.on("opendocument", loadDocument);
          Common.Gateway.appReady();
          Common.Notifications.trigger("engineCreated", _this.api);
          Common.EditorApi = {
            get: function get() {
              return _this.api;
            }
          };
        }, function (error) {
          console.log("promise failed " + error);
        });
      };

      script.onerror = function () {
        console.log("error");
      };

      document.body.appendChild(script);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var storeDocumentSettings = this.props.storeDocumentSettings;
      this.api.asc_registerCallback("asc_onPageOrient", function (isPortrait) {
        storeDocumentSettings.resetPortrait(isPortrait);
      });
      this.api.asc_registerCallback("asc_onDocSize", function (w, h) {
        storeDocumentSettings.changeDocSize(w, h);
      });
      var storeFocusObjects = this.props.storeFocusObjects;
      this.api.asc_registerCallback("asc_onFocusObject", function (objects) {
        storeFocusObjects.resetFocusObjects(objects);
      }); //text settings

      var storeTextSettings = this.props.storeTextSettings;
      this.api.asc_registerCallback("asc_onInitEditorFonts", function (fonts, select) {
        storeTextSettings.initEditorFonts(fonts, select);
      });
      this.api.asc_registerCallback("asc_onFontFamily", function (font) {
        storeTextSettings.resetFontName(font);
      });
      this.api.asc_registerCallback("asc_onFontSize", function (size) {
        storeTextSettings.resetFontSize(size);
      });
      this.api.asc_registerCallback("asc_onBold", function (isBold) {
        storeTextSettings.resetIsBold(isBold);
      });
      this.api.asc_registerCallback("asc_onItalic", function (isItalic) {
        storeTextSettings.resetIsItalic(isItalic);
      });
      this.api.asc_registerCallback("asc_onUnderline", function (isUnderline) {
        storeTextSettings.resetIsUnderline(isUnderline);
      });
      this.api.asc_registerCallback("asc_onStrikeout", function (isStrikeout) {
        storeTextSettings.resetIsStrikeout(isStrikeout);
      });
      this.api.asc_registerCallback("asc_onVerticalAlign", function (typeBaseline) {
        storeTextSettings.resetTypeBaseline(typeBaseline);
      });
      this.api.asc_registerCallback("asc_onListType", function (data) {
        var type = data.get_ListType();
        var subtype = data.get_ListSubType();
        storeTextSettings.resetListType(type);

        switch (type) {
          case 0:
            storeTextSettings.resetBullets(subtype);
            break;

          case 1:
            storeTextSettings.resetNumbers(subtype);
            break;
        }
      });
      this.api.asc_registerCallback("asc_onPrAlign", function (align) {
        storeTextSettings.resetParagraphAlign(align);
      });
      this.api.asc_registerCallback("asc_onTextColor", function (color) {
        storeTextSettings.resetTextColor(color);
      });
      this.api.asc_registerCallback("asc_onParaSpacingLine", function (vc) {
        storeTextSettings.resetLineSpacing(vc);
      });
      this.api.asc_registerCallback("asc_onTextShd", function (shd) {
        var color = shd.get_Color();
        storeTextSettings.resetBackgroundColor(color);
      }); //paragraph settings

      var storeParagraphSettings = this.props.storeParagraphSettings;
      this.api.asc_registerCallback("asc_onInitEditorStyles", function (styles) {
        storeParagraphSettings.initEditorStyles(styles);
      });
      this.api.asc_registerCallback("asc_onParaStyleName", function (name) {
        storeParagraphSettings.changeParaStyleName(name);
      }); //table settings

      var storeTableSettings = this.props.storeTableSettings;
      this.api.asc_registerCallback("asc_onInitTableTemplates", function (templates) {
        storeTableSettings.initTableTemplates(templates);
      }); // Document Info

      var storeDocumentInfo = this.props.storeDocumentInfo;
      this.api.asc_registerCallback("asc_onGetDocInfoStart", function () {
        storeDocumentInfo.switchIsLoaded(false);
      });
      this.api.asc_registerCallback("asc_onGetDocInfoStop", function () {
        storeDocumentInfo.switchIsLoaded(true);
      });
      this.api.asc_registerCallback("asc_onDocInfo", function (obj) {
        storeDocumentInfo.changeCount(obj);
      }); // me.api.asc_registerCallback('asc_onGetDocInfoEnd',      _.bind(me.onApiGetDocInfoEnd, me));
      // me.api.asc_registerCallback('asc_onDocumentName',       _.bind(me.onApiDocumentName, me));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_common_mobile_lib_controller_Collaboration_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null);
    }
  }]);

  return MainController;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"])) || _class);
/* harmony default export */ __webpack_exports__["default"] = (MainController);

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






var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp;


var storeDocumentInfo = (_class = (_temp = /*#__PURE__*/function () {
  function storeDocumentInfo() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, storeDocumentInfo);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "PageCount", _descriptor, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "WordsCount", _descriptor2, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "ParagraphCount", _descriptor3, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "SymbolsCount", _descriptor4, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "SymbolsWSCount", _descriptor5, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "isLoaded", _descriptor6, this);

    _babel_runtime_helpers_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "dataDoc", _descriptor7, this);
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
        if (obj.get_PageCount() > -1) this.PageCount = obj.get_PageCount();
        if (obj.get_WordsCount() > -1) this.WordsCount = obj.get_WordsCount();
        if (obj.get_ParagraphCount() > -1) this.ParagraphCount = obj.get_ParagraphCount();
        if (obj.get_SymbolsCount() > -1) this.SymbolsCount = obj.get_SymbolsCount();
        if (obj.get_SymbolsWSCount() > -1) this.SymbolsWSCount = obj.get_SymbolsWSCount();
      }
    }
  }, {
    key: "setDataDoc",
    value: function setDataDoc(obj) {
      this.dataDoc = obj;
    }
  }]);

  return storeDocumentInfo;
}(), _temp), (_descriptor = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "PageCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor2 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "WordsCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor3 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "ParagraphCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor4 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "SymbolsCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor5 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "SymbolsWSCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 0;
  }
}), _descriptor6 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "isLoaded", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor7 = _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "dataDoc", [mobx__WEBPACK_IMPORTED_MODULE_5__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return "";
  }
}), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "switchIsLoaded", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "switchIsLoaded"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "changeCount", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeCount"), _class.prototype), _babel_runtime_helpers_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_3___default()(_class.prototype, "setDataDoc", [mobx__WEBPACK_IMPORTED_MODULE_5__["action"]], Object.getOwnPropertyDescriptor(_class.prototype, "setDataDoc"), _class.prototype)), _class);

/***/ }),

/***/ "../../apps/documenteditor/mobile/src/store/mainStore.js":
/*!*********************************************************************!*\
  !*** D:/web-apps/apps/documenteditor/mobile/src/store/mainStore.js ***!
  \*********************************************************************/
/*! exports provided: stores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stores", function() { return stores; });
/* harmony import */ var _documentSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documentSettings */ "../../apps/documenteditor/mobile/src/store/documentSettings.js");
/* harmony import */ var _focusObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./focusObjects */ "../../apps/documenteditor/mobile/src/store/focusObjects.js");
/* harmony import */ var _common_mobile_lib_store_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/mobile/lib/store/users */ "../../apps/common/mobile/lib/store/users.js");
/* harmony import */ var _textSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textSettings */ "../../apps/documenteditor/mobile/src/store/textSettings.js");
/* harmony import */ var _paragraphSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paragraphSettings */ "../../apps/documenteditor/mobile/src/store/paragraphSettings.js");
/* harmony import */ var _shapeSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapeSettings */ "../../apps/documenteditor/mobile/src/store/shapeSettings.js");
/* harmony import */ var _imageSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageSettings */ "../../apps/documenteditor/mobile/src/store/imageSettings.js");
/* harmony import */ var _tableSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tableSettings */ "../../apps/documenteditor/mobile/src/store/tableSettings.js");
/* harmony import */ var _chartSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chartSettings */ "../../apps/documenteditor/mobile/src/store/chartSettings.js");
/* harmony import */ var _documentInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./documentInfo */ "../../apps/documenteditor/mobile/src/store/documentInfo.js");










var stores = {
  storeFocusObjects: new _focusObjects__WEBPACK_IMPORTED_MODULE_1__["storeFocusObjects"](),
  storeDocumentSettings: new _documentSettings__WEBPACK_IMPORTED_MODULE_0__["storeDocumentSettings"](),
  users: new _common_mobile_lib_store_users__WEBPACK_IMPORTED_MODULE_2__["storeUsers"](),
  storeTextSettings: new _textSettings__WEBPACK_IMPORTED_MODULE_3__["storeTextSettings"](),
  storeParagraphSettings: new _paragraphSettings__WEBPACK_IMPORTED_MODULE_4__["storeParagraphSettings"](),
  storeShapeSettings: new _shapeSettings__WEBPACK_IMPORTED_MODULE_5__["storeShapeSettings"](),
  storeChartSettings: new _chartSettings__WEBPACK_IMPORTED_MODULE_8__["storeChartSettings"](),
  storeImageSettings: new _imageSettings__WEBPACK_IMPORTED_MODULE_6__["storeImageSettings"](),
  storeTableSettings: new _tableSettings__WEBPACK_IMPORTED_MODULE_7__["storeTableSettings"](),
  storeDocumentInfo: new _documentInfo__WEBPACK_IMPORTED_MODULE_9__["storeDocumentInfo"]()
};

/***/ })

})
//# sourceMappingURL=hot-update.js.map