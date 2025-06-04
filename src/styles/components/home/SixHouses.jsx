import "./sixhouses.scss" ;
const SixHouses = () => {
    return (
        <div className="custom-component-container">
            <h2 className="component-title">{title}</h2>
            <div className="image-card">
                <img src={imageUrl} alt={altText} className="content-image" />
                {/* 如果需要，可以在這裡添加虛線和控制圖示的元素 */}
            </div>
        </div>
    );
};
export default SixHouses;