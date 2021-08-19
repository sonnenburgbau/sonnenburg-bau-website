import React from 'react';

const Tiles = ({ data }) => (
  <div className="columns is-multiline">
      {data.map((e, i) =>
        <div className="column is-flex is-half" key={i}>
          <div className="box" style={{position: 'relative', backgroundColor: '#023B5B', cursor: 'default !important'}}>
          {e.title ? <h2 className="title is-3 is-size-4-mobile has-text-centered has-text-info">{e.title}</h2> : ''}
          {e.subtitle ? <h4 className="title is-size-5 has-text-centered has-text-weight-bold has-text-info">{e.subtitle}</h4> : ''}
          {e.text ? <p className="is-size-5 has-text-white">{e.text}</p> : ''}
          {e.case ? <p className="is-size-5 has-text-white has-text-weight-semibold mt-4">{e.case}</p> : ''}
          </div>
        </div>
      )}
  </div>
);

export default Tiles;
