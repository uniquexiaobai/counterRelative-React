import React from 'react';

var Ctrl = React.createClass ({

  //deal with the warning: React component methods only be bound to the component instance
  handleTouchStart: function(arg, event) {
    this.props.handleTouchStart(arg, event);
  },
  handleTouchEnd: function(event) {
    this.props.handleTouchEnd(event);
  },
  handleTouchStartBack: function(event) {
    this.props.handleTouchStartBack(event);
  },
  handleTouchEndBack: function(event) {
    this.props.handleTouchEndBack(event);
  },
  handleTouchStartClear: function(event) {
    this.props.handleTouchStartClear(event);
  },
  handleTouchEndClear: function(event) {
    this.props.handleTouchEndClear(event);
  },
  handleTouchStartIsOld: function(arg, event) {
    this.props.handleTouchStartIsOld(arg, event);
  },
  handleTouchEndIsOld: function(arg, event) {
    this.props.handleTouchEndIsOld(arg, event);
  },


  // 格式化Selected
  getSelected: function() {
    var lastIndex = this.props.selected.length - 1;
    var bool = this.props.selected[lastIndex];

    if(bool) {
      return true;
    }

    return false;
  },

  render: function() {
    console.log('Ctrl', this.getSelected());

    var bool = this.getSelected();

    return (
      <div className="Ctrl">
        <div className="line">
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '爸爸')} onTouchEnd={this.handleTouchEnd}>父</div>
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '妈妈')} onTouchEnd={this.handleTouchEnd}>母</div>
          <div className="touch_end btn" style={{color: 'red'}} onTouchStart={this.handleTouchStartBack} onTouchEnd={this.handleTouchEndBack}>{"\u2190"}</div>
          <div className="touch_end btn" style={{color: 'red'}} onTouchStart={this.handleTouchStartClear} onTouchEnd={this.handleTouchEndClear}>C</div>
        </div>
        <div className="line">
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '哥哥')} onTouchEnd={this.handleTouchEnd}>兄</div>
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '姐姐')} onTouchEnd={this.handleTouchEnd}>姐</div>
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '弟弟')} onTouchEnd={this.handleTouchEnd}>弟</div>
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '妹妹')} onTouchEnd={this.handleTouchEnd}>妹</div>
        </div>
        <div className="line">
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '丈夫')} onTouchEnd={this.handleTouchEnd}>夫</div>
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '妻子')} onTouchEnd={this.handleTouchEnd}>妻</div>
          <div className="touch_end_old btn" onTouchStart={bool ? this.props.handleTouchStartIsOld.bind(this, '长') : null} onTouchEnd={bool ? this.props.handleTouchEndIsOld.bind(this, '长') : null}>长</div>
          <div className="btn_static btn">的</div>
        </div>
        <div className="line">
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '儿子')} onTouchEnd={this.handleTouchEnd}>儿</div>
          <div className="touch_end btn" onTouchStart={bool ? null : this.handleTouchStart.bind(this, '女儿')} onTouchEnd={this.handleTouchEnd}>女</div>
          <div className="touch_end_young btn" onTouchStart={bool ? this.props.handleTouchStartIsOld.bind(this, '轻') : null} onTouchEnd={bool ? this.props.handleTouchEndIsOld.bind(this, '轻') : null}>轻</div>
          <div className="btn_static btn">=</div>
        </div>
      </div>
    );
  }
});

export default Ctrl;