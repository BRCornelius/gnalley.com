import { useEffect } from "react";
import { withRouter } from 'react-router-dom';

export const isMobile = window.screen.width <= 1007

export const useOutsideClick = (ref, clickFunction) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                clickFunction()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [clickFunction, ref]);
}

const ScrollToTopFunction = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export const ScrollToTop = withRouter(ScrollToTopFunction);