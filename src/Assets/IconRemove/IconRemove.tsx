import React from "react";

interface IIconRemove {
  fill: string;
  scale?: string;
}

const IconRemove: React.FC<IIconRemove> = ({ fill, scale }) => (
  <svg viewBox="0 0 30 30" width={scale} xmlns="http://www.w3.org/2000/svg">
    <g data-name="Layer 17" id="Layer_17">
      <path
        fill={fill}
        d="M24,31H8a3,3,0,0,1-3-3V9A1,1,0,0,1,7,9V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V9a1,1,0,0,1,2,0V28A3,3,0,0,1,24,31Z"
      />
      <path fill={fill} d="M28,7H4A1,1,0,0,1,4,5H28a1,1,0,0,1,0,2Z" />
      <path
        fill={fill}
        d="M20,7a1,1,0,0,1-1-1V3H13V6a1,1,0,0,1-2,0V2a1,1,0,0,1,1-1h8a1,1,0,0,1,1,1V6A1,1,0,0,1,20,7Z"
      />
      <path
        fill={fill}
        d="M16,26a1,1,0,0,1-1-1V11a1,1,0,0,1,2,0V25A1,1,0,0,1,16,26Z"
      />
      <path
        fill={fill}
        d="M21,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,21,24Z"
      />
      <path
        fill={fill}
        d="M11,24a1,1,0,0,1-1-1V13a1,1,0,0,1,2,0V23A1,1,0,0,1,11,24Z"
      />
    </g>
  </svg>
);

export default IconRemove;
