// src/components/HoverInfoBox/HoverInfoBox.jsx
import React from 'react';
import './HoverInfoBox.scss';

const HoverInfoBox = ({ id, title, description, customClass }) => {
  const boxClasses = `hover-info-box ${customClass || ''}`;
  return (
    <div className={boxClasses} data-id={id}> {/* data-id 保留，可能用於其他邏輯或 key */}
      {title && <p className="hover-info-box__title">{title}</p>}
      {description && <p className="hover-info-box__description">{description}</p>}
    </div>
  );
};

export default HoverInfoBox;