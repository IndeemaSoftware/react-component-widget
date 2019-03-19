import React from 'react';
import PropTypes from 'prop-types';

const WidgetMenu = function({ remove, settings }) {
  return (
    <div className="m-portlet__head-tools">
      <a onClick={settings} className="m-nav__item m-nav__link" role="button">
        <i className="m-nav__link-icon flaticon-settings" />
      </a>

      <a onClick={remove} className="m-nav__item m-nav__link" role="button">
        <i className="m-nav__link-icon flaticon-delete-1" />
      </a>
    </div>
  );
};

WidgetMenu.propTypes = {
  remove: PropTypes.func.isRequired,
  settings: PropTypes.func.isRequired
};

export default WidgetMenu;
