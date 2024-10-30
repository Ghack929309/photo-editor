import { useState } from "react";
import { Card, CardContent } from "~/components/ui/card";
import { Slider } from "~/components/ui/slider";

type Settings = {
  opacity: number;
  vibrance: number;
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
};

export function RightSidePanel() {
  const [settings, setSettings] = useState<Settings>({
    opacity: 90,
    vibrance: 90,
    brightness: 90,
    contrast: 90,
    saturation: 90,
    blur: 90,
  });

  const handleSettingChange = (setting: keyof Settings, value: number[]) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value[0],
    }));
  };

  return (
    <Card className="w-72 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-4">
        <h3 className="font-semibold mb-4 dark:text-gray-200">Settings</h3>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-300">Image opacity</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {settings.opacity}%
              </span>
            </div>
            <Slider
              value={[settings.opacity]}
              onValueChange={(value) => handleSettingChange("opacity", value)}
              max={100}
              step={1}
              className="dark:bg-gray-700"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-300">Vibrance</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {settings.vibrance}%
              </span>
            </div>
            <Slider
              value={[settings.vibrance]}
              onValueChange={(value) => handleSettingChange("vibrance", value)}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-300">Brightness</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {settings.brightness}%
              </span>
            </div>
            <Slider
              value={[settings.brightness]}
              onValueChange={(value) =>
                handleSettingChange("brightness", value)
              }
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-300">Contrast</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {settings.contrast}%
              </span>
            </div>
            <Slider
              value={[settings.contrast]}
              onValueChange={(value) => handleSettingChange("contrast", value)}
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-300">Saturation</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {settings.saturation}%
              </span>
            </div>
            <Slider
              value={[settings.saturation]}
              onValueChange={(value) =>
                handleSettingChange("saturation", value)
              }
              max={100}
              step={1}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-300">Blur</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {settings.blur}%
              </span>
            </div>
            <Slider
              value={[settings.blur]}
              onValueChange={(value) => handleSettingChange("blur", value)}
              max={100}
              step={1}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
