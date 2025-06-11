// src/components/FullScreenGrid/FullScreenGrid.jsx
import React, { useState, useEffect, useRef, useMemo } from 'react';
import HoverInfoBox from './sixhoose/HoverInfoBox';
import BorderBox from './sixhoose/BorderBox';
import './FullScreenGrid.scss';

const FullScreenGrid = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const gridContainerRef = useRef(null);
  const borderGridLayoutRef = useRef(null);

  // ⭐ 1. 將 contentForBoxes 的定義移到這裡
  const contentForBoxes = useMemo(() => [
    { index: 1, title: '2025年', description: '落成啟用，代表未來智慧住宅的全新里程碑' },
    { index: 6, title: '24層', description: '垂直空間，打造城市新天際線生活' },
    { index: 9, title: '80米', description: '建築總高，地標等級現代美學住宅' },
    { index: 14, title: '6種', description: '精選戶型，滿足多樣家庭需求與生活型態' },
    { index: 17, title: '100%', description: '全戶型整合智慧家居系統，從日常到安全全方位掌控' },
    { index: 22, title: '0步驟', description: '一鍵啟動智慧情境，真正做到「回家就好」的極簡生活' },
  ], []);

  const boxesData = useMemo(() => {
    const totalBoxes = 24;
    const initialData = Array(totalBoxes).fill(null).map((_, index) => ({
      id: `box-${index}`, title: '', description: '',
    }));
    // 使用上面定義的 contentForBoxes
    contentForBoxes.forEach(content => {
      if (initialData[content.index]) {
        initialData[content.index].title = content.title;
        initialData[content.index].description = content.description;
      }
    });
    return initialData;
  }, [contentForBoxes]); // ⭐ 將 contentForBoxes 加入依賴項

  // ⭐ 2. 修改 targetBorderIds 來使用 contentForBoxes
  // 這樣會自動包含所有在 contentForBoxes 中定義的 box ID
  const targetBorderIds = useMemo(() =>
    contentForBoxes.map(c => `box-${c.index}`),
  [contentForBoxes]); // ⭐ 將 contentForBoxes 加入依賴項

  useEffect(() => {
    const currentGridContainer = gridContainerRef.current;
    const currentBorderGridLayout = borderGridLayoutRef.current;

    if (currentBorderGridLayout) {
      currentBorderGridLayout.style.setProperty('--mask-radius', '0px');
    }

    const handleMouseMove = (event) => {
      if (currentGridContainer && currentBorderGridLayout) {
        const rect = currentGridContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
        currentBorderGridLayout.style.setProperty('--mask-x', `${x}px`);
        currentBorderGridLayout.style.setProperty('--mask-y', `${y}px`);
      }
    };
    const handleMouseEnter = (event) => {
      if (currentGridContainer && currentBorderGridLayout) {
        const rect = currentGridContainer.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setMousePosition({ x, y });
        currentBorderGridLayout.style.setProperty('--mask-x', `${x}px`);
        currentBorderGridLayout.style.setProperty('--mask-y', `${y}px`);
        currentBorderGridLayout.style.setProperty('--mask-radius', '100px');
      }
    };
    const handleMouseLeave = () => {
      setMousePosition({ x: -1000, y: -1000 });
      if (currentBorderGridLayout) {
        currentBorderGridLayout.style.setProperty('--mask-radius', '0px');
      }
    };

    if (currentGridContainer) {
      currentGridContainer.addEventListener('mousemove', handleMouseMove);
      currentGridContainer.addEventListener('mouseenter', handleMouseEnter);
      currentGridContainer.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (currentGridContainer) {
        currentGridContainer.removeEventListener('mousemove', handleMouseMove);
        currentGridContainer.removeEventListener('mouseenter', handleMouseEnter);
        currentGridContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []); // 依賴項為空，因為 effect 內部的 refs 和 setMousePosition 不會改變

  return (
    <div className="full-screen-grid-container" ref={gridContainerRef}>
      <div
        className="mouse-spotlight-visual-glow"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
      />
      <div className="grid-layout text-grid">
        {boxesData.map((box) => (
          <HoverInfoBox
            key={`text-${box.id}`}
            id={box.id}
            title={box.title}
            description={box.description}
          />
        ))}
      </div>
      <div className="grid-layout border-grid" ref={borderGridLayoutRef}>
        {boxesData.map((box) => (
          targetBorderIds.includes(box.id) ? (
            <BorderBox key={`border-${box.id}`} />
          ) : (
            <div key={`empty-${box.id}`} className="empty-grid-cell"></div>
          )
        ))}
      </div>
    </div>
  );
};

export default FullScreenGrid;