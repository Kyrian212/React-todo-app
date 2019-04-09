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
  }, "x")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, '.todo {background: #fff;box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);padding: 3px 10px; font-size: 12px;margin-bottom: 6px;  border-radius: 3px; display: flex; align-items: center;justify-content: space-between;}'));
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

  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("script", {
    jsx: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, '.todo-list { background: #e8e8e8; border-radius: 4px; padding: 5px; max-width: 400px;}');
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: handleSubmit,
    className: "jsx-2962462030",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    value: value,
    placeholder: "Add Todo...",
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    className: "jsx-2962462030" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "2962462030",
    __self: this
  }, ".input.jsx-2962462030{width:100%;box-sizing:border-box;border:0;border-radius:4px;box-shadow:none;padding:1rem;height:2.25em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS3lyaWFuXFx0b2RvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q2tCLEFBQ29CLFdBQXNCLHNCQUFVLFNBQW9CLGtCQUFpQixnQkFBZSxhQUFlLGNBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxLeXJpYW5cXHRvZG8tbmV4dFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZnVuY3Rpb24gVG9kbyh7IHRvZG8sIGluZGV4LCBjb21wbGV0ZVRvZG8sIHJlbW92ZVRvZG8gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cInRvZG9cIlxyXG4gICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogdG9kby5pc0NvbXBsZXRlZCA/IFwibGluZS10aHJvdWdoXCIgOiBcIlwiIH19XHJcbiAgICA+XHJcbiAgICAgIHt0b2RvLnRleHR9XHJcblxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29tcGxldGVUb2RvKGluZGV4KX0+Q29tcGxldGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRvZG8oaW5kZXgpfT54PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c2NyaXB0IGpzeD57Jy50b2RvIHtiYWNrZ3JvdW5kOiAjZmZmO2JveC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7cGFkZGluZzogM3B4IDEwcHg7IGZvbnQtc2l6ZTogMTJweDttYXJnaW4tYm90dG9tOiA2cHg7ICBib3JkZXItcmFkaXVzOiAzcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO30nfTwvc2NyaXB0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVG9kb0Zvcm0oeyBhZGRUb2RvIH0pIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdmFsdWUpIHJldHVybjtcclxuICAgIGFkZFRvZG8odmFsdWUpO1xyXG4gICAgc2V0VmFsdWUoXCJcIik7XHJcbiAgfTtcclxuICA8c2NyaXB0IGpzeD57Jy50b2RvLWxpc3QgeyBiYWNrZ3JvdW5kOiAjZThlOGU4OyBib3JkZXItcmFkaXVzOiA0cHg7IHBhZGRpbmc6IDVweDsgbWF4LXdpZHRoOiA0MDBweDt9J308L3NjcmlwdD5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBUb2RvLi4uXCJcclxuICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+eycgLmlucHV0IHt3aWR0aDogMTAwJTtib3gtc2l6aW5nOiBib3JkZXItYm94OyBib3JkZXI6IDA7ICBib3JkZXItcmFkaXVzOiA0cHg7IGJveC1zaGFkb3c6IG5vbmU7ICBwYWRkaW5nOiAxcmVtOyBoZWlnaHQ6IDIuMjVlbTt9J308L3N0eWxlPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCBbdG9kb3MsIHNldFRvZG9zXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJMZWFybiBhYm91dCBSZWFjdFwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6IFwiTWVldCBmcmllbmQgZm9yIGx1bmNoXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJCdWlsZCByZWFsbHkgY29vbCB0b2RvIGFwcFwiLFxyXG4gICAgICBpc0NvbXBsZXRlZDogZmFsc2VcclxuICAgIH1cclxuICBdKTtcclxuXHJcbiAgY29uc3QgYWRkVG9kbyA9IHRleHQgPT4ge1xyXG4gICAgY29uc3QgbmV3VG9kb3MgPSBbLi4udG9kb3MsIHsgdGV4dCB9XTtcclxuICAgIHNldFRvZG9zKG5ld1RvZG9zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb21wbGV0ZVRvZG8gPSBpbmRleCA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2Rvc107XHJcbiAgICBuZXdUb2Rvc1tpbmRleF0uaXNDb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVRvZG8gPSBpbmRleCA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2Rvc107XHJcbiAgICBuZXdUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG8tbGlzdFwiPlxyXG4gICAgICAgICAge3RvZG9zLm1hcCgodG9kbywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFRvZG9cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICB0b2RvPXt0b2RvfVxyXG4gICAgICAgICAgICAgIGNvbXBsZXRlVG9kbz17Y29tcGxldGVUb2RvfVxyXG4gICAgICAgICAgICAgIHJlbW92ZVRvZG89e3JlbW92ZVRvZG99XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxUb2RvRm9ybSBhZGRUb2RvPXthZGRUb2RvfSAvPlxyXG4gICAgICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57Jy5hcHAgeyBiYWNrZ3JvdW5kOiAjMjA5Y2VlOyBwYWRkaW5nOiAzMHB4OyBoZWlnaHQ6IDEwMHZoO319J31cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0= */\n/*@ sourceURL=C:\\Users\\Kyrian\\todo-next\\pages\\index.js */"));
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
    className: "jsx-3980197903" + " " + "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-3980197903" + " " + "todo-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
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
        lineNumber: 83
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TodoForm, {
    addTodo: addTodo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3980197903",
    __self: this
  }, ".app.jsx-3980197903{background:#209cee;padding:30px;height:100vh;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS3lyaWFuXFx0b2RvLW5leHRcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4RmtCLEFBQzBCLG1CQUFjLGFBQWMsYUFBQyIsImZpbGUiOiJDOlxcVXNlcnNcXEt5cmlhblxcdG9kby1uZXh0XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBUb2RvKHsgdG9kbywgaW5kZXgsIGNvbXBsZXRlVG9kbywgcmVtb3ZlVG9kbyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwidG9kb1wiXHJcbiAgICAgIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiB0b2RvLmlzQ29tcGxldGVkID8gXCJsaW5lLXRocm91Z2hcIiA6IFwiXCIgfX1cclxuICAgID5cclxuICAgICAge3RvZG8udGV4dH1cclxuXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb21wbGV0ZVRvZG8oaW5kZXgpfT5Db21wbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcmVtb3ZlVG9kbyhpbmRleCl9Png8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzY3JpcHQganN4PnsnLnRvZG8ge2JhY2tncm91bmQ6ICNmZmY7Ym94LXNoYWRvdzogMXB4IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtwYWRkaW5nOiAzcHggMTBweDsgZm9udC1zaXplOiAxMnB4O21hcmdpbi1ib3R0b206IDZweDsgIGJvcmRlci1yYWRpdXM6IDNweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fSd9PC9zY3JpcHQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUb2RvRm9ybSh7IGFkZFRvZG8gfSkge1xyXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuO1xyXG4gICAgYWRkVG9kbyh2YWx1ZSk7XHJcbiAgICBzZXRWYWx1ZShcIlwiKTtcclxuICB9O1xyXG4gIDxzY3JpcHQganN4PnsnLnRvZG8tbGlzdCB7IGJhY2tncm91bmQ6ICNlOGU4ZTg7IGJvcmRlci1yYWRpdXM6IDRweDsgcGFkZGluZzogNXB4OyBtYXgtd2lkdGg6IDQwMHB4O30nfTwvc2NyaXB0PlxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIFRvZG8uLi5cIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgLz5cclxuICAgICAgPHN0eWxlIGpzeD57JyAuaW5wdXQge3dpZHRoOiAxMDAlO2JveC1zaXppbmc6IGJvcmRlci1ib3g7IGJvcmRlcjogMDsgIGJvcmRlci1yYWRpdXM6IDRweDsgYm94LXNoYWRvdzogbm9uZTsgIHBhZGRpbmc6IDFyZW07IGhlaWdodDogMi4yNWVtO30nfTwvc3R5bGU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQXBwKCkge1xyXG4gIGNvbnN0IFt0b2Rvcywgc2V0VG9kb3NdID0gdXNlU3RhdGUoW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkxlYXJuIGFib3V0IFJlYWN0XCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogXCJNZWV0IGZyaWVuZCBmb3IgbHVuY2hcIixcclxuICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiBcIkJ1aWxkIHJlYWxseSBjb29sIHRvZG8gYXBwXCIsXHJcbiAgICAgIGlzQ29tcGxldGVkOiBmYWxzZVxyXG4gICAgfVxyXG4gIF0pO1xyXG5cclxuICBjb25zdCBhZGRUb2RvID0gdGV4dCA9PiB7XHJcbiAgICBjb25zdCBuZXdUb2RvcyA9IFsuLi50b2RvcywgeyB0ZXh0IH1dO1xyXG4gICAgc2V0VG9kb3MobmV3VG9kb3MpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBsZXRlVG9kbyA9IGluZGV4ID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9zXTtcclxuICAgIG5ld1RvZG9zW2luZGV4XS5pc0NvbXBsZXRlZCA9IHRydWU7XHJcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVG9kbyA9IGluZGV4ID0+IHtcclxuICAgIGNvbnN0IG5ld1RvZG9zID0gWy4uLnRvZG9zXTtcclxuICAgIG5ld1RvZG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRUb2RvcyhuZXdUb2Rvcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9kby1saXN0XCI+XHJcbiAgICAgICAgICB7dG9kb3MubWFwKCh0b2RvLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8VG9kb1xyXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgIHRvZG89e3RvZG99XHJcbiAgICAgICAgICAgICAgY29tcGxldGVUb2RvPXtjb21wbGV0ZVRvZG99XHJcbiAgICAgICAgICAgICAgcmVtb3ZlVG9kbz17cmVtb3ZlVG9kb31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPFRvZG9Gb3JtIGFkZFRvZG89e2FkZFRvZG99IC8+XHJcbiAgICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PnsnLmFwcCB7IGJhY2tncm91bmQ6ICMyMDljZWU7IHBhZGRpbmc6IDMwcHg7IGhlaWdodDogMTAwdmg7fX0nfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdfQ== */\n/*@ sourceURL=C:\\Users\\Kyrian\\todo-next\\pages\\index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.d3445dc9a032fc559e84.hot-update.js.map