import React from "react";

interface CusTextProps {
  size?: number;
  fontWeight?: number;
  bold?: boolean;
  red?: boolean;
  className?: string;
  children: any;
}

function CusText(props: CusTextProps) {
  const { size, fontWeight, bold, red, className } = props;

  return (
    <div
      style={{
        fontWeight: bold ? "bold" : fontWeight,
        color: red ? 'red' : '',
        fontSize: size ? size : 'unset'
      }}
      className={className}
    >
      {props.children}
    </div>
  );
}

export default CusText;
