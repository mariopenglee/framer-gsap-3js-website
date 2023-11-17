
import './TickerItem.css'; // Assuming you have separate CSS for the cursor


export default function TickerItem({ title, description, imageURL, onClick }) {
    return (
      <div className="ticker-item" style={{ backgroundImage: `url(${imageURL})` }} onClick={onClick}>

            <div className="ticker-item__title">{title}</div>
            <div className="ticker-item__content">{description}</div>
        </div>
    );
    }

