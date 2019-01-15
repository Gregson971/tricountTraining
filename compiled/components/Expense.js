"use strict";

function Expense(_ref) {
  var amount = _ref.amount,
      description = _ref.description,
      userName = _ref.userName,
      userColor = _ref.userColor;
  return React.createElement("div", {
    className: "expense"
  }, React.createElement("div", {
    className: "expense--info"
  }, React.createElement("p", {
    className: "expense--description"
  }, description), React.createElement("div", {
    className: "expense--user"
  }, React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: userColor
    }
  }), React.createElement("p", {
    className: "expense--user-text"
  }, userName))), React.createElement("div", {
    className: "amount expense--amount "
  }, React.createElement("span", {
    className: "amount--big-num"
  }, Math.floor(amount)), React.createElement("span", {
    className: "amount--small-num"
  }, ",", Math.floor((amount - Math.floor(amount)) * 100)), React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC")), React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete"));
}