import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Container, Grid, Segment, Button } from 'semantic-ui-react';
import messages from './messages';

const AccountSecurityContainer = styled.div`
  p {
    font-size: 20px;
  }
`;

const AccountSecurity = () => (
  <AccountSecurityContainer>
    <Segment>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <hr />
      <Container fluid>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <h2>
                <FormattedMessage {...messages.twoFactorAuthenticationHeader} />
              </h2>
              <p>
                <FormattedMessage
                  {...messages.twoFactorAuthenticationMessage}
                />
              </p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p>Status: Disabled</p>
              <Button size="big" positive>
                Enable two-factor authentication
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </AccountSecurityContainer>
);

// For later use
AccountSecurity.propTypes = {};

export default memo(AccountSecurity);
