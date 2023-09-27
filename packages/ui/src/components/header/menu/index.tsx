import React, { useEffect, useState } from "react";
import { HeaderMenuStyled } from "./styled";
import { HeaderMenuToggleButton } from "./toggle-button";
import { Portal } from "../../portal";
import { HeaderMenuProvider } from "./context";
import { useTheme } from "../../../theme";
import { AnimatePresence } from "framer-motion";

export interface HeaderMenuProps extends React.PropsWithChildren {}

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ children }) => {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo({
        top: 0
      });
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  return <HeaderMenuProvider 
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    isInMenu
  >
    <HeaderMenuToggleButton />
    <AnimatePresence>
      {isOpen ? (
        <Portal>
          <HeaderMenuStyled
            initial={{
              opacity: 0,
              top: -window.innerHeight
            }}
            animate={{
              opacity: 1,
              top: window.innerWidth <= 605 ? theme.header.mobile.height : theme.header.height
            }}
            exit={{
              opacity: 0,
              top: -window.innerHeight
            }}
            transition={{
              duration: 0.15
            }}
          >
            {children}
          </HeaderMenuStyled>
        </Portal>
      ) : null}
    </AnimatePresence>
  </HeaderMenuProvider>
};

export * from './context';
