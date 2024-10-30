import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";
import { LeftSidePanel } from "~/components/leftside-panel";
import { RightSidePanel } from "~/components/rightside-panel";
import { Canvas } from "~/components/canvas";
import { EditorHeader } from "~/components/editor-header";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Konda - Photo Editor" },
    { name: "description", content: "Konda - Photo Editor" },
  ];
};

const PhotoEditor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-200 ${
        isDarkMode ? "dark bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <EditorHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <div className="flex gap-4">
          <LeftSidePanel />

          <Canvas />

          <RightSidePanel />
        </div>

        <div className="mt-4">
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-700 dark:hover:bg-purple-800">
            Regenerate Image
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoEditor;
