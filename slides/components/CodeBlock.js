import React from "react";
import Highlight, {
  defaultProps,
} from "prism-react-renderer";

export default ({ children, className }) => {
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={className
        .split(" ")[0]
        .replace(/language-/, "")}
    >
      {({
        className,
        style,
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "20px",
            fontSize: "0.6em",
          }}
        >
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <span
                  key={key}
                  {...getTokenProps({ token, key })}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
