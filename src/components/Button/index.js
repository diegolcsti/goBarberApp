import React from 'react';
import { ActivityIndicator } from 'react-native';
import ProTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: ProTypes.string.isRequired,
  loading: ProTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
