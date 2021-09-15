import React, { memo } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Container, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import PrivateRoute from 'components/PrivateRoute';
import { Switch } from 'react-router-dom';
import Categories from 'containers/Categories/Loadable';
import UserProfilePage from 'containers/UserProfilePage/Loadable';
import FinancialRecords from 'containers/FinancialRecords/Loadable';
import MainMenu from 'components/MainMenu';
import saga from './saga';
import reducer from './reducer';
import { ROOT_ROUTES } from '../../constants';

const HomePageContainer = styled.div`
  margin: 50px 0;
  a {
    font-size: 20px;
  }
`;

const HomePage = () => {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });

  return (
    <HomePageContainer>
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={5} largeScreen={4} widescreen={3}>
              <MainMenu />
            </Grid.Column>
            <Grid.Column computer={11} largeScreen={12} widescreen={13}>
              <Switch>
                <PrivateRoute
                  path={ROOT_ROUTES.CATEGORIES_ROUTE}
                  component={Categories}
                />
                <PrivateRoute
                  path={ROOT_ROUTES.FINANCIAL_RECORDS_ROUTE}
                  component={FinancialRecords}
                />
                <PrivateRoute
                  path={`${ROOT_ROUTES.USER_SETTINGS_ROUTE}/:pageName?`}
                  component={UserProfilePage}
                />
              </Switch>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </HomePageContainer>
  );
};

const mapStateToProps = createStructuredSelector({});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
