import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Redirect, useParams } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PersonalInformation from 'components/PersonalInformation';
import ChangePassword from 'components/ChangePassword';
import DeleteAccount from 'components/DeleteAccount';
import AccountSecurity from 'components/AccountSecurity';
import makeSelectUserProfilePage from './selectors';
import { makeSelectUserInfo } from '../App/selectors';
import reducer from './reducer';
import saga from './saga';
import { changePasswordAction } from './actions';
import { USER_PROFILE_PAGES } from '../../constants';

const {
  PERSONAL_INFORMATION,
  ACCOUNT_SECURITY,
  CHANGE_PASSWORD,
  DELETE_ACCOUNT,
} = USER_PROFILE_PAGES;

const UserProfilePageContainer = styled.div`
  hr {
    border-color: ghostwhite;
    margin-bottom: 50px;
  }
  a {
    font-size: 20px;
    color: black !important;
  }
`;

const propTypes = {
  userInfo: PropTypes.object,
  changePassword: PropTypes.func,
};

const UserProfilePage = ({ userInfo: { name, email }, changePassword }) => {
  useInjectReducer({ key: 'userProfilePage', reducer });
  useInjectSaga({ key: 'userProfilePage', saga });

  const { pageName } = useParams();

  const pageSwitch = () => {
    let pageToRender;
    switch (pageName) {
      case PERSONAL_INFORMATION:
      case undefined:
        pageToRender = <PersonalInformation name={name} email={email} />;
        break;
      case ACCOUNT_SECURITY:
        pageToRender = <AccountSecurity />;
        break;
      case CHANGE_PASSWORD:
        pageToRender = (
          <ChangePassword onSubmit={values => changePassword(values)} />
        );
        break;
      case DELETE_ACCOUNT:
        pageToRender = <DeleteAccount />;
        break;
      default:
        pageToRender = <Redirect to="" />;
        break;
    }

    return pageToRender;
  };

  const pageToRender = pageSwitch();

  return (
    <UserProfilePageContainer>
      <Container fluid>{pageToRender}</Container>
    </UserProfilePageContainer>
  );
};

UserProfilePage.propTypes = propTypes;

const mapStateToProps = createStructuredSelector({
  userProfilePage: makeSelectUserProfilePage(),
  userInfo: makeSelectUserInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changePassword: values => dispatch(changePasswordAction(values)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(UserProfilePage);
