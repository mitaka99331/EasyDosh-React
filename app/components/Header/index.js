import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Menu, Image, Icon } from 'semantic-ui-react';
import { makeSelectUserId } from 'containers/App/selectors';
import { logout } from 'shared/logout/actions';
import { ROOT, ROOT_ROUTES } from 'constants/index';
import messages from './messages';

const { USER_SETTINGS_ROUTE } = ROOT_ROUTES;

const HeaderWrapper = styled.div`
  .menuContainer {
    display: flex !important;
  }
  .logoImage {
    padding: 0px !important;
  }
  .links {
    display: flex;
    margin-left: auto !important;
  }
  .links > * {
    height: 100%;
    padding-left: 10px !important;
    padding-right: 10px !important;
  }
  .websiteName {
    padding: 22px 0px !important;
    margin-right: auto !important;
  }
`;

const propTypes = {
  logoutUser: PropTypes.func,
  userId: PropTypes.number,
};

const Header = ({ logoutUser, userId }) => (
  <HeaderWrapper>
    <Menu size="massive" pointing secondary className="menuContainer">
      <Menu.Item className="logoImage">
        <Image width="64" height="64" size="tiny" />
      </Menu.Item>
      <Menu.Item link className="websiteName" href={ROOT}>
        <h1>
          <FormattedMessage {...messages.name} />
        </h1>
      </Menu.Item>
      {userId !== 0 && (
        <Menu.Menu className="links">
          <Menu.Item link href={USER_SETTINGS_ROUTE}>
            <Icon name="user" />
            <FormattedMessage {...messages.user} />
          </Menu.Item>
          <Menu.Item link onClick={() => logoutUser()}>
            <Icon name="sign-out" />
            <FormattedMessage {...messages.logout} />
          </Menu.Item>
        </Menu.Menu>
      )}
    </Menu>
  </HeaderWrapper>
);

Header.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  userId: makeSelectUserId(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    logoutUser: () => dispatch(logout()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Header);
