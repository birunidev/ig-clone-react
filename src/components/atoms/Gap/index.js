import React from 'react';
import styled from 'styled-components';

export default function Gap({ horizontal, vertical }) {
  return <StyledDiv horizontal={horizontal} vertical={vertical}></StyledDiv>;
}
const StyledDiv = styled.div`
  height: ${(props) => props.vertical || '0px'};
  width: ${(props) => props.horizontal || '0px'};
`;
