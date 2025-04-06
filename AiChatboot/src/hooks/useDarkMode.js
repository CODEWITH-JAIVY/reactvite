// src/hooks/useDarkMode.js
import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', enabled);
  }, [enabled]);

  return [enabled, setEnabled];
}