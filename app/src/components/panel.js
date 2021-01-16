import { useState } from "react";
import { Login } from "./login";
import { Content } from "./content";

export const Panel = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  return (
    <Content>
      <Login setIsSigningUp={setIsSigningUp} isSigningUp={isSigningUp} />
    </Content>
  );
};
