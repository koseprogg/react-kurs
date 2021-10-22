import React from "react";

import { useThemeUI } from "theme-ui";

const load = require.context("./", true, /App\..*js$/);

export default function Loader({ version = "1.1", theme }) {
  const App = load("./App." + version + ".js").default;

  const { themeUi } = useThemeUI();

  const t = theme || themeUi;

  if (typeof window == `undefined`) {
    return null;
  }

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          t && t.styles.CodeSurfer.code.backgroundColor,
      }}
    >
      <App />
    </div>
  );
}
