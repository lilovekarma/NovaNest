// src/components/AnimatedButton/AnimatedButton.jsx
import React from "react";
import "./AnimatedButton.scss";

export default function AnimatedButton({ children, onClick, className = "" }) {
  return (
    <button className={`elevator-btn ${className}`} onClick={onClick}>
      {/* 1. 隱形占位文字，讓按鈕寬度固定 */}
      <span className="static-text">{children}</span>

      {/* 2. 可視文字區塊 */}
      <span className="text-wrapper">
        <span className="text-inner">
          {/* 第一行 */}
          <span className="text">{children}</span>
          {/* 第二行 (hover 時才露出) */}
          <span className="text">{children}</span>
        </span>
      </span>
    </button>
  );
}
