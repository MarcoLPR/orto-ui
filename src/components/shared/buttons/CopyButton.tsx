import React from "react";
import { Button } from "baseui/button";

const CopyButton = ({ text }: any) => {
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert("Text copied");
  };

  return <Button onClick={copy}>Copy</Button>;
};

export default CopyButton;
