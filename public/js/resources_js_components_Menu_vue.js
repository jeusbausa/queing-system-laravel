"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Menu_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Menu.vue?vue&type=script&lang=js":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Menu.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaceOrder_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceOrder.vue */ "./resources/js/components/PlaceOrder.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    PlaceOrder: _PlaceOrder_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.loadMenus();
  },
  data: function data() {
    return {
      placeOrder: false,
      orderDetails: [],
      checkoutOrders: [],
      menus: []
    };
  },
  methods: {
    selectOrder: function selectOrder(productInfo) {
      this.orderDetails.push(productInfo);
      this.checkoutOrders.push({
        itemId: productInfo.id,
        description: productInfo.description
      });
    },
    loadMenus: function loadMenus() {
      var _this = this;

      this.axios.get("api/menus").then(function (_ref) {
        var data = _ref.data;
        _this.menus = data.message;
      })["catch"](function (err) {
        return console.error(err.message);
      });
    },
    clearCheckOutHistory: function clearCheckOutHistory() {
      this.orderDetails = [];
      this.checkoutOrders = [];
    }
  },
  computed: {
    customerHasItems: function customerHasItems() {
      return !!this.checkoutOrders.length;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PlaceOrder.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PlaceOrder.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["checkoutOrders", "orderDetails"],
  methods: {
    placeOrder: function placeOrder() {
      var _this = this;

      this.axios.post("http://localhost:8000/api/place-order", this.checkoutOrders).then(function (res) {
        _this.$emit("cancel-order");

        _this.$emit("clear-cart");
      })["catch"](function (err) {
        return console.error(err.message);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "flex flex-col h-screen"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "flex justify-center items-center w-full h-16 bg-green-700"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-bold text-lg text-white"
}, "Dev's Milk Tea Shop")], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex-1 bg-gray-300 p-2"
};
var _hoisted_4 = {
  "class": "flex space-x-3 h-full"
};
var _hoisted_5 = {
  "class": "flex p-3 w-full bg-white"
};
var _hoisted_6 = {
  "class": "grid grid-cols-4 gap-10"
};
var _hoisted_7 = ["onClick"];
var _hoisted_8 = {
  "class": "flex flex-col justify-center items-center w-full h-full"
};
var _hoisted_9 = ["src"];
var _hoisted_10 = {
  "class": "font-bold text-sm"
};
var _hoisted_11 = {
  "class": "font-semibold text-xs"
};
var _hoisted_12 = {
  "class": "flex-none w-60 bg-white"
};
var _hoisted_13 = {
  "class": "flex flex-col py-5 justify-between w-full h-full"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "p-2 font-sans text-center font-bold text-md mb-6 text-green-900"
}, " ORDER DETAILS ", -1
/* HOISTED */
);

var _hoisted_15 = {
  "class": "flex flex-col px-2"
};
var _hoisted_16 = {
  "class": "px-2"
};
var _hoisted_17 = {
  "class": "flex justify-between mb-6"
};

var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-bold items-end"
}, "Total :", -1
/* HOISTED */
);

var _hoisted_19 = {
  "class": "font-bold text-green-900"
};
var _hoisted_20 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_PlaceOrder = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("PlaceOrder");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.menus, function (menu, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "w-40 h-40 shadow-lg bg-white rounded-lg cursor-pointer",
      key: i,
      onClick: function onClick($event) {
        return $options.selectOrder(menu);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      src: menu.image,
      alt: "",
      srcset: "",
      "class": "w-24 h-24 object-contain"
    }, null, 8
    /* PROPS */
    , _hoisted_9), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(menu.description), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, " ₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(menu.price), 1
    /* TEXT */
    )])], 8
    /* PROPS */
    , _hoisted_7);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" checkout "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.orderDetails, function (orderDetail, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      "class": "flex justify-between font-semibold text-sm",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(orderDetail.description), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, "₱ " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(orderDetail.price), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, " ₱" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.orderDetails.reduce(function (a, b) {
    return a + b.price;
  }, 0)), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    disabled: !$options.customerHasItems,
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $data.placeOrder = true;
    }),
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["bg-green-800 p-2 w-full text-white rounded-lg text-sm", {
      'bg-gray-500': !$options.customerHasItems,
      'cursor-not-allowed': !$options.customerHasItems
    }])
  }, " CHECKOUT ", 10
  /* CLASS, PROPS */
  , _hoisted_20)])])])])])]), $data.placeOrder ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_PlaceOrder, {
    key: 0,
    orderDetails: $data.orderDetails,
    checkoutOrders: $data.checkoutOrders,
    onCancelOrder: _cache[1] || (_cache[1] = function ($event) {
      return $data.placeOrder = false;
    }),
    onClearCart: $options.clearCheckOutHistory
  }, null, 8
  /* PROPS */
  , ["orderDetails", "checkoutOrders", "onClearCart"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PlaceOrder.vue?vue&type=template&id=3bc65bb2":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PlaceOrder.vue?vue&type=template&id=3bc65bb2 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "fixed inset-0 flex justify-center items-center h-screen w-full"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "fixed w-full h-full bg-green-900"
}, null, -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "flex flex-col w-96 h-5/6 z-10 bg-white rounded-xl shadow-xl p-3"
};

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "mb-4 text-lg font-bold"
}, "Review your order", -1
/* HOISTED */
);

var _hoisted_5 = {
  "class": "flex flex-col justify-between h-full w-full"
};
var _hoisted_6 = {
  "class": "flex flex-col"
};
var _hoisted_7 = {
  "class": "flex justify-between mb-6"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "font-bold items-end"
}, "Total :", -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "font-bold text-green-900"
};
var _hoisted_10 = {
  "class": "flex space-x-2 justify-between"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.orderDetails, function (order, i) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": "flex justify-between",
      key: i
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.description), 1
    /* TEXT */
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(order.price), 1
    /* TEXT */
    )]);
  }), 128
  /* KEYED_FRAGMENT */
  ))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, " ₱" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderDetails.reduce(function (a, b) {
    return a + b.price;
  }, 0)), 1
  /* TEXT */
  )]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "bg-gray-800 w-6/12 text-white py-2 px-4 rounded-lg text-sm font-semibold",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return _ctx.$emit('cancel-order');
    })
  }, " CANCEL "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return $options.placeOrder && $options.placeOrder.apply($options, arguments);
    }),
    "class": "bg-green-900 w-6/12 text-white py-2 px-4 rounded-lg text-sm font-semibold"
  }, " PLACE A ORDER ")])])])])]);
}

/***/ }),

/***/ "./resources/js/components/Menu.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Menu.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Menu_vue_vue_type_template_id_7fa2c4ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Menu.vue?vue&type=template&id=7fa2c4ca */ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca");
/* harmony import */ var _Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.vue?vue&type=script&lang=js */ "./resources/js/components/Menu.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Jeus_Documents_dev_blog_laravel_8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Jeus_Documents_dev_blog_laravel_8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Menu_vue_vue_type_template_id_7fa2c4ca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Menu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/PlaceOrder.vue":
/*!************************************************!*\
  !*** ./resources/js/components/PlaceOrder.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PlaceOrder_vue_vue_type_template_id_3bc65bb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlaceOrder.vue?vue&type=template&id=3bc65bb2 */ "./resources/js/components/PlaceOrder.vue?vue&type=template&id=3bc65bb2");
/* harmony import */ var _PlaceOrder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlaceOrder.vue?vue&type=script&lang=js */ "./resources/js/components/PlaceOrder.vue?vue&type=script&lang=js");
/* harmony import */ var C_Users_Jeus_Documents_dev_blog_laravel_8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,C_Users_Jeus_Documents_dev_blog_laravel_8_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_PlaceOrder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_PlaceOrder_vue_vue_type_template_id_3bc65bb2__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/PlaceOrder.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=script&lang=js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menu.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Menu.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/PlaceOrder.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/components/PlaceOrder.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlaceOrder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlaceOrder_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlaceOrder.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PlaceOrder.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca":
/*!************************************************************************!*\
  !*** ./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_template_id_7fa2c4ca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Menu_vue_vue_type_template_id_7fa2c4ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Menu.vue?vue&type=template&id=7fa2c4ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Menu.vue?vue&type=template&id=7fa2c4ca");


/***/ }),

/***/ "./resources/js/components/PlaceOrder.vue?vue&type=template&id=3bc65bb2":
/*!******************************************************************************!*\
  !*** ./resources/js/components/PlaceOrder.vue?vue&type=template&id=3bc65bb2 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlaceOrder_vue_vue_type_template_id_3bc65bb2__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_PlaceOrder_vue_vue_type_template_id_3bc65bb2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./PlaceOrder.vue?vue&type=template&id=3bc65bb2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/PlaceOrder.vue?vue&type=template&id=3bc65bb2");


/***/ })

}]);