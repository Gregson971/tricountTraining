"use strict";

// index.js
var selectValue = ["Etienne", "Farid", "Superman"];
var expenseList = [{
  id: 0,
  amount: 20.75599,
  description: "First Expense",
  userName: "Etienne",
  userColor: "hsl(270, 70%, 47%)"
}, {
  id: 1,
  amount: 79.11,
  description: "Second Expense",
  userName: "Superman",
  userColor: "hsl(202, 70%, 47%)"
}, {
  id: 2,
  amount: 10.13,
  description: "Third Expense",
  userName: "Etienne",
  userColor: "hsl(270, 70%, 47%)"
}, {
  id: 3,
  amount: 68.88,
  description: "Fourth Expense",
  userName: "Superman",
  userColor: "hsl(202, 70%, 47%)"
}, {
  id: 4,
  amount: 95.18,
  description: "Fifth Expense",
  userName: "Etienne",
  userColor: "hsl(202, 70%, 47%)"
}];
function Expense(_ref) {
  var amount = _ref.amount,
    description = _ref.description,
    userName = _ref.userName,
    userColor = _ref.userColor;
  return /*#__PURE__*/React.createElement("div", {
    className: "expense"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expense--info"
  }, /*#__PURE__*/React.createElement("p", {
    className: "expense--description"
  }, description), /*#__PURE__*/React.createElement("div", {
    className: "expense--user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "expense--user-color",
    style: {
      background: userColor
    }
  }), /*#__PURE__*/React.createElement("p", {
    className: "expense--user-text"
  }, userName))), /*#__PURE__*/React.createElement(Amount, {
    amount: amount
  }), /*#__PURE__*/React.createElement("button", {
    className: "button button--flat expense--delete button--danger",
    type: "button"
  }, "Delete"));
}
function Amount(_ref2) {
  var amount = _ref2.amount;
  var integerNumber = Math.floor(amount);
  var floatNumber = Math.floor((amount - integerNumber) * 100);
  return /*#__PURE__*/React.createElement("div", {
    className: "amount expense--amount "
  }, /*#__PURE__*/React.createElement("span", {
    className: "amount--big-num"
  }, integerNumber), /*#__PURE__*/React.createElement("span", {
    className: "amount--small-num"
  }, ",", floatNumber), /*#__PURE__*/React.createElement("span", {
    className: "amount--currency"
  }, "\u20AC"));
}
function Card(_ref3) {
  var title = _ref3.title,
    children = _ref3.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "card--title"
  }, title), children);
}
function Input(_ref4) {
  var type = _ref4.type,
    name = _ref4.name,
    placeholder = _ref4.placeholder;
  return /*#__PURE__*/React.createElement("div", {
    className: "input"
  }, /*#__PURE__*/React.createElement("input", {
    type: type,
    name: name,
    className: "input--input",
    placeholder: placeholder
  }));
}
function Select(_ref5) {
  var label = _ref5.label,
    userId = _ref5.userId;
  return /*#__PURE__*/React.createElement("div", {
    className: "select"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: userId,
    className: "select--label"
  }, label), /*#__PURE__*/React.createElement("select", {
    className: "select--select",
    name: userId
  }, /*#__PURE__*/React.createElement("option", {
    value: "none"
  }, "Select an user"), selectValue.map(function (value, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: index,
      value: "user".concat(index)
    }, value);
  })));
}
function Button(_ref6) {
  var type = _ref6.type,
    label = _ref6.label;
  return /*#__PURE__*/React.createElement("div", {
    className: "button-container",
    style: {
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "button",
    type: type
  }, label));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "panels"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel"
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Expenses"
  }, /*#__PURE__*/React.createElement("div", {
    className: "list"
  }, expenseList.map(function (_ref7) {
    var id = _ref7.id,
      amount = _ref7.amount,
      description = _ref7.description,
      userName = _ref7.userName,
      userColor = _ref7.userColor;
    return /*#__PURE__*/React.createElement(Expense, {
      key: id,
      amount: amount,
      description: description,
      userName: userName,
      userColor: userColor
    });
  }))), /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(Card, {
    title: "New Expense"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Input, {
    type: "text",
    name: "description",
    placeholder: "Description"
  }), /*#__PURE__*/React.createElement(Input, {
    type: "text",
    name: "amount",
    placeholder: "Amount"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "User",
    userId: "userId"
  }))), /*#__PURE__*/React.createElement(Button, {
    type: "button",
    label: "Add Expense"
  }))));
}
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));