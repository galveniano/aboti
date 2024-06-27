import React, { useState } from "react";
import { Input } from "@mui/base/Input";

const Buscador = () => {
  return (
    <Input
      placeholder="Search..."
      slotProps={{
        input: {
          className:
            "hidden sm:flex 2xl:w-[300px] xl:w-[250px] lg:w-[200px]  md:w-[180px] sm:w-[150px] text-sm font-code leading-5 px-3 py-2 rounded-lg hover:border-solid hover:border-2 hover:border-brand1 m-0",
        },
      }}
    />
  );
};

export default Buscador;
