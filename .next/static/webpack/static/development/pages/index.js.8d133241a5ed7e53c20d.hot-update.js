webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Users\\Kyrian\\todo-next\\pages\\index.js";



function Todo(_ref) {
  var todo = _ref.todo,
      index = _ref.index,
      completeTodo = _ref.completeTodo,
      removeTodo = _ref.removeTodo;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "todo",
    style: {
      textDecoration: todo.isCompleted ? "line-through" : ""
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, todo.text, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      return completeTodo(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Complete"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      return removeTodo(index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "x")));
}

function TodoForm(_ref2) {
  var addTodo = _ref2.addTodo;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    className: "input",
    value: value,
    placeholder: "Add Todo...",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
}

function App() {
  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    text: "Learn about React",
    isCompleted: false
  }, {
    text: "Meet friend for lunch",
    isCompleted: false
  }, {
    text: "Build really cool todo app",
    isCompleted: false
  }]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      todos = _useState4[0],
      setTodos = _useState4[1];

  var addTodo = function addTodo(text) {
    var newTodos = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos), [{
      text: text
    }]);
    setTodos(newTodos);
  };

  var completeTodo = function completeTodo(index) {
    var newTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos);

    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  var removeTodo = function removeTodo(index) {
    var newTodos = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos);

    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1947599276" + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-1947599276" + " " + "todo-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, todos.map(function (todo, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Todo, {
      key: index,
      index: index,
      todo: todo,
      completeTodo: completeTodo,
      removeTodo: removeTodo,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TodoForm, {
    addTodo: addTodo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1947599276",
    __self: this
  }, "#nav.jsx-1947599276{background-color:#209cee;color:white;padding:30px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS3lyaWFuXFx0b2RvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRmtCLEFBQ2dDLHlCQUFhLFlBQWEsYUFBa0Isa0JBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxLeXJpYW5cXHRvZG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gVG9kbyh7IHRvZG8sIGluZGV4LCBjb21wbGV0ZVRvZG8sIHJlbW92ZVRvZG8gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRvZG9cIlxyXG4gICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiIH19XHJcbiAgICA+XHJcbiAgICAgIHt0b2RvLnRleHR9XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29tcGxldGVUb2RvKGluZGV4KX0+Q29tcGxldGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRvZG8oaW5kZXgpfT54PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVG9kb0Zvcm0oeyBhZGRUb2RvIH0pIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuICAgIGFkZFRvZG8odmFsdWUpO1xyXG4gICAgc2V0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvLi4uXCJcclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkxlYXJuIGFib3V0IFJlYWN0XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJNZWV0IGZyaWVuZCBmb3IgbHVuY2hcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkJ1aWxkIHJlYWxseSBjb29sIHRvZG8gYXBwXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4gICAgfVxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2RvcywgeyB0ZXh0IH1dO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRlVG9kbyA9IGluZGV4ID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9zXTtcclxuICAgIG5ld1RvZG9zW2luZGV4XS5pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IGluZGV4ID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9zXTtcclxuICAgIG5ld1RvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XHJcbiAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUb2RvXHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgdG9kbz17dG9kb31cclxuICAgICAgICAgICAgY29tcGxldGVUb2RvPXtjb21wbGV0ZVRvZG99XHJcbiAgICAgICAgICAgIHJlbW92ZVRvZG89e3JlbW92ZVRvZG99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxUb2RvRm9ybSBhZGRUb2RvPXthZGRUb2RvfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+eycjbmF2IHsgYmFja2dyb3VuZC1jb2xvcjogIzIwOWNlZTsgY29sb3I6IHdoaXRlO3BhZGRpbmc6IDMwcHg7dGV4dC1hbGlnbjogY2VudGVyO30nfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Kyrian\\todo-next\\pages\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.8d133241a5ed7e53c20d.hot-update.js.map