import { useEffect } from "react";

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
