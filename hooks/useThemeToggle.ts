import { useTheme } from "@/context/ThemeContext";

export function useThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return { theme, toggleTheme };
}
