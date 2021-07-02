import { CITIES } from '../../const';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Tabs({cityTab, onCityChange}) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          { CITIES.map((city) => (
            <li className="locations__item" key={city} onClick={onCityChange}>
              <NavLink className={`locations__item-link tabs__item ${ city === cityTab ? 'tabs__item--active' : ''}`} to={'#'}>
                <span>{city}</span>
              </NavLink>
            </li>
          )) }

          {/*<li className="locations__item">*/}
          {/*  <a href="/" className="locations__item-link tabs__item tabs__item--active">*/}
          {/*    <span>Amsterdam</span>*/}
          {/*  </a>*/}
          {/*</li>*/}
        </ul>
      </section>
    </div>
  );
}

Tabs.propTypes = {
  cityTab: PropTypes.string.isRequired,
  onCityChange: PropTypes.func.isRequired,
};

export default Tabs;
