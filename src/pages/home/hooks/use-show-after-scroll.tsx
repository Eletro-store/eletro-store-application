import { useState, useEffect } from "react";

export function useShowAfterScroll(threshold = 400) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            return setShow(window.scrollY > threshold);
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    return show;
}