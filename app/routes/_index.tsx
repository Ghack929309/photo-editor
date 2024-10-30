import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Sun, Moon, Play, ChevronDown, ChevronUp } from "lucide-react";
import { MetaFunction } from "@remix-run/react";
import { ImageGenerator } from "~/components/image-generator";

export const meta: MetaFunction = () => {
  return [
    { title: "Konda - Photo Editor" },
    { name: "description", content: "Konda - Photo Editor" },
  ];
};
const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b dark:border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-gray-900 dark:text-white font-medium">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600 dark:text-gray-300">{answer}</div>
      )}
    </div>
  );
};

export default function Index() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const faqItems = [
    {
      question: "Lorem ipsum dolor sit amet consectetur?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum sit consequat molestie id vehicula eu nunc.",
    },
    {
      question: "Felis diam vestibulum sit consequat?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum sit consequat molestie id vehicula eu nunc.",
    },
    {
      question: "Molestie id vehicula eu nunc?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum sit consequat molestie id vehicula eu nunc.",
    },
    {
      question: "Consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum sit consequat molestie id vehicula eu nunc.",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDarkMode ? "dark" : ""
      }`}
    >
      {/* Navigation */}
      <nav className="border-b dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                Konda
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                FAQ
              </a>
              <Button
                variant="outline"
                size="sm"
                className="dark:border-gray-700 dark:text-gray-200"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Create account
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="dark:border-gray-700"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-purple-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <img
              src="/images/left.png"
              alt="T-shirt design"
              className="w-1/4"
            />

            <div className="text-center flex-1">
              <h1 className="text-4xl font-bold mb-4 dark:text-white">
                Generate Images for{" "}
                <span className="text-purple-600 dark:text-purple-400">
                  T-Shirts
                </span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum
                sit consequat molestie id vehicula eu nunc.
              </p>
              <ImageGenerator />
            </div>

            <img
              src="/images/right.png"
              alt="T-shirt design"
              className="w-1/4"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            About Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum sit
            consequat molestie id vehicula eu nunc.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">
            How it works
          </h2>
          <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <Play className="w-16 h-16 text-gray-400 dark:text-gray-500" />
          </div>
        </div>
      </section>

      {/* Example Images */}
      <section className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            Example images
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm"
              >
                <p className="font-semibold mb-2 dark:text-white">Prompt:</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Ipsum dolor sit amet consectetur. Felis diam vestibulum sit
                  consequat molestie id vehicula eu nunc.
                </p>
                <div className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <img
                    src="/api/placeholder/300/300"
                    alt={`Example ${item}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
            FAQ
          </h2>
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <FAQ key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">Konda</h3>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur. Felis diam vestibulum
                sit consequat molestie id vehicula eu nunc.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-white">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                {/* <Twitter className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* <Instagram className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* <Linkedin className="w-5 h-5" /> */}
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                {/* <Facebook className="w-5 h-5" /> */}
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-sm text-gray-400">
              Copyright © 2024 Konda. All Right Reserved
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
