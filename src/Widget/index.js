import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WidgetMenu from './../WidgetMenu';

export class Widget extends React.Component {
  render() {
    const {
      name, edit, remove, settings, isPropertySidebar
    } = this.props;

    return (
      <Fragment>
        <div className={`m-portlet m-portlet--mobile m-portlet-widget ${isPropertySidebar && 'react-grid-item-highlight'}`}>
          <div className="m-portlet__head">
            <div className="m-portlet__head-caption">
              <div className="m-portlet__head-title">
                <h3 className="m-portlet__head-text">
                  {name}
                </h3>
              </div>
            </div>
            <WidgetMenu
              edit={edit}
              remove={remove}
              settings={settings}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

Widget.propTypes = {
  name: PropTypes.string,
  isPropertySidebar: PropTypes.bool,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  settings: PropTypes.func.isRequired
};

Widget.defaultProps = {
  name: 'Widget Name',
  isPropertySidebar: false
};

export default Widget;
