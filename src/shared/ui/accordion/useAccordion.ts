"use client";

import { useState } from "react";

export function useAccordion() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  return { isOpen, toggle };
}
