import { Button } from "~/components/ui/button";
import { Image, Sun, Moon } from "lucide-react";
import { Link } from "@remix-run/react";

export function EditorHeader({
  isDarkMode,
  setIsDarkMode,
}: {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
}) {
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="flex items-center justify-between mb-4">
      <Link
        to="/"
        className="text-2xl font-bold text-purple-600 dark:text-purple-400"
      >
        Konda
      </Link>
      <div className="flex gap-2 items-center">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="dark:border-gray-700 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          <Image className="w-4 h-4 mr-2" />
          Mockup
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Save
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700"
        >
          Download
        </Button>
      </div>
    </div>
  );
}
