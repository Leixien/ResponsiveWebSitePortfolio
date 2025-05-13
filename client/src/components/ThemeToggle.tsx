import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Necessario per evitare problemi di hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <i className="fas fa-sun text-gold"></i>
      ) : (
        <i className="fas fa-moon text-gray-800"></i>
      )}
    </button>
  );
};

export default ThemeToggle;