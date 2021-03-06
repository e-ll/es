import React from "react";

const PositionLabel = (props) => {
  const {
    detectedEnvironment: {
      isMouseDetected = false,
      isTouchDetected = false,
    } = {},
    elementDimensions: { width = 0, height = 0 } = {},
    position: { x = 0, y = 0 } = {},
    isActive = false,
    isPositionOutside = false,
  } = props;

  return (
    <div
      className={props.className}
      style={{
        display: "inline-block",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        fontSize: "10px",
      }}
    >
      {`left%: ${Math.round((x / width) * 100 * 100) / 100}     `}
      {`top%: ${Math.round((y / height) * 100 * 100) / 100}     `}
      {`w: ${Math.round(width)}     `}
      {`h: ${Math.round(height)} `}
      {`x: ${x} `}
      {`y: ${y} `}
    </div>
  );
};

PositionLabel.defaultProps = {
  shouldShowIsActive: true,
};

export default PositionLabel;
