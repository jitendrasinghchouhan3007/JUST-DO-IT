import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <p>
        <span id="datetime">{time}</span>
      </p>
    </div>
  );
}

export default Clock;
