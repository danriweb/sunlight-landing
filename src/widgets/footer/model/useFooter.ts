import { useEffect, useState } from "react";

export default function useFooter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isOpen,
    toggleIsOpen,
  };
}
