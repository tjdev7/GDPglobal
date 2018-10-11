/* eslint-disable import/first */
import React from 'react';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 350, margin: 70 };

class Opt1 extends React.Component {
   render() {
      return (
              <div style={wrapperStyle}>
                <Slider min={0} max={100} defaultValue={50} handle={handle} tipFormatter={value => `${value}%`} />
              </div>
      );
   }
}

export default Opt1;