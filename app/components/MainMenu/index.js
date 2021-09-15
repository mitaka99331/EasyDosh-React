/**
 *
 * MainMenu is responsible for displaying navigation links for the loggeed in users.
 *
 */

import React, { memo } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link, useLocation } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { logout } from 'shared/logout/actions';
import { ROOT_ROUTES, USER_PROFILE_ROUTES } from 'constants/index';

import messages from './messages';

const MainMenuContainer = styled.div`
  .menuIcon {
    float: left !important;
    margin: 0 0.5em !important;
  }

  .ui.vertical.menu {
    width: 18rem;
  }
`;

const propTypes = {
  logoutUser: PropTypes.func,
};

const MainMenu = ({ logoutUser }) => {
  const { pathname } = useLocation();

  const userSettingsSelected = pathname.includes(
    ROOT_ROUTES.USER_SETTINGS_ROUTE,
  );

  return (
    <MainMenuContainer>
      <Menu vertical>
        <Menu.Item
          as={Link}
          to={ROOT_ROUTES.CATEGORIES_ROUTE}
          active={ROOT_ROUTES.CATEGORIES_ROUTE === pathname}
        >
          <Icon name="list" className="menuIcon" />
          <FormattedMessage {...messages.categories} />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to={ROOT_ROUTES.FINANCIAL_RECORDS_ROUTE}
          active={ROOT_ROUTES.FINANCIAL_RECORDS_ROUTE === pathname}
        >
          <Icon name="book" className="menuIcon" />
          <FormattedMessage {...messages.financialRecords} />
        </Menu.Item>
        <Menu.Item
          // TODO (Mihail): This prop causes dom validation errors and warns that you cannot nest anchor inside another anchor. Fix this in the future.
          as={Link}
          to={ROOT_ROUTES.USER_SETTINGS_ROUTE}
          active={userSettingsSelected}
        >
          <Icon name="long arrow alternate down" className="menuIcon" />
          <FormattedMessage {...messages.userProfile} />
          {userSettingsSelected && (
            <Menu.Menu>
              <Menu.Item as={Link} to={USER_PROFILE_ROUTES.PERSONAL_INFO_ROUTE}>
                <Icon name="user" className="menuIcon" />{' '}
                <FormattedMessage {...messages.personalInfo} />
              </Menu.Item>
              <Menu.Item as={Link} to={USER_PROFILE_ROUTES.SECURITY_ROUTE}>
                <Icon name="shield alternate" className="menuIcon" />{' '}
                <FormattedMessage {...messages.security} />
              </Menu.Item>
              <Menu.Item
                as={Link}
                to={USER_PROFILE_ROUTES.CHANGE_PASSWORD_ROUTE}
              >
                <Icon name="lock" className="menuIcon" />{' '}
                <FormattedMessage {...messages.changePassword} />
              </Menu.Item>
              <Menu.Item
                as={Link}
                to={USER_PROFILE_ROUTES.DELETE_ACCOUNT_ROUTE}
              >
                <Icon name="delete" className="menuIcon" />{' '}
                <FormattedMessage {...messages.deleteAccount} />
              </Menu.Item>
              <Menu.Item
                as={Link}
                to={USER_PROFILE_ROUTES.LOGOUT_ROUTE}
                onClick={() => logoutUser()}
              >
                <Icon name="sign-out" className="menuIcon" />{' '}
                <FormattedMessage {...messages.logout} />
              </Menu.Item>
            </Menu.Menu>
          )}
        </Menu.Item>
      </Menu>
    </MainMenuContainer>
  );
};

MainMenu.propTypes = propTypes;

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logoutUser: () => dispatch(logout()),
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MainMenu);
