import React from "react";
import "./AnimatedButton.scss";

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  type = "button"  // 預設是 button，如果沒有傳會避免預設 submit 問題
}) {
  return (
    <button
      className={`elevator-btn ${className}`}
      onClick={onClick}
      type={type}
    >
      <span className="static-text">{children}</span>
      <span className="text-wrapper">
        <span className="text-inner">
          <span className="text">{children}</span>
          <span className="text">{children}</span>
        </span>
      </span>
    </button>
  );
}
