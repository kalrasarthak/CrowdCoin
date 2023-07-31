"use strict";
exports.id = 184;
exports.ids = [184];
exports.modules = {

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(215);
;// CONCATENATED MODULE: ./components/Header.js




const Header = ()=>{
    const buttonStyles = {
        backgroundColor: "#3c339a",
        color: "white",
        borderRadius: "5px",
        marginRight: "1px"
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu, {
        style: {
            marginTop: "10px",
            borderRadius: "5px"
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                route: "/",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "item",
                    style: buttonStyles,
                    children: "CrowdCoin"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Menu.Menu, {
                position: "right",
                style: {
                    borderRadius: "5px"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            style: buttonStyles,
                            children: "Campaigns"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(routes.Link, {
                        route: "campaigns/new",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "item",
                            style: buttonStyles,
                            children: "+"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: ./components/Layout.js




const Layout = (props)=>{
    (0,external_react_.useEffect)(()=>{
        // Set the background color of the body element
        document.body.style.backgroundColor = "#cccee3";
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_semantic_ui_react_.Container, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            props.children
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ }),

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_0__);

let web3;
if (false) {} else {
    // We are on the server *OR* the user is not running metamask
    const provider = new (web3__WEBPACK_IMPORTED_MODULE_0___default().providers.HttpProvider)("https://goerli.infura.io/v3/2e503e8f69a849e1868e4cbc993fb5d0");
    web3 = new (web3__WEBPACK_IMPORTED_MODULE_0___default())(provider);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web3);


/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const routes = __webpack_require__(662)();
routes.add("/campaigns/new", "/campaigns/new").add("/campaigns/:address", "/campaigns/show").add("/campaigns/:address/requests", "/campaigns/requests/index").add("/campaigns/:address/requests/new", "/campaigns/requests/new");
module.exports = routes;


/***/ })

};
;