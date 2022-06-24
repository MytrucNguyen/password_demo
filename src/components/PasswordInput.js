import * as React from "react";
import "../App.modules.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const PasswordInput = ({ shouldShowPassword, onToggleVisible }) => {
  const [hashPassword, setHashPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  React.useEffect(() => {
    if (!shouldShowPassword) {
      createHashPassword();
    }
  });

  const createHashPassword = () => {
    let hashing = "";
    for (let i = 0; i < password.length; i++) {
      hashing += "\u2022";
    }
    setHashPassword(hashing);
  };

  const onPasswordChange = (e) => {
    e.preventDefault();
    if (e.key === "Backspace") {
      setPassword(password.slice(0, password.length - 1));
    } else {
      setPassword(password + e.key);
    }
  };

  return (
    <div className="outerWrapper">
      <input
        name="password"
        value={shouldShowPassword ? password : hashPassword}
        onKeyDown={onPasswordChange}
        onChange={onToggleVisible}
      />
      <button onClick={onToggleVisible}>
        {!shouldShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
      </button>
    </div>
  );
};
