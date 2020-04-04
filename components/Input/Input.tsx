import React from 'react';
import styled from 'styled-components';
import { getColor, getFontWeight, getPadding, getFontSize } from '@/theme';

const StyledInput = styled.input`
  height: 52px;
  border-radius: 30px;
  padding: ${getPadding('large')};
  background-color: ${getColor('white')};
  border: none;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  font-size: ${getFontSize('large')};
  font-weight: ${getFontWeight('thin')};
`;

export interface InputProps {
  className?: string;
  inputProps?: any;
}

const Input = ({ className, inputProps }: InputProps) => (
  <StyledInput {...{ className }} {...inputProps} autoFocus />
);

export default Input;
