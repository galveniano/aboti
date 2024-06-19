import React from "react";
import { IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Whatssap = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "648817588"; // Reemplaza con el número de violeta
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <IconButton aria-label="WhatsApp" onClick={handleWhatsAppClick}>
        <WhatsAppIcon style={{ fontSize: 40, color: "#22c298" }} />
      </IconButton>
    </>
  );
};

export default Whatssap;
