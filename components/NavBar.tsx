import React, { FC, useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import { ThinPlusIcon } from '@/theme/icons';
import {
  getBorderRadius,
  getColor,
  getPadding,
  getShellHeights,
} from '@/theme';
import { LabeledInput } from '@/components/Input';

const Container = styled.div`
  z-index: 2;
  max-height: ${getShellHeights('navBar')};
  background-color: ${getColor('white')};
  padding: ${getPadding('small')};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const IconButton = styled.button`
  display: flex;
  justify-content: center;
  width: 70px;
  height: 40px;
  border: 3px solid white;
  border-radius: 20px;
  background-color: ${getColor('slightlyRed')};
  fill: ${getColor('white')};
  outline: none;
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
`;

const NavBar: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} />
      <Container>
        <IconButton onClick={() => setModalOpen((prevState) => !prevState)}>
          <IconWrapper>
            <ThinPlusIcon />
          </IconWrapper>
        </IconButton>
      </Container>
    </>
  );
};

const AddModal = styled(motion.div)`
  z-index: 3;
  width: 100%;
  height: ${getShellHeights('contentContainer')};
  border-top-left-radius: ${getBorderRadius};
  border-top-right-radius: ${getBorderRadius};
  background-color: ${getColor('backgroundGrey')};
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: ${getPadding('large')};
`;

const isBrowser = typeof document !== 'undefined';

const Modal = ({ isOpen }) => (
  <AnimatePresence>
    {isOpen && isBrowser ? (
      <ClientOnlyPortal selector="#modal">
        <AddModal
          initial={{ y: 146 }}
          animate={{ y: 'calc(-100vh + 146px)' }}
          exit={{ y: 146 }}
          transition={{ type: 'tween', duration: 0.2, ease: 'linear' }}
        >
          <InputsContainer>
            <LabeledInput
              label="Produkt"
              inputProps={{
                type: 'text',
                placeholder: 'wpisz nazwę produktu',
                isFocused: isOpen,
              }}
            />
          </InputsContainer>
        </AddModal>
      </ClientOnlyPortal>
    ) : null}
  </AnimatePresence>
);

export default NavBar;

function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? ReactDOM.createPortal(children, ref.current) : null;
}
