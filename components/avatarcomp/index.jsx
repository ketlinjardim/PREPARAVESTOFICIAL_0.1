import React, { useState } from "react";

export const AvatarContext = React.createContext();

export const AvatarContextProvider = ({ children }) => {
  // Imagem padrão do avatar
  const [selectedAvatar, setSelectedAvatar] = useState(
    require("../../assets/avatares/0.png")
  );

  return (
    <AvatarContext.Provider value={{ selectedAvatar, setSelectedAvatar }}>
      {children}
    </AvatarContext.Provider>
  );
};
