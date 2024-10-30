import { Tabs, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Image, Type, Palette, Layout } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";

export function LeftSidePanel() {
  return (
    <Card className="w-48 dark:border-gray-700 dark:bg-gray-800">
      <CardContent className="p-2">
        <Tabs defaultValue="ai" orientation="vertical" className="w-full">
          <TabsList className="flex flex-col h-auto bg-gray-100 dark:bg-gray-700">
            <TabsTrigger
              value="ai"
              className="w-full justify-start dark:text-gray-200 dark:data-[state=active]:bg-gray-600"
            >
              <Image className="w-4 h-4 mr-2" />
              AI
            </TabsTrigger>
            <TabsTrigger
              value="text"
              className="w-full justify-start dark:text-gray-200 dark:data-[state=active]:bg-gray-600"
            >
              <Type className="w-4 h-4 mr-2" />
              Text
            </TabsTrigger>
            <TabsTrigger
              value="styles"
              className="w-full justify-start dark:text-gray-200 dark:data-[state=active]:bg-gray-600"
            >
              <Palette className="w-4 h-4 mr-2" />
              Styles
            </TabsTrigger>
            <TabsTrigger
              value="themes"
              className="w-full justify-start dark:text-gray-200 dark:data-[state=active]:bg-gray-600"
            >
              <Layout className="w-4 h-4 mr-2" />
              Themes
            </TabsTrigger>
            <TabsTrigger
              value="background"
              className="w-full justify-start dark:text-gray-200 dark:data-[state=active]:bg-gray-600"
            >
              <Image className="w-4 h-4 mr-2" />
              Background
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  );
}
