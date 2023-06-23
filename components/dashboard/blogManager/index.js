import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogManager = () => {
  const [blogData, setBlogData] = useState({
    type: "",
    title: "",
    titleImage: null, // Use null instead of an empty string
    paragraphs: [{ title: "", text: "", image: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleParagraphChange = (index, field, value) => {
    setBlogData((prevData) => {
      const updatedParagraphs = [...prevData.paragraphs];
      updatedParagraphs[index][field] = value;
      return {
        ...prevData,
        paragraphs: updatedParagraphs,
      };
    });
  };

  const handleImageUpload = (index, file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = reader.result;
      setBlogData((prevData) => {
        const updatedParagraphs = [...prevData.paragraphs];
        updatedParagraphs[index].image = imageUrl;
        return {
          ...prevData,
          paragraphs: updatedParagraphs,
        };
      });
    };
    reader.readAsDataURL(file);
  };

  const handleAddParagraph = () => {
    setBlogData((prevData) => ({
      ...prevData,
      paragraphs: [...prevData.paragraphs, { title: "", text: "", image: "" }],
    }));
  };

  const handleRemoveParagraph = (index) => {
    setBlogData((prevData) => {
      const updatedParagraphs = [...prevData.paragraphs];
      updatedParagraphs.splice(index, 1);
      return {
        ...prevData,
        paragraphs: updatedParagraphs,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your desired action with the blogData
    console.log(blogData);
  };

  return (
    <div className="bg-gray-300">
      <header className="bg-yellow-500 mb-4 py-8">
        <div className="flex gap-32 container mx-auto text-center">
          <Link href="/">
            <div className="cursor-pointer">
              <Image
                src="/gracelife-logo.png"
                alt="GraceLife Foundation Logo"
                width={200}
                height={200}
              />
            </div>
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Blog Manager - GraceLife Foundation
            </h1>
            <p className="text-lg text-white">
              Use this tool to create a new blog article for Gracelife
              Foundation
            </p>
          </div>
        </div>
      </header>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mb-4 mx-auto p-4 bg-white shadow-lg rounded-lg"
      >
        <div className="my-4">
          <label htmlFor="type" className="block text-gray-700 font-semibold">
            Type:
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={blogData.type}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="my-4">
          <label htmlFor="title" className="block text-gray-700 font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="my-4">
          <label
            htmlFor="titleImage"
            className="block text-gray-700 font-semibold"
          >
            Title Image:
          </label>
          <input
            type="file"
            id="titleImage"
            name="titleImage"
            onChange={(e) => handleImageUpload(0, e.target.files[0])} // Always update the first paragraph's image
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />
          {blogData.titleImage && ( // Display the image preview if available
            <img
              src={blogData.titleImage}
              alt="Title Image"
              className="my-4"
              style={{ width: "100%", height: "auto" }}
            />
          )}
        </div>

        <div className="my-4">
          <label className="block text-gray-700 font-semibold">
            Paragraphs:
          </label>
          {blogData.paragraphs.map((paragraph, index) => (
            <div key={index} className="my-2">
              <div>
                <label
                  htmlFor={`paragraphTitle${index}`}
                  className="block text-gray-700 font-medium"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id={`paragraphTitle${index}`}
                  value={paragraph.title}
                  onChange={(e) =>
                    handleParagraphChange(index, "title", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor={`paragraphText${index}`}
                  className="block text-gray-700 font-medium"
                >
                  Text:
                </label>
                <textarea
                  id={`paragraphText${index}`}
                  value={paragraph.text}
                  onChange={(e) =>
                    handleParagraphChange(index, "text", e.target.value)
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor={`paragraphImage${index}`}
                  className="block text-gray-700 font-medium"
                >
                  Image:
                </label>
                <input
                  type="file"
                  id={`paragraphImage${index}`}
                  onChange={(e) => handleImageUpload(index, e.target.files[0])}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {index > 0 && (
                <button
                  type="button"
                  onClick={() => handleRemoveParagraph(index)}
                  className="text-red-500 underline mt-2"
                >
                  Remove Paragraph
                </button>
              )}
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddParagraph}
            className="text-green-500 underline mt-2"
          >
            Add Paragraph
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          onClick={handleSubmit}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default BlogManager;
