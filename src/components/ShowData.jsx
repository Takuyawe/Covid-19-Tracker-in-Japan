import React from "react";

const ShowData = ({ prefecture }) => {
  return prefecture.map((p, index) => (
    <div className="prefecture__container" key={index}>
      <h3>{p.provinceState}</h3>
      <div className="data__container">
        <div className="data__each">
          <p className="active">Active</p>
          <p className="dot">:</p>
          <p className="number">{p.active}</p>
        </div>
        <div className="data__each">
          <p className="confirmed">Confirmed</p>
          <p className="dot">:</p>
          <p className="number">{p.confirmed}</p>
        </div>
        <div className="data__each">
          <p className="recovered">Recovered</p>
          <p className="dot">:</p>
          <p className="number">{p.recovered}</p>
        </div>
        <div className="data__each">
          <p className="deaths">Deaths</p>
          <p className="dot">:</p>
          <p className="number">{p.deaths}</p>
        </div>
      </div>
    </div>
  ));
};

export default ShowData;
