import { THEMES, useTheme } from "./ThemeProvider";
import { Moon, Sun, Monitor } from 'lucide-react';


const ThemeSelector: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const themeOptions = [
    { key: THEMES.LIGHT, label: 'Light', icon: Sun },
    { key: THEMES.DARK, label: 'Dark', icon: Moon },
    { key: THEMES.SYSTEM, label: 'System', icon: Monitor }
  ];

  return (
    <div className="flex items-center space-x-2 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {themeOptions.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => setTheme(key)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
            theme === key
              ? 'bg-blue-500 text-white'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          <Icon size={16} />
          <span className="text-sm font-medium">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector