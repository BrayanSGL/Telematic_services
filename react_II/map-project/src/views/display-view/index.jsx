import Map from '../map';
import './DisplayView.css';

export const DisplayView = () => {
  return (
    <div className="display-view-container">
      <h1 className="display-view-title">Rutas del Usuario: []</h1>
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
};
