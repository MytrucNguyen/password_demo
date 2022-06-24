import * as React from "react";
import { PasswordInput } from "./components/PasswordInput";

export default function App() {
  const [shouldShowPassword, setShouldShowPassword] = React.useState(false);

  const onToggleVisible = () => {
    setShouldShowPassword(!shouldShowPassword);
  };

  return (
    <div
      style={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <h2>A fancy password input</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column"
          }}
        >
          <label htmlFor="password">Super secret password</label>
          <PasswordInput
            shouldShowPassword={shouldShowPassword}
            onToggleVisible={onToggleVisible}
          />
        </div>
      </form>
    </div>
  );
}
