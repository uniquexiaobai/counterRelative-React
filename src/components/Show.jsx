import React from 'react';

var Show = React.createClass ({
  // 格式化输出expression
  getExpression: function() {
    return this.props.expression.join('的');
  },

  // 格式化输出result
  getResult: function() {
    var lastIndex = this.props.result.length - 1;
    if(lastIndex === 0) {
      return " ";
    }

    if(typeof(this.props.result[lastIndex]) === 'object') {
      return "比 " + this.props.result[lastIndex]['中'] + " 年长/年轻？";
    }

    if(this.props.result[lastIndex] === "未知") {
      return "这个太难了！";
    }

    return this.props.result[lastIndex];
  },

  render: function() {
    console.log('Show', this.getExpression(), this.getResult());
    return (
      <div className="Show">
        <div className="title">亲戚称呼计算器</div>
        <div className="expression">
          {this.getExpression()}
        </div>
        <div className="result">
          {this.getResult()}
        </div>
      </div>
    );
  }
});

export default Show;