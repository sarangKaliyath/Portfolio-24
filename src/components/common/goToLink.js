import React from "react";

export const GoToLink = ({ link, children }) => {
  return (
    <a target="_blank" href={link} rel="noopener noreferrer">
      {children}
    </a>
  );
};
