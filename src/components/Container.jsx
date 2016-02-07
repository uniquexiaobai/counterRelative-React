import React from 'react';

import Show from './Show.jsx';
import Ctrl from './Ctrl.jsx';

var Container = React.createClass ({
  getInitialState: function() {
    return (
      {
        expression: ['我'],
        result: ['我'],
        selected: [false]
      }
    );
  },

  // 定义计算称谓的函数
  count: function(whose, who) {
    for (var i in this.props.data) {
      if(whose === this.props.data[i].name) {
        return this.props.data[i][who];
      }
    }
  },

  // 定义普通按钮触摸事件
  handleTouchStart: function(argu, e) {
    e.target.className="touch_start btn";

    if(this.state.expression.length > 10) {
      return ;
    }

    var newExpression = this.state.expression;
    var lastIndex = newExpression.length - 1;
    var result = this.count(this.state.result[lastIndex], argu);
    newExpression.push(argu);

    var newResult = this.state.result;
    newResult.push(result);

    var newSelected = this.state.selected;
    if(typeof(newResult[newResult.length - 1]) === 'object') {
      newSelected.push(true);
    }
    else {
      newSelected.push(false);
    }

    this.setState({
      expression: newExpression,
      result: newResult,
      selected: newSelected
    });
  },
  handleTouchEnd: function(e) {
    e.target.className="touch_end btn";

    if(this.state.expression.length > 10) {
      alert('亲，你太调皮了！');
      return ;
    }
  },

  // 判断年长/年轻触摸事件
  handleTouchStartIsOld: function(index, event) {
    if(index === "长") {
      event.target.className = "touch_start_old btn";
    }
    if(index === '轻') {
      event.target.className = "touch_start_young btn";
    }

    var newResult = this.state.result;
    var lastIndex = newResult.length - 1;
    newResult[lastIndex] = this.state.result[lastIndex][index];

    var newSelected = this.state.selected;
    newSelected[newSelected.length - 1] = false;

    this.setState({
      expression: this.state.expression,
      result: newResult,
      selected: newSelected
    });
  },
  handleTouchEndIsOld: function(index, event) {
    if(index === "长") {
      event.target.className = "touch_end_old btn";
      return ;
    }
    if(index === '轻') {
      event.target.className = "touch_end_young btn";
      return ;
    }
  },

  // 定义后退触摸事件
  handleTouchStartBack: function(event) {
    event.target.className  = "touch_start_back btn";

    var newExpression = this.state.expression;
    var newResult = this.state.result;
    var newSelected = this.state.selected;

    if(newExpression.length - 1) {
      newExpression.pop();
      newResult.pop();
      newSelected.pop();
    }

    this.setState({
      expression: newExpression,
      result: newResult,
      selected: newSelected
    });
  },
  handleTouchEndBack: function(event) {
    event.target.className = "touch_end btn";
  },

  // 定义清空触摸事件
  handleTouchStartClear: function(event) {
    event.target.className = "touch_start_clear btn"

    this.setState({
      expression: ['我'],
      result: ['我'],
      selected: [false]
    });
  },
  handleTouchEndClear: function(event) {
    event.target.className = "btn_end btn";
  },

  render: function() {
    return (
      <div className="Container">
        <Show expression={this.state.expression} result={this.state.result}></Show>
        <Ctrl
          selected={this.state.selected}
          handleTouchStart={this.handleTouchStart}
          handleTouchEnd={this.handleTouchEnd}
          handleTouchStartBack={this.handleTouchStartBack}
          handleTouchEndBack={this.handleTouchEndBack}
          handleTouchStartClear={this.handleTouchStartClear}
          handleTouchEndClear={this.handleTouchEndClear}
          handleTouchStartIsOld={this.handleTouchStartIsOld}
          handleTouchEndIsOld={this.handleTouchEndIsOld}
        >
        </Ctrl>
      </div>
    );
  }
});

export default Container;