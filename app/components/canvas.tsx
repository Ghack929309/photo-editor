import { Card, CardContent } from "~/components/ui/card";
import { Image } from "lucide-react";
import { useState } from "react";
export function Canvas() {
  const [image, setImage] = useState(null);
  return (
    <Card className="flex-1 aspect-square dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-4 h-full flex flex-col items-center justify-center">
        {image ? (
          <img
            src={image}
            alt="Editor canvas"
            className="max-w-full max-h-full"
          />
        ) : (
          <div className="w-20 h-20 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center">
            <Image className="w-10 h-10 text-gray-400 dark:text-gray-500" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
