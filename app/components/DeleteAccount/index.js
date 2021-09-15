import React, { memo } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Container, Grid, Segment, Button } from 'semantic-ui-react';
import messages from './messages';

const DeleteAccountContainer = styled.div`
  p {
    font-size: 20px;
  }
`;

const DeleteAccount = () => (
  <DeleteAccountContainer>
    <Segment>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <hr />
      <Container fluid>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={8}>
              <p>
                <FormattedMessage {...messages.message} />
              </p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Button size="huge" negative>
              DELETE
            </Button>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </DeleteAccountContainer>
);

// For later use
DeleteAccount.propTypes = {};

export default memo(DeleteAccount);
