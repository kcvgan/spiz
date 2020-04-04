import React from 'react';
import styled from 'styled-components';

import Input, { InputProps } from '@/components/Input/Input';
import { getColor, getPadding, getFontWeight } from '@/theme';

const InputLabelWrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.div`
  padding: ${getPadding('small')} ${getPadding('medium')};
  color: ${getColor('neonBlue')};
  font-weight: ${getFontWeight('bold')};
`;

interface Props extends InputProps {
  label: string;
}

const LabeledInput = ({ className, inputProps, label }: Props) => (
  <InputLabelWrapper>
    <Label>{label}</Label>
    <Input {...{ className, inputProps }} />
  </InputLabelWrapper>
);

export default LabeledInput;
