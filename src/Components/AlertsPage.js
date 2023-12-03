import { useState } from "react";
import "./Alerts.css";
export const AleartsPage = ({ AlertMsg, background }) => {
  const [visible, setVisible] = useState(true);
  const removeAlertHandler = () => {
    setVisible((pre) => !pre);
  };
  return (
    <div className="main-wrapper" onClick={removeAlertHandler}>
      {visible && (
        <div className="danger-wrapper" style={background}>
          <p className="danger-alerts">{AlertMsg}</p>
          <button className="close-btn" style={background}>
            X
          </button>
        </div>
      )}
    </div>
  );
};
