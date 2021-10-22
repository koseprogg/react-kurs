import React from "react";

export default ({ children }) => (
  <div
    style={{
      width: "100vw",
      height: "100vw",
      backgroundColor: "tomato",
      padding: "4rem",
    }}
  >
    {children}
  </div>
);

export const Splits = ({ splits, ...props }) => {
  const children = React.Children.toArray(props.children);
  const sum = splits.reduce((a, v) => a + v, 0);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        textAlign: "center",
        ...props.style,
      }}
    >
      {children.map((child, i) => (
        <div
          key={child.key}
          style={{
            width: `${(splits[i] / sum) * 100}%`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};
