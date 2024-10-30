import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { UploadIcon, ImageIcon, Sparkles } from "lucide-react";
import { Link } from "@remix-run/react";
import { Label } from "./ui/label";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";

export function ImageGenerator() {
  const [isStylesOpen, setIsStylesOpen] = useState(false);
  const [isThemesOpen, setIsThemesOpen] = useState(false);

  const handleUpload = () => {
    document.getElementById("upload-sketch")?.click();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Generate Image
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center dark:text-white">
            Image Generator
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Prompt Section */}
          <div className="space-y-4">
            <label
              htmlFor="prompt"
              className="text-lg font-semibold dark:text-white"
            >
              Prompt
            </label>
            <Input
              id="prompt"
              placeholder="Write your prompt here ..."
              className="w-full border dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
            />
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Try an example
              </Button>
              <Button
                variant="secondary"
                className="dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Enhance prompt
              </Button>
            </div>
          </div>

          {/* Upload Section */}
          <div className="border-2 border-dashed border-purple-600 dark:border-purple-500 rounded-lg p-4">
            <Button
              variant="outline"
              className="w-full  dark:border-gray-700 dark:text-purple-400 dark:hover:bg-gray-800"
            >
              <Label
                htmlFor="upload-sketch"
                className="flex items-center gap-2"
              >
                <UploadIcon className="w-5 h-5" />
                Upload your sketch
              </Label>
            </Button>
            <input
              type="file"
              id="upload-sketch"
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Styles Section */}
          <Collapsible open={isStylesOpen} onOpenChange={setIsStylesOpen}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Styles</h3>
              <CollapsibleTrigger asChild>
                <Button
                  variant="link"
                  className="text-purple-600 dark:text-purple-400"
                >
                  {isStylesOpen ? "Show less" : "Show all"}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={`style-${item}`}
                    className="aspect-[4/3] rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
                  >
                    <ImageIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Themes Section */}
          <Collapsible open={isThemesOpen} onOpenChange={setIsThemesOpen}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold dark:text-white">Themes</h3>
              <CollapsibleTrigger asChild>
                <Button
                  variant="link"
                  className="text-purple-600 dark:text-purple-400"
                >
                  {isThemesOpen ? "Show less" : "Show all"}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={`theme-${item}`}
                    className="aspect-[4/3] rounded-lg bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
                  >
                    <ImageIcon className="w-8 h-8 text-gray-400 dark:text-gray-600" />
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Generate Button */}
          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
            <Link to="/editor" className="flex items-center">
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Image
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
