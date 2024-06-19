import React, { useState } from "react";
import { Input } from "@mui/base/Input";

const Buscador = () => {
  return (
    <Input
      placeholder="Search..."
      slotProps={{
        input: {
          className:
            "w-80 text-sm font-code leading-5 px-3 py-2 rounded-lg hover:border-solid hover:border-2 hover:border-brand1",
        },
      }}
    />
  );
};

export default Buscador;
