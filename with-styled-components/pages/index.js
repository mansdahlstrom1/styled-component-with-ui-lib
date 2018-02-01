import React from 'react'
import styled from 'styled-components'
import { Wrapper } from 'example-ui-lib';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <div>
    <Wrapper>
      <Title>My page</Title>
    </Wrapper>
  </div>
);
