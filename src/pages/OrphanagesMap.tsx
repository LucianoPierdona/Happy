import React from "react";
import "../styles/pages/orphanagesmap.css";
import mapMarkerImg from "../assets/Local.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const OrphanagesMap = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h1>Escolha um orfanato no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita :{")"}</p>
        </header>
        <footer>
          <strong>Antônio Prado</strong>
          <strong>Rio Grande Do Sul</strong>
        </footer>
      </aside>
      <Map
        center={[-28.8571443, -51.2827246]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
};

export default OrphanagesMap;
