import React, { useEffect, useRef } from 'react';
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
const isBrowser = typeof document !== 'undefined';

const Input = ({ className, inputProps }: InputProps) => {
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputProps && inputProps.isFocused && inputElement) {
      inputElement.current.focus();
    }
    if (isBrowser) {
      inputElement.current.onfocus = () => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      };
    }
  }, [inputProps]);

  return <StyledInput ref={inputElement} {...{ className }} {...inputProps} />;
};

export default Input;
