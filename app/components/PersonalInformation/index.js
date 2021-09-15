import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import {
  Container,
  Grid,
  Icon,
  Segment,
  Input,
  Button,
} from 'semantic-ui-react';
import messages from './messages';

// For later use
const PersonalInformationContainer = styled.div``;

const propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const PersonalInformation = ({ name, email }) => (
  <PersonalInformationContainer>
    <Segment>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <hr />
      <Container fluid>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Input iconPosition="left" defaultValue={name} size="huge" fluid>
                <Icon name="user" />
                <input />
              </Input>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input iconPosition="left" defaultValue={email} size="huge" fluid>
                <Icon name="mail" />
                <input />
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Input
                iconPosition="left"
                placeholder="Phone number"
                size="huge"
                fluid
              >
                <Icon name="phone" flipped="horizontally" />
                <input type="tel" />
              </Input>
            </Grid.Column>
            <Grid.Column width={8}>
              <Input
                iconPosition="left"
                placeholder="Birthday date"
                size="huge"
                fluid
              >
                <Icon name="birthday cake" />
                <input type="date" />
              </Input>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column stretched>
              <Button.Group widths="2">
                <Button size="big">Cancel</Button>
                <Button.Or />
                <Button size="big" positive>
                  Save
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </PersonalInformationContainer>
);

PersonalInformation.propTypes = propTypes;

export default memo(PersonalInformation);
