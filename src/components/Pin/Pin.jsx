import { Marker, Popup } from 'react-leaflet';
import './Pin.scss';
import { Link } from 'react-router-dom';

const Pin = ({ item }) => {
  return (
    <Marker position={[item?.latitude, item?.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item?.img} alt="image" />
          <div className="textContainer">
            <Link to={`${item?.id}`}>{item?.title}</Link>
            <span>{item?.bredroom} bedroom</span>
            <b>$ {item?.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;