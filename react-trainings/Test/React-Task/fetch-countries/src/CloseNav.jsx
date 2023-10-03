import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const CloseNav = ({ onClose }) => {
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return <div ref={navRef} />;
};
CloseNav.propTypes = {
  onClose: PropTypes.func,
};

export default CloseNav;
