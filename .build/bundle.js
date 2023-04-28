(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/DreamsBank/i18n/i18n.properties":
/*!***********************************************************!*\
  !*** ./build.definitions/DreamsBank/i18n/i18n.properties ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/Aportantes/Aportantes_DeleteConfirmation.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/Aportantes/Aportantes_DeleteConfirmation.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/AppUpdateFailure.js":
/*!****************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/AppUpdateFailure.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
  let result = clientAPI.actionResults.AppUpdate.error.toString();
  var message;
  console.log(result);
  if (result.startsWith('Error: Uncaught app extraction failure:')) {
    result = 'Error: Uncaught app extraction failure:';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
    result = 'Application instance is not up or running';
  }
  if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
    result = 'Service instance not found.';
  }
  switch (result) {
    case 'Service instance not found.':
      message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
      message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
      break;
    case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
      message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
      break;
    case 'Error: Uncaught app extraction failure:':
      message = 'Error extracting metadata. Please redeploy and try again.';
      break;
    case 'Application instance is not up or running':
      message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
      break;
    default:
      message = result;
      break;
  }
  return clientAPI.getPageProxy().executeAction({
    "Name": "/DreamsBank/Actions/AppUpdateFailureMessage.action",
    "Properties": {
      "Duration": 0,
      "Message": message
    }
  });
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/AppUpdateSuccess.js":
/*!****************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/AppUpdateSuccess.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}
function AppUpdateSuccess(clientAPI) {
  var message;
  // Force a small pause to let the progress banner show in case there is no new version available
  return sleep(500).then(function () {
    let result = clientAPI.actionResults.AppUpdate.data;
    console.log(result);
    let versionNum = result.split(': ')[1];
    if (result.startsWith('Current version is already up to date')) {
      return clientAPI.getPageProxy().executeAction({
        "Name": "/DreamsBank/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Message": `You are already using the latest version: ${versionNum}`,
          "NumberOfLines": 2
        }
      });
    } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
      message = 'No Application metadata found. Please deploy your application and try again.';
      return clientAPI.getPageProxy().executeAction({
        "Name": "/DreamsBank/Actions/AppUpdateSuccessMessage.action",
        "Properties": {
          "Duration": 5,
          "Message": message,
          "NumberOfLines": 2
        }
      });
    }
  });
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/Beneficiarios/Beneficiarios_DeleteConfirmation.js":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/Beneficiarios/Beneficiarios_DeleteConfirmation.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/OnWillUpdate.js":
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/OnWillUpdate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/OnWillUpdate.action').then(result => {
    if (result.data) {
      return Promise.resolve();
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/Productos/Productos_DeleteConfirmation.js":
/*!**************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/Productos/Productos_DeleteConfirmation.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
  return clientAPI.executeAction('/DreamsBank/Actions/DeleteConfirmation.action').then(result => {
    if (result.data) {
      return clientAPI.executeAction('/DreamsBank/Actions/KnowledgePeople/Productos/Productos_DeleteEntity.action').then(success => Promise.resolve(success), failure => Promise.reject('Delete entity failed ' + failure));
    } else {
      return Promise.reject('User Deferred');
    }
  });
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Rules/ResetAppSettingsAndLogout.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Rules/ResetAppSettingsAndLogout.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
function ResetAppSettingsAndLogout(context) {
  let logger = context.getLogger();
  let platform = context.nativescript.platformModule;
  let appSettings = context.nativescript.appSettingsModule;
  var appId;
  if (platform && (platform.isIOS || platform.isAndroid)) {
    appId = context.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
  } else {
    appId = 'WindowsClient';
  }
  try {
    // Remove any other app specific settings
    appSettings.getAllKeys().forEach(key => {
      if (key.substring(0, appId.length) === appId) {
        appSettings.remove(key);
      }
    });
  } catch (err) {
    logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
  } finally {
    // Logout 
    return context.getPageProxy().executeAction('/DreamsBank/Actions/Logout.action');
  }
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Styles/Styles.css":
/*!********************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n.HeadlineText {\n  color: #5dc484;\n  font-weight: lighter;\n  font-style: normal;\n  font-size: small;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/DreamsBank/Styles/Styles.less":
/*!*********************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.less ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\n\n\n.HeadlineText{\n    color:rgb(93, 196, 132);\n    font-weight: lighter;\n    font-style: normal;\n    font-size: small;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/DreamsBank/Styles/Styles.light.css":
/*!**************************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.light.css ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".ns-light .HeadlineText {\n\tcolor: #5dc484;\n\tfont-weight: lighter;\n\tfont-style: normal;\n\tfont-size: small;\n\tfont-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/DreamsBank/Styles/Styles.light.nss":
/*!**************************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.light.nss ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js */ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "HeadlineText {\n\tfont-color: #5dc484;\n\tfont-weight: lighter;\n\tfont-style: normal;\n\tfont-size: small;\n}\n", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************************************************************!*\
  !*** ../../extbin/local/openvscode-server/extensions/mdk-vsc-wing-23.4.1/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/Inicio.page":
/*!********************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/Inicio.page ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"ObjectHeader":{"Subhead":"Banco de becas","Footnote":"0.0.1","DetailImage":"/DreamsBank/Images/dreamsbank.jpg","DetailImageIsCircular":true,"BodyText":"User...","HeadlineText":"DreamsBank","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"Knowledge People","TextAlignment":"Center","Visible":true,"OnPress":{"Handler":"/DreamsBank/Actions/KnowledgePeople/NavToKP.action","UserInteraction":{"Enabled":true,"Title":"Button"}}},{"_Name":"SectionButton1","Title":"Knowledge Run","TextAlignment":"Center","Visible":true},{"_Name":"SectionButton2","Title":"Knowledge Project","TextAlignment":"Center","Visible":true},{"_Name":"SectionButton3","Title":"Knowledge Factory","TextAlignment":"Center","Visible":true}]}]}],"_Type":"Page","_Name":"Inicio","Caption":"Inicio","ToolBar":{"Items":[{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem0","Caption":"Cerrar Sesion","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DreamsBank/Actions/LogoutMessage.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem1","Caption":"Actualizar","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DreamsBank/Actions/AppUpdateProgressBanner.action"},{"_Type":"Control.Type.ToolbarItem","_Name":"ToolbarItem2","Caption":"Sincronizar","Enabled":true,"Visible":true,"Clickable":true,"Style":"","OnPress":"/DreamsBank/Actions/Service/UploadOff.action"}]}}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Create.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Create.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Aportantes Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"cedula","_Name":"cedula","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"nombre","_Name":"nombre","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"edad","_Name":"edad","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"empresa","_Name":"empresa","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"telefono","_Name":"telefono","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"correo","_Name":"correo","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Aportantes_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Detail.page":
/*!**********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Detail.page ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Aportantes Detail","DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Aportantes","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/DreamsBank/Rules/Aportantes/Aportantes_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{cedula}","Subhead":"{nombre}","BodyText":"","Footnote":"{empresa}","Description":"{edad}","StatusText":"{telefono}","StatusImage":"","SubstatusImage":"","SubstatusText":"{correo}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"cedula","Value":"{cedula}"},{"KeyName":"nombre","Value":"{nombre}"},{"KeyName":"edad","Value":"{edad}"},{"KeyName":"empresa","Value":"{empresa}"},{"KeyName":"telefono","Value":"{telefono}"},{"KeyName":"correo","Value":"{correo}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Aportantes_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Edit.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Edit.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Aportantes Detail","DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Aportantes","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"cedula","_Name":"cedula","Value":"{cedula}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"nombre","_Name":"nombre","Value":"{nombre}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"edad","_Name":"edad","Value":"{edad}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"empresa","_Name":"empresa","Value":"{empresa}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"telefono","_Name":"telefono","Value":"{telefono}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"correo","_Name":"correo","Value":"{correo}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Aportantes_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_List.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_List.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Aportantes","ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{edad}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Detail.action","StatusImage":"","Title":"{cedula}","Footnote":"{empresa}","PreserveIconStackSpacing":false,"StatusText":"{telefono}","Subhead":"{nombre}","SubstatusText":"{correo}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Aportantes","Service":"/DreamsBank/Services/dreamsbankkk.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Aportantes_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Create.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Create.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Beneficiarios Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"cedula","_Name":"cedula","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"nombre","_Name":"nombre","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"edad","_Name":"edad","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"carrera","_Name":"carrera","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"semestre","_Name":"semestre","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"universidad","_Name":"universidad","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"telefono","_Name":"telefono","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"correo","_Name":"correo","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"id_aporte","_Name":"id_aporte","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Beneficiarios_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Detail.page":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Detail.page ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Beneficiarios Detail","DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Beneficiarios","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/DreamsBank/Rules/Beneficiarios/Beneficiarios_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{cedula}","Subhead":"{nombre}","BodyText":"","Footnote":"{carrera}","Description":"{edad}","StatusText":"{semestre}","StatusImage":"","SubstatusImage":"","SubstatusText":"{universidad}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"cedula","Value":"{cedula}"},{"KeyName":"nombre","Value":"{nombre}"},{"KeyName":"edad","Value":"{edad}"},{"KeyName":"carrera","Value":"{carrera}"},{"KeyName":"semestre","Value":"{semestre}"},{"KeyName":"universidad","Value":"{universidad}"},{"KeyName":"telefono","Value":"{telefono}"},{"KeyName":"correo","Value":"{correo}"},{"KeyName":"id_aporte","Value":"{id_aporte}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Beneficiarios_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Edit.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Edit.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Beneficiarios Detail","DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Beneficiarios","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"cedula","_Name":"cedula","Value":"{cedula}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"nombre","_Name":"nombre","Value":"{nombre}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"edad","_Name":"edad","Value":"{edad}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"carrera","_Name":"carrera","Value":"{carrera}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"semestre","_Name":"semestre","Value":"{semestre}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"universidad","_Name":"universidad","Value":"{universidad}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"telefono","_Name":"telefono","Value":"{telefono}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"correo","_Name":"correo","Value":"{correo}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"id_aporte","_Name":"id_aporte","Value":"{id_aporte}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Beneficiarios_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_List.page":
/*!**************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_List.page ***!
  \**************************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Beneficiarios","ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{edad}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Detail.action","StatusImage":"","Title":"{cedula}","Footnote":"{carrera}","PreserveIconStackSpacing":false,"StatusText":"{semestre}","Subhead":"{nombre}","SubstatusText":"{universidad}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Beneficiarios","Service":"/DreamsBank/Services/dreamsbankkk.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Beneficiarios_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Iniciar_Transaccion.page":
/*!*************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Iniciar_Transaccion.page ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.FormCellContainer","_Name":"FormCellContainer0","Sections":[{"Controls":[{"Value":["{cedula}"],"_Type":"Control.Type.FormCell.ListPicker","_Name":"Fc_listpicker_aportante_KP","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Aportante:","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Seleccione un aportante","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Aportantes","ServerSidePaging":true},"ObjectCell":{"Description":"{correo}","DetailImageIsCircular":false,"Footnote":"{edad}","Icons":[],"PreserveIconStackSpacing":true,"StatusText":"{cedula}","Styles":{},"Subhead":"{empresa}","SubstatusText":"{telefono}","Title":"{nombre}"},"ReturnValue":"{cedula}"}},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"Fc_listpicker_beneficiario_KP","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Beneficiario:","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Beneficiarios","ServerSidePaging":true},"ObjectCell":{"Description":"{cedula}","DetailImageIsCircular":false,"Icons":[],"PreserveIconStackSpacing":true,"Styles":{},"Title":"{nombre}"},"ReturnValue":"{cedula}"}},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"Fc_listpicker_producto_KP","IsEditable":true,"IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Producto:","DataPaging":{"ShowLoadingIndicator":false,"PageSize":50},"PickerPrompt":"Please select one single item","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"PickerItems":{"Target":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Productos"},"DisplayValue":"{nombre}","ReturnValue":"{id}"}},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":true,"Title":"Crear Transacción","TextAlignment":"Center","ButtonType":"Text","OnPress":"/DreamsBank/Actions/KnowledgePeople/Create_Transaccion.action"}],"Visible":true}]}],"_Type":"Page","_Name":"Iniciar_Transaccion","Caption":"Iniciar_Transaccion"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/KP.page":
/*!********************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/KP.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","ObjectHeader":{"DetailImage":"/DreamsBank/Images/KP.png","DetailImageIsCircular":false,"HeadlineText":"Aportes economicos o de conocimiento a estudiantes","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading","Styles":{"HeadlineText":"HeadlineText"}},"Visible":true},{"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"Aportantes","TextAlignment":"Center","OnPress":"/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_List.action"},{"_Name":"SectionButton1","Title":"Beneficiarios","TextAlignment":"Center","OnPress":"/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_List.action"},{"_Name":"SectionButton2","Title":"Productos","TextAlignment":"Center","OnPress":"/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_List.action"},{"_Name":"SectionButton3","Title":"Iniciar transacción","TextAlignment":"Center","OnPress":{"Handler":"/DreamsBank/Actions/KnowledgePeople/NavTo_Iniciar_Transaccion.action","UserInteraction":{"Enabled":true,"Title":"Iniciar transacción"}}}]}]}],"_Type":"Page","_Name":"Main","Caption":"Knowledge People"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Create.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Create.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Productos/Productos_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Productos Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"id","_Name":"id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"nombre","_Name":"nombre","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"descripcion","_Name":"descripcion","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"valor","_Name":"valor","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Productos_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Detail.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Detail.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Productos Detail","DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Productos","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/DreamsBank/Rules/Productos/Productos_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{id}","Subhead":"{nombre}","BodyText":"","Footnote":"{valor}","Description":"{descripcion}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"id","Value":"{id}"},{"KeyName":"nombre","Value":"{nombre}"},{"KeyName":"descripcion","Value":"{descripcion}"},{"KeyName":"valor","Value":"{valor}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Productos_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Edit.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Edit.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Productos Detail","DesignTimeTarget":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Productos","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/DreamsBank/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/DreamsBank/Actions/KnowledgePeople/Productos/Productos_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"id","_Name":"id","Value":"{id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"nombre","_Name":"nombre","Value":"{nombre}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"descripcion","_Name":"descripcion","Value":"{descripcion}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"valor","_Name":"valor","Value":"{valor}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Productos_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_List.page":
/*!******************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_List.page ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Productos","ActionBar":{"Items":[{"OnPress":"/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"disclosureIndicator","Description":"{descripcion}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Detail.action","StatusImage":"","Title":"{id}","Footnote":"{valor}","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{nombre}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Productos","Service":"/DreamsBank/Services/dreamsbankkk.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Productos_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"MainPage":"/DreamsBank/Pages/Inicio.page","OnLaunch":["/DreamsBank/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/DreamsBank/Rules/OnWillUpdate.js","OnDidUpdate":"/DreamsBank/Actions/Service/InitializeOnline.action","Styles":"/DreamsBank/Styles/Styles.css","Version":"/DreamsBank/Globals/AppDefinition_Version.global","Localization":"/DreamsBank/i18n/i18n.properties","_SchemaVersion":"6.0","_Name":"DreamsBank","StyleSheets":{"Styles":{"css":"/DreamsBank/Styles/Styles.light.css","ios":"/DreamsBank/Styles/Styles.light.nss","android":"/DreamsBank/Styles/Styles.light.json"}},"SDKStyles":{"ios":"/DreamsBank/Styles/Styles.light.nss","android":"/DreamsBank/Styles/Styles.light.json"}}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/AppUpdate.action":
/*!***************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdate.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/DreamsBank/Rules/AppUpdateFailure.js","OnSuccess":"/DreamsBank/Rules/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/AppUpdateFailureMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdateFailureMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/AppUpdateProgressBanner.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdateProgressBanner.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/DreamsBank/Actions/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/AppUpdateSuccessMessage.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/AppUpdateSuccessMessage.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/CloseModalPage_Cancel.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CloseModalPage_Cancel.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/CloseModalPage_Complete.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CloseModalPage_Complete.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/ClosePage.action":
/*!***************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/ClosePage.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/CreateEntityFailureMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CreateEntityFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/CreateEntitySuccessMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/CreateEntitySuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/DreamsBank/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/DeleteConfirmation.action":
/*!************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/DeleteConfirmation.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/DeleteEntityFailureMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/DeleteEntityFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/DeleteEntitySuccessMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/DeleteEntitySuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/DreamsBank/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_CreateEntity.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_CreateEntity.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Properties":{"cedula":"#Control:cedula/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","empresa":"#Control:empresa/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value"},"Target":{"EntitySet":"Aportantes","Service":"/DreamsBank/Services/dreamsbankkk.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_DeleteEntity.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_DeleteEntity.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Aportantes","Service":"/DreamsBank/Services/dreamsbankkk.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/DreamsBank/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_UpdateEntity.action":
/*!********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_UpdateEntity.action ***!
  \********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Aportantes","Service":"/DreamsBank/Services/dreamsbankkk.service","ReadLink":"{@odata.readLink}"},"Properties":{"cedula":"#Control:cedula/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","empresa":"#Control:empresa/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Create.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Create.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Detail.action":
/*!*******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Detail.action ***!
  \*******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Detail.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Edit.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Edit.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_List.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_List.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_List.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_CreateEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_CreateEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Properties":{"cedula":"#Control:cedula/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","carrera":"#Control:carrera/#Value","semestre":"#Control:semestre/#Value","universidad":"#Control:universidad/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","id_aporte":"#Control:id_aporte/#Value"},"Target":{"EntitySet":"Beneficiarios","Service":"/DreamsBank/Services/dreamsbankkk.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_DeleteEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_DeleteEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Beneficiarios","Service":"/DreamsBank/Services/dreamsbankkk.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/DreamsBank/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_UpdateEntity.action":
/*!**************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_UpdateEntity.action ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Beneficiarios","Service":"/DreamsBank/Services/dreamsbankkk.service","ReadLink":"{@odata.readLink}"},"Properties":{"cedula":"#Control:cedula/#Value","nombre":"#Control:nombre/#Value","edad":"#Control:edad/#Value","carrera":"#Control:carrera/#Value","semestre":"#Control:semestre/#Value","universidad":"#Control:universidad/#Value","telefono":"#Control:telefono/#Value","correo":"#Control:correo/#Value","id_aporte":"#Control:id_aporte/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Create.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Create.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Detail.action":
/*!*************************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Detail.action ***!
  \*************************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Detail.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Edit.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Edit.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_List.action":
/*!***********************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_List.action ***!
  \***********************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_List.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Create_Transaccion.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Create_Transaccion.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.CreateEntity","ActionResult":{"_Name":"Create_Transaccion"},"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Target":{"Service":"/DreamsBank/Services/dreamsbankkk.service","EntitySet":"Transacciones"},"Properties":{"id":"1","beneficiario":"#Control:Fc_listpicker_beneficiario_KP/#SelectedValue","aportante":"#Control:Fc_listpicker_aportante_KP/#SelectedValue","producto":"#Control:Fc_listpicker_producto_KP/#SelectedValue","estado":"Enviado"}}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/NavToKP.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/NavToKP.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavToKP"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/KP.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/NavTo_Iniciar_Transaccion.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/NavTo_Iniciar_Transaccion.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"NavTo_Iniciar_Transaccion"},"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Iniciar_Transaccion.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Create.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Create.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Detail.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Detail.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Detail.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Edit.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Edit.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_List.action":
/*!***************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_List.action ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/DreamsBank/Pages/KnowledgePeople/Productos/Productos_List.page"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_CreateEntity.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_CreateEntity.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/DreamsBank/Actions/CreateEntityFailureMessage.action","OnSuccess":"/DreamsBank/Actions/CreateEntitySuccessMessage.action","Properties":{"id":"#Control:id/#Value","nombre":"#Control:nombre/#Value","descripcion":"#Control:descripcion/#Value","valor":"#Control:valor/#Value"},"Target":{"EntitySet":"Productos","Service":"/DreamsBank/Services/dreamsbankkk.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_DeleteEntity.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_DeleteEntity.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Productos","Service":"/DreamsBank/Services/dreamsbankkk.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/DreamsBank/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_UpdateEntity.action":
/*!******************************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_UpdateEntity.action ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Productos","Service":"/DreamsBank/Services/dreamsbankkk.service","ReadLink":"{@odata.readLink}"},"Properties":{"id":"#Control:id/#Value","nombre":"#Control:nombre/#Value","descripcion":"#Control:descripcion/#Value","valor":"#Control:valor/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/DreamsBank/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/DreamsBank/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/Logout.action":
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Logout.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"SkipReset":false,"_Type":"Action.Type.Logout"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/LogoutMessage.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/LogoutMessage.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"CancelCaption":"No","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","OKCaption":"Yes","OnOK":"/DreamsBank/Rules/ResetAppSettingsAndLogout.js","Title":"Logout","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/OnWillUpdate.action":
/*!******************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/OnWillUpdate.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/Service/InitializeOnline.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/InitializeOnline.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/DreamsBank/Services/dreamsbankkk.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/Service/UploadOff.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/Service/UploadOff.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.OfflineOData.Upload","ActionResult":{"_Name":"UploadOff"},"Service":"/DreamsBank/Services/dreamsbankkk.service","UploadCategories":["Transacciones"]}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/UpdateEntityFailureMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/UpdateEntityFailureMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Actions/UpdateEntitySuccessMessage.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Actions/UpdateEntitySuccessMessage.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/DreamsBank/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Globals/AppDefinition_Version.global":
/*!***************************************************************************!*\
  !*** ./build.definitions/DreamsBank/Globals/AppDefinition_Version.global ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/DreamsBank/Services/dreamsbankkk.service":
/*!********************************************************************!*\
  !*** ./build.definitions/DreamsBank/Services/dreamsbankkk.service ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"dreamsbankkk","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"PathSuffix":"","SourceType":"Mobile","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "1.1\n"

/***/ }),

/***/ "./build.definitions/DreamsBank/Images/KP.png":
/*!****************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/KP.png ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./build.definitions/DreamsBank/Images/dreamsbank.jpg":
/*!************************************************************!*\
  !*** ./build.definitions/DreamsBank/Images/dreamsbank.jpg ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/4QBYRXhpZgAATU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAACgKADAAQAAAABAAACgAAAAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/8AAEQgCgAKAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMABgYGBgYGCgYGCg4KCgoOEg4ODg4SFxISEhISFxwXFxcXFxccHBwcHBwcHCIiIiIiIicnJycnLCwsLCwsLCwsLP/bAEMBBwcHCwoLEwoKEy4fGh8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLv/dAAQAKP/aAAwDAQACEQMRAD8A+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBpphp5phoAiaqz1Yaqz0AVJKpyVckqnJQBUeoDU7VCaAGipV61HUi0AWkq5HVJDVxKALqVZWqiGrKmgCwDTwaiBp2aAJM0ZpmaM0APzS5qPNLmgCTNFMBp2aAHUtNpaAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/9D6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopKKAFpKTNJmgAzTDTs1GTQBG1Vnqw1VnoAqvVR6tvVR6AKj1CaneoDQAlSLUWaepoAtIatoapIatIaALqGrKmqaGrCtQBZBpd1QbqN1AE+6k3VBupN1AFjdTg1Vg1PDUAWQaeDVdTUoNAE1LTAadmgB9FJS0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//R+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKKbmgBc03NITTSaAHE0majLU0tQBJmmk0wtTS1AAxqu5qQmoWNAED1TerT1UegCs9V2NTvVdjQA3NPU1CTTgaALamrKGqKmrKNQBfRqnDVSRqnDUAWd1JuqHdSbqAJt1N3VEWpM0AWA1SBqqg1KpoAtqamU1VU1MpoAsg08GoAakBoAlzS5qMGnZoAfRTc0tAC0UmaWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/S+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UlACU0mlNMNACE1GTSsahY0ABamlqjZqiLUATFqTdVfdSbqAJyaiY0wtTC1ACOaquamY1Xc0AVnNVmNWHNVmoAjJpQaaaQUAWFNWENU1NTqaALytUwaqamp1NAFjNGaiBp2aAHZpabS0APFSqahFPBoAsqalU1VBp4alcZcDU8NVMPTg9FwLoanBqph6kD0XAtA07NVg1SBqYiYGnVGDTgaAH0UgpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0/qmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAaajNSGozQBC1QMamaq7UARMahLU9qrtQApam7qYTTc0ASbqQtUWaM0AOY1Axp5NRmgCBqgYVZYVERQBWIpMVMVpNtADRUy0wCpAKAJVqZTUK1MKAJQaeKYKeKAHUtJRmgBc0u6oyaaWqGxk26jfVUvUZkrNzKSL/mUokrN82lEtR7QrlNUSVIJKyRLU6yVSqC5TVV6nVqy0kq0j1opE2NBWqQGqitU6tVpiLANLUYNPpiHUUCigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/1PqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigApKWkoAaajNSGmGgCBhVdhVphUDCgCo4qs1XGFVnFAFY0w1KwqI0ANooooAKbTqMUAREU0rVjbRtoAqlabtq5spNlAFXbTgtT7KXbQBGBUgFKFp4FAABTqTFLQAuaaTSE1EzVLYxWaoWemM9VnesJysWkStJULSVXaSoWeuKpVsbRiWjJR5lUS9IHrndc05DTWSrCSVkK9WEkrSFYlwNmOSrkb1jRv0q/G9dlOdzGSNdGq0jVmRtV6Nq6oszZdU1IKgU1MK0JH0tIKWgAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//V+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikoASmGn0w0ARsKhYVOahNAFZxVZxVtqrvQBVYVCRVhqhNAERpMU6lAoAAKeBQBUqigBoWnbalC1IFoArbKQpVvbTStAFQrSbasEUwigCHFLinGm0AJTSaUmo2NADWNQO1PY1Vc1EmUiN2qq709zVR2rirM1ihGaoGekZqhJrya8zqhEeXpQ1QZoBrgdXU3US0rVYRqoqasIa3pVCJRNKNulaETdKyozWhEeletQkcs0a0TdK0IjWXEelaMRr0YM52X0NWFqslTrWyJJRTqaKcKYgooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//1vqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAptLTTQAGmGlJqMmgAJqFjTmNQs1ADWNV2NSMagY0ARNUJqRjURoASgCinAUAPUVOoqNRVhRQA9VqQLQoqQCgCPFMIqcio2oArsKiNTNUDUARmmGnMajJoAQmo2NKTUbGgCNzVRzVlqrPWcikVHqo9XHFVXFcVZG0Co1Rmp2FRkV49eJ1QZFQKdtpQK8+UHc3TFWrCVGq1Oi1vRiRJlmMVow9qpRr0rQiXpXsUEcs2X4u1aUVUIh0rRiFenTOaRbTtVhagSrC1siSQU4U0U4UxBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/1/qmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACg0UUANppqSigCA5qI59KuUUAZzbvQ1Cwb0Na9FAGEyv/AHT+VQssn90/lXR0UAcwUk/un8qZ5cn90/lXVUUAcr5Un90/lUgik/un8q6aigDn1jf+6fyqwqN6GtiigDNCt6GnhT6VfooAzyG9KpSXVsjbHlQN6FgDXDeK/FVw1w2l6YxVVO13Xqx9BWXZ+CNZvYvtMrLEW5Acksfr6UAemAiQZj+Yeo5qNkf+6fyryuSLX/CV0shJVSeCDlG9jXrmhazDrVitzGMOOHX0agCi0cn90/lURjl/un8q62igDjzFL/cb8jTDFL/cb8jXZ0UAcOYZv7jfkahaCY/wN+RrvqKTQ7nnTW8//PNvyNQNazn/AJZt/wB8mvTKKylRUilOx5a1pcf883/75NRm0uf+eb/98mvVqK5p4CMupoqzXQ8n+x3P/PJ/++TSizuf+eb/APfJr1eisXlcf5ivrL7Hli2lx/zzf/vk1OlrP/zzb/vk16ZRVxy2K6ieIb6Hn8dtNx8jfkavRwSjHyt+RrsqK6IYZR6mbqXOcjicY+U/lV6NGHY1q0VuoWIbKiKamAqWirEIKWiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD//0PqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKr3bFLaV1OCEYj8qsUyWMSxtGejAj86APGfBVpFfa281z8xiBcA/3iete0AV4VDLc+FNeYupKqxBHTch9K9ds9f0m8hE0dwgBGSGIBH1BoATxBZw3mkXEUwBAQsD6Ec1578PJXF7cQg/IUBx7+ta/ivxXZ/Y30/T5BJJIMMy9FHfmm+ANLkggk1GUY835Uz6DvQB6PRRRQAUVw/ijxLPp8q6bpq77qQdcZ256cetYTyeO7SD7bI25QNxTgkD3FAHqtFc/4d1yPW7LzsbZEO2RfQ+3tXQUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB//9H6pooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoopCcUALRmvMdU8S6vqGotpnh9T8hwXA5OOvJ6Cq7at4u8PusuqL50DEAk4P5EcigD1aiqtldxX1rHdwnKSKGFWqAMTWtBstahEdwCrr9116ivFtS0O4stUbS7c+e4G4beDjrzX0E7BFLNwAMmvNfDKjVPEd7qz8qhKr+PH8qAPOLRBHMtzcRF4I3Ak9Poa+h7Ce1ubSOazI8oqNuOgHpXm2n2tvB4gv9BugDFdAlR79Rj3qKwv7jwbqjabfEvayHcpHOAeh/xoA9apCQBk1xd/450i2TFqWuH7BRgfmawGm8VeKf3cafZLU9ScjI/maAIX1CztvG73M7Boz8obqFJFel3d/ZWto1zPInlhc9Rz9K5OLwFpQtfKmZ3lP/LTOCD7DpVVPh7b7x513I8Y/h4oAZ4ER5J769RdsMjfKO3XNekVUsrK30+2W1tV2onQVboAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/0vqmiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACo5lLxOq9SpA/KpKKAPMPBNzb2l5d6fdAJOXJBbgnB6V0XjG+tLfRpYJiGeUbUXvn1/Cn614T0/WJftJZoZu7p3+org9f8LSaJCmoxzNcKrjcHHT0oAuaQvjSx06MWMStCRuVWwWwfrV7+2/G8X+ssQ3/AAH/AANd7pl5Ff2EN1D911BwOx9KvHAGT2oA8g1XxZ4hFuba6thbeaCu4qQSO+M1Doa+LrK2KaZb4jkO7cyrz7881o3MjeKvE6W8XNraHJPY4PP5mvU1AAAHAHAoA8L12x8Q20y6rqnyuxADqehHTp0rp7XwP9vhS7vr15GkUEEe/uc12+vaeup6XNakZYrlf94dK5/wPqBuNOaxmP722Yrg9dtAHHW0L+ENXxqcCzQvwsmM4HqPf1FewWlzbXcCz2rh0YcEU28sba/ga2u0Do3Y/wBK83n0nWvCczXmksZ7XOWjPJA9x/UUAep0Vymj+LtL1MCN28ib+45wCfY9DXVZ4yKABmVAWYgAckmuI1Px1ptk5itVNw6nBIOF/PvXM+M/EclxO2lWbYiTiQj+I+n0FcXZ2E9437vhR1Y9Kxr4inQg6lWVki4QlN8sUd8fiNLni0XH+8a2NN8d6dduI7xWt2PGTyv59q89/wCEff8A57D8v/r1mXmnz2Zy/KHow6f/AFq4cNnWDxE/Z0qibNqmEqwXNKJ9HRyJIgeNgynkEcg0+vGfB/iOSxuV065bMEpwuf4GP9K9mr1DmCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/T+qaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqGpWa39jNaOMiRCPx7VfooA8+8B3Trb3GmS/et3OPoateMdc+w239n2hzc3A24HVVP8AU1yt7qL+GfE15LEm4SrkL0GW6H8DWx4X0W4vrk+INYyzucxq388fyoA6Hwroq6Rp48wfv5fmkPp7V1FFFACEV5hqSnw14oj1BOLe64f056/416hWB4j0ldY017cf6xfmjP8AtD/GgDdRldQ6nIIyDSkAjmuI8Gaw1zbNpd0cXFt8uD1Kj/CusvL+0sI/NvJViX1Y/wAhQBz+reENL1PMqL9nmP8AHH3PuOhrlZrfxf4chcQyfabYKefvbR64PIrUvfHcTP8AZ9Gt2uZDwCQcfkOTWVPbeN9Ygke5b7PFtJKZC5HpgZP50Aec7mlk3McljyfrXfwRJFCkSjgAVwA+Rxu42nn8K9DjZXjVlOQQK+F40lJRpJbantZQleT6ju1RyxpLGY3GQw6VJSMQoLHgDk18JTnJTTjue1JJppnnsimGYgcFG4/CvovSpjcadbzMclo1JP4V873UpnuHkPc9q+g9DiMGk2sTdRGtfuFBydOLnvZHx07cztsatFFFakBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABR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"

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let dreamsbank_actions_appupdate_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdate.action */ "./build.definitions/DreamsBank/Actions/AppUpdate.action")
let dreamsbank_actions_appupdatefailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdateFailureMessage.action */ "./build.definitions/DreamsBank/Actions/AppUpdateFailureMessage.action")
let dreamsbank_actions_appupdateprogressbanner_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdateProgressBanner.action */ "./build.definitions/DreamsBank/Actions/AppUpdateProgressBanner.action")
let dreamsbank_actions_appupdatesuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/AppUpdateSuccessMessage.action */ "./build.definitions/DreamsBank/Actions/AppUpdateSuccessMessage.action")
let dreamsbank_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./DreamsBank/Actions/CloseModalPage_Cancel.action */ "./build.definitions/DreamsBank/Actions/CloseModalPage_Cancel.action")
let dreamsbank_actions_closemodalpage_complete_action = __webpack_require__(/*! ./DreamsBank/Actions/CloseModalPage_Complete.action */ "./build.definitions/DreamsBank/Actions/CloseModalPage_Complete.action")
let dreamsbank_actions_closepage_action = __webpack_require__(/*! ./DreamsBank/Actions/ClosePage.action */ "./build.definitions/DreamsBank/Actions/ClosePage.action")
let dreamsbank_actions_createentityfailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/CreateEntityFailureMessage.action */ "./build.definitions/DreamsBank/Actions/CreateEntityFailureMessage.action")
let dreamsbank_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/DreamsBank/Actions/CreateEntitySuccessMessage.action")
let dreamsbank_actions_deleteconfirmation_action = __webpack_require__(/*! ./DreamsBank/Actions/DeleteConfirmation.action */ "./build.definitions/DreamsBank/Actions/DeleteConfirmation.action")
let dreamsbank_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/DreamsBank/Actions/DeleteEntityFailureMessage.action")
let dreamsbank_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/DreamsBank/Actions/DeleteEntitySuccessMessage.action")
let dreamsbank_actions_knowledgepeople_aportantes_aportantes_createentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_CreateEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_CreateEntity.action")
let dreamsbank_actions_knowledgepeople_aportantes_aportantes_deleteentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_DeleteEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_DeleteEntity.action")
let dreamsbank_actions_knowledgepeople_aportantes_aportantes_updateentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_UpdateEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/Aportantes_UpdateEntity.action")
let dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Create.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Create.action")
let dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_detail_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Detail.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Detail.action")
let dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_edit_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Edit.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_Edit.action")
let dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_List.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Aportantes/NavToAportantes_List.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_createentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_CreateEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_CreateEntity.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_deleteentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_DeleteEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_DeleteEntity.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_updateentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_UpdateEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/Beneficiarios_UpdateEntity.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Create.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Create.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_detail_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Detail.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Detail.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_edit_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Edit.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_Edit.action")
let dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_List.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Beneficiarios/NavToBeneficiarios_List.action")
let dreamsbank_actions_knowledgepeople_create_transaccion_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Create_Transaccion.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Create_Transaccion.action")
let dreamsbank_actions_knowledgepeople_navto_iniciar_transaccion_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/NavTo_Iniciar_Transaccion.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/NavTo_Iniciar_Transaccion.action")
let dreamsbank_actions_knowledgepeople_navtokp_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/NavToKP.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/NavToKP.action")
let dreamsbank_actions_knowledgepeople_productos_navtoproductos_create_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Create.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Create.action")
let dreamsbank_actions_knowledgepeople_productos_navtoproductos_detail_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Detail.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Detail.action")
let dreamsbank_actions_knowledgepeople_productos_navtoproductos_edit_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Edit.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_Edit.action")
let dreamsbank_actions_knowledgepeople_productos_navtoproductos_list_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_List.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/NavToProductos_List.action")
let dreamsbank_actions_knowledgepeople_productos_productos_createentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/Productos_CreateEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_CreateEntity.action")
let dreamsbank_actions_knowledgepeople_productos_productos_deleteentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/Productos_DeleteEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_DeleteEntity.action")
let dreamsbank_actions_knowledgepeople_productos_productos_updateentity_action = __webpack_require__(/*! ./DreamsBank/Actions/KnowledgePeople/Productos/Productos_UpdateEntity.action */ "./build.definitions/DreamsBank/Actions/KnowledgePeople/Productos/Productos_UpdateEntity.action")
let dreamsbank_actions_logout_action = __webpack_require__(/*! ./DreamsBank/Actions/Logout.action */ "./build.definitions/DreamsBank/Actions/Logout.action")
let dreamsbank_actions_logoutmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/LogoutMessage.action */ "./build.definitions/DreamsBank/Actions/LogoutMessage.action")
let dreamsbank_actions_onwillupdate_action = __webpack_require__(/*! ./DreamsBank/Actions/OnWillUpdate.action */ "./build.definitions/DreamsBank/Actions/OnWillUpdate.action")
let dreamsbank_actions_service_initializeonline_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/InitializeOnline.action */ "./build.definitions/DreamsBank/Actions/Service/InitializeOnline.action")
let dreamsbank_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/DreamsBank/Actions/Service/InitializeOnlineFailureMessage.action")
let dreamsbank_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/DreamsBank/Actions/Service/InitializeOnlineSuccessMessage.action")
let dreamsbank_actions_service_uploadoff_action = __webpack_require__(/*! ./DreamsBank/Actions/Service/UploadOff.action */ "./build.definitions/DreamsBank/Actions/Service/UploadOff.action")
let dreamsbank_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./DreamsBank/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/DreamsBank/Actions/UpdateEntityFailureMessage.action")
let dreamsbank_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./DreamsBank/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/DreamsBank/Actions/UpdateEntitySuccessMessage.action")
let dreamsbank_globals_appdefinition_version_global = __webpack_require__(/*! ./DreamsBank/Globals/AppDefinition_Version.global */ "./build.definitions/DreamsBank/Globals/AppDefinition_Version.global")
let dreamsbank_i18n_i18n_properties = __webpack_require__(/*! ./DreamsBank/i18n/i18n.properties */ "./build.definitions/DreamsBank/i18n/i18n.properties")
let dreamsbank_images_dreamsbank_jpg = __webpack_require__(/*! ./DreamsBank/Images/dreamsbank.jpg */ "./build.definitions/DreamsBank/Images/dreamsbank.jpg")
let dreamsbank_images_kp_png = __webpack_require__(/*! ./DreamsBank/Images/KP.png */ "./build.definitions/DreamsBank/Images/KP.png")
let dreamsbank_jsconfig_json = __webpack_require__(/*! ./DreamsBank/jsconfig.json */ "./build.definitions/DreamsBank/jsconfig.json")
let dreamsbank_pages_inicio_page = __webpack_require__(/*! ./DreamsBank/Pages/Inicio.page */ "./build.definitions/DreamsBank/Pages/Inicio.page")
let dreamsbank_pages_knowledgepeople_aportantes_aportantes_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Create.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Create.page")
let dreamsbank_pages_knowledgepeople_aportantes_aportantes_detail_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Detail.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Detail.page")
let dreamsbank_pages_knowledgepeople_aportantes_aportantes_edit_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Edit.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_Edit.page")
let dreamsbank_pages_knowledgepeople_aportantes_aportantes_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_List.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Aportantes/Aportantes_List.page")
let dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Create.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Create.page")
let dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_detail_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Detail.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Detail.page")
let dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_edit_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Edit.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_Edit.page")
let dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_List.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Beneficiarios/Beneficiarios_List.page")
let dreamsbank_pages_knowledgepeople_iniciar_transaccion_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Iniciar_Transaccion.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Iniciar_Transaccion.page")
let dreamsbank_pages_knowledgepeople_kp_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/KP.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/KP.page")
let dreamsbank_pages_knowledgepeople_productos_productos_create_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Productos/Productos_Create.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Create.page")
let dreamsbank_pages_knowledgepeople_productos_productos_detail_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Productos/Productos_Detail.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Detail.page")
let dreamsbank_pages_knowledgepeople_productos_productos_edit_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Productos/Productos_Edit.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_Edit.page")
let dreamsbank_pages_knowledgepeople_productos_productos_list_page = __webpack_require__(/*! ./DreamsBank/Pages/KnowledgePeople/Productos/Productos_List.page */ "./build.definitions/DreamsBank/Pages/KnowledgePeople/Productos/Productos_List.page")
let dreamsbank_rules_aportantes_aportantes_deleteconfirmation_js = __webpack_require__(/*! ./DreamsBank/Rules/Aportantes/Aportantes_DeleteConfirmation.js */ "./build.definitions/DreamsBank/Rules/Aportantes/Aportantes_DeleteConfirmation.js")
let dreamsbank_rules_appupdatefailure_js = __webpack_require__(/*! ./DreamsBank/Rules/AppUpdateFailure.js */ "./build.definitions/DreamsBank/Rules/AppUpdateFailure.js")
let dreamsbank_rules_appupdatesuccess_js = __webpack_require__(/*! ./DreamsBank/Rules/AppUpdateSuccess.js */ "./build.definitions/DreamsBank/Rules/AppUpdateSuccess.js")
let dreamsbank_rules_beneficiarios_beneficiarios_deleteconfirmation_js = __webpack_require__(/*! ./DreamsBank/Rules/Beneficiarios/Beneficiarios_DeleteConfirmation.js */ "./build.definitions/DreamsBank/Rules/Beneficiarios/Beneficiarios_DeleteConfirmation.js")
let dreamsbank_rules_onwillupdate_js = __webpack_require__(/*! ./DreamsBank/Rules/OnWillUpdate.js */ "./build.definitions/DreamsBank/Rules/OnWillUpdate.js")
let dreamsbank_rules_productos_productos_deleteconfirmation_js = __webpack_require__(/*! ./DreamsBank/Rules/Productos/Productos_DeleteConfirmation.js */ "./build.definitions/DreamsBank/Rules/Productos/Productos_DeleteConfirmation.js")
let dreamsbank_rules_resetappsettingsandlogout_js = __webpack_require__(/*! ./DreamsBank/Rules/ResetAppSettingsAndLogout.js */ "./build.definitions/DreamsBank/Rules/ResetAppSettingsAndLogout.js")
let dreamsbank_services_dreamsbankkk_service = __webpack_require__(/*! ./DreamsBank/Services/dreamsbankkk.service */ "./build.definitions/DreamsBank/Services/dreamsbankkk.service")
let dreamsbank_styles_styles_css = __webpack_require__(/*! ./DreamsBank/Styles/Styles.css */ "./build.definitions/DreamsBank/Styles/Styles.css")
let dreamsbank_styles_styles_less = __webpack_require__(/*! ./DreamsBank/Styles/Styles.less */ "./build.definitions/DreamsBank/Styles/Styles.less")
let dreamsbank_styles_styles_light_css = __webpack_require__(/*! ./DreamsBank/Styles/Styles.light.css */ "./build.definitions/DreamsBank/Styles/Styles.light.css")
let dreamsbank_styles_styles_light_json = __webpack_require__(/*! ./DreamsBank/Styles/Styles.light.json */ "./build.definitions/DreamsBank/Styles/Styles.light.json")
let dreamsbank_styles_styles_light_nss = __webpack_require__(/*! ./DreamsBank/Styles/Styles.light.nss */ "./build.definitions/DreamsBank/Styles/Styles.light.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	dreamsbank_actions_appupdate_action : dreamsbank_actions_appupdate_action,
	dreamsbank_actions_appupdatefailuremessage_action : dreamsbank_actions_appupdatefailuremessage_action,
	dreamsbank_actions_appupdateprogressbanner_action : dreamsbank_actions_appupdateprogressbanner_action,
	dreamsbank_actions_appupdatesuccessmessage_action : dreamsbank_actions_appupdatesuccessmessage_action,
	dreamsbank_actions_closemodalpage_cancel_action : dreamsbank_actions_closemodalpage_cancel_action,
	dreamsbank_actions_closemodalpage_complete_action : dreamsbank_actions_closemodalpage_complete_action,
	dreamsbank_actions_closepage_action : dreamsbank_actions_closepage_action,
	dreamsbank_actions_createentityfailuremessage_action : dreamsbank_actions_createentityfailuremessage_action,
	dreamsbank_actions_createentitysuccessmessage_action : dreamsbank_actions_createentitysuccessmessage_action,
	dreamsbank_actions_deleteconfirmation_action : dreamsbank_actions_deleteconfirmation_action,
	dreamsbank_actions_deleteentityfailuremessage_action : dreamsbank_actions_deleteentityfailuremessage_action,
	dreamsbank_actions_deleteentitysuccessmessage_action : dreamsbank_actions_deleteentitysuccessmessage_action,
	dreamsbank_actions_knowledgepeople_aportantes_aportantes_createentity_action : dreamsbank_actions_knowledgepeople_aportantes_aportantes_createentity_action,
	dreamsbank_actions_knowledgepeople_aportantes_aportantes_deleteentity_action : dreamsbank_actions_knowledgepeople_aportantes_aportantes_deleteentity_action,
	dreamsbank_actions_knowledgepeople_aportantes_aportantes_updateentity_action : dreamsbank_actions_knowledgepeople_aportantes_aportantes_updateentity_action,
	dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_create_action : dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_create_action,
	dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_detail_action : dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_detail_action,
	dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_edit_action : dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_edit_action,
	dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_list_action : dreamsbank_actions_knowledgepeople_aportantes_navtoaportantes_list_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_createentity_action : dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_createentity_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_deleteentity_action : dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_deleteentity_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_updateentity_action : dreamsbank_actions_knowledgepeople_beneficiarios_beneficiarios_updateentity_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_create_action : dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_create_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_detail_action : dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_detail_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_edit_action : dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_edit_action,
	dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_list_action : dreamsbank_actions_knowledgepeople_beneficiarios_navtobeneficiarios_list_action,
	dreamsbank_actions_knowledgepeople_create_transaccion_action : dreamsbank_actions_knowledgepeople_create_transaccion_action,
	dreamsbank_actions_knowledgepeople_navto_iniciar_transaccion_action : dreamsbank_actions_knowledgepeople_navto_iniciar_transaccion_action,
	dreamsbank_actions_knowledgepeople_navtokp_action : dreamsbank_actions_knowledgepeople_navtokp_action,
	dreamsbank_actions_knowledgepeople_productos_navtoproductos_create_action : dreamsbank_actions_knowledgepeople_productos_navtoproductos_create_action,
	dreamsbank_actions_knowledgepeople_productos_navtoproductos_detail_action : dreamsbank_actions_knowledgepeople_productos_navtoproductos_detail_action,
	dreamsbank_actions_knowledgepeople_productos_navtoproductos_edit_action : dreamsbank_actions_knowledgepeople_productos_navtoproductos_edit_action,
	dreamsbank_actions_knowledgepeople_productos_navtoproductos_list_action : dreamsbank_actions_knowledgepeople_productos_navtoproductos_list_action,
	dreamsbank_actions_knowledgepeople_productos_productos_createentity_action : dreamsbank_actions_knowledgepeople_productos_productos_createentity_action,
	dreamsbank_actions_knowledgepeople_productos_productos_deleteentity_action : dreamsbank_actions_knowledgepeople_productos_productos_deleteentity_action,
	dreamsbank_actions_knowledgepeople_productos_productos_updateentity_action : dreamsbank_actions_knowledgepeople_productos_productos_updateentity_action,
	dreamsbank_actions_logout_action : dreamsbank_actions_logout_action,
	dreamsbank_actions_logoutmessage_action : dreamsbank_actions_logoutmessage_action,
	dreamsbank_actions_onwillupdate_action : dreamsbank_actions_onwillupdate_action,
	dreamsbank_actions_service_initializeonline_action : dreamsbank_actions_service_initializeonline_action,
	dreamsbank_actions_service_initializeonlinefailuremessage_action : dreamsbank_actions_service_initializeonlinefailuremessage_action,
	dreamsbank_actions_service_initializeonlinesuccessmessage_action : dreamsbank_actions_service_initializeonlinesuccessmessage_action,
	dreamsbank_actions_service_uploadoff_action : dreamsbank_actions_service_uploadoff_action,
	dreamsbank_actions_updateentityfailuremessage_action : dreamsbank_actions_updateentityfailuremessage_action,
	dreamsbank_actions_updateentitysuccessmessage_action : dreamsbank_actions_updateentitysuccessmessage_action,
	dreamsbank_globals_appdefinition_version_global : dreamsbank_globals_appdefinition_version_global,
	dreamsbank_i18n_i18n_properties : dreamsbank_i18n_i18n_properties,
	dreamsbank_images_dreamsbank_jpg : dreamsbank_images_dreamsbank_jpg,
	dreamsbank_images_kp_png : dreamsbank_images_kp_png,
	dreamsbank_jsconfig_json : dreamsbank_jsconfig_json,
	dreamsbank_pages_inicio_page : dreamsbank_pages_inicio_page,
	dreamsbank_pages_knowledgepeople_aportantes_aportantes_create_page : dreamsbank_pages_knowledgepeople_aportantes_aportantes_create_page,
	dreamsbank_pages_knowledgepeople_aportantes_aportantes_detail_page : dreamsbank_pages_knowledgepeople_aportantes_aportantes_detail_page,
	dreamsbank_pages_knowledgepeople_aportantes_aportantes_edit_page : dreamsbank_pages_knowledgepeople_aportantes_aportantes_edit_page,
	dreamsbank_pages_knowledgepeople_aportantes_aportantes_list_page : dreamsbank_pages_knowledgepeople_aportantes_aportantes_list_page,
	dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_create_page : dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_create_page,
	dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_detail_page : dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_detail_page,
	dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_edit_page : dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_edit_page,
	dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_list_page : dreamsbank_pages_knowledgepeople_beneficiarios_beneficiarios_list_page,
	dreamsbank_pages_knowledgepeople_iniciar_transaccion_page : dreamsbank_pages_knowledgepeople_iniciar_transaccion_page,
	dreamsbank_pages_knowledgepeople_kp_page : dreamsbank_pages_knowledgepeople_kp_page,
	dreamsbank_pages_knowledgepeople_productos_productos_create_page : dreamsbank_pages_knowledgepeople_productos_productos_create_page,
	dreamsbank_pages_knowledgepeople_productos_productos_detail_page : dreamsbank_pages_knowledgepeople_productos_productos_detail_page,
	dreamsbank_pages_knowledgepeople_productos_productos_edit_page : dreamsbank_pages_knowledgepeople_productos_productos_edit_page,
	dreamsbank_pages_knowledgepeople_productos_productos_list_page : dreamsbank_pages_knowledgepeople_productos_productos_list_page,
	dreamsbank_rules_aportantes_aportantes_deleteconfirmation_js : dreamsbank_rules_aportantes_aportantes_deleteconfirmation_js,
	dreamsbank_rules_appupdatefailure_js : dreamsbank_rules_appupdatefailure_js,
	dreamsbank_rules_appupdatesuccess_js : dreamsbank_rules_appupdatesuccess_js,
	dreamsbank_rules_beneficiarios_beneficiarios_deleteconfirmation_js : dreamsbank_rules_beneficiarios_beneficiarios_deleteconfirmation_js,
	dreamsbank_rules_onwillupdate_js : dreamsbank_rules_onwillupdate_js,
	dreamsbank_rules_productos_productos_deleteconfirmation_js : dreamsbank_rules_productos_productos_deleteconfirmation_js,
	dreamsbank_rules_resetappsettingsandlogout_js : dreamsbank_rules_resetappsettingsandlogout_js,
	dreamsbank_services_dreamsbankkk_service : dreamsbank_services_dreamsbankkk_service,
	dreamsbank_styles_styles_css : dreamsbank_styles_styles_css,
	dreamsbank_styles_styles_less : dreamsbank_styles_styles_less,
	dreamsbank_styles_styles_light_css : dreamsbank_styles_styles_light_css,
	dreamsbank_styles_styles_light_json : dreamsbank_styles_styles_light_json,
	dreamsbank_styles_styles_light_nss : dreamsbank_styles_styles_light_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/DreamsBank/Styles/Styles.light.json":
/*!***************************************************************!*\
  !*** ./build.definitions/DreamsBank/Styles/Styles.light.json ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"HeadlineText":{"font-color":"#5dc484","font-weight":"lighter","font-style":"normal","font-size":"small"}}');

/***/ }),

/***/ "./build.definitions/DreamsBank/jsconfig.json":
/*!****************************************************!*\
  !*** ./build.definitions/DreamsBank/jsconfig.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});