import { jsPDF } from "jspdf";
import LOGO from "../assets/logo.png";
import { ImageElement, ImageElementVIT } from "./references";

type ImageElementType = ImageElement | ImageElementVIT;

export const pdfgenerator = async (
  chosenQuestions: Map<number, ImageElementType>,
  withAnswer: boolean
) => {
  const questionsDoc = new jsPDF();

  const pageWidth = questionsDoc.internal.pageSize.getWidth(); // Get the width of page
  const lineHeight =
    questionsDoc.getLineHeight() / questionsDoc.internal.scaleFactor; // Get line height

  let position: { x: number; y: number } = {
    x: (pageWidth - 90) / 2, // Center the logo horizontally
    y: 10, // initial vertical position
  };
  let questionNum: number = 1;
  questionsDoc.setFont("times", "normal");

  // Write the logo
  const img = new Image();
  img.src = LOGO;
  const imgWidth = 90;
  const imgHeight = (img.height * imgWidth) / img.width;
  questionsDoc.addImage(
    img,
    "jpg",
    position.x,
    position.y,
    imgWidth,
    imgHeight
  );
  position.y += imgHeight + 10; // Increase y position by the height of the logo
  position.x = 3; //adjust x position for other images

  // Write the chosen questions
  for (let value of chosenQuestions.values()) {
    //write question number
    questionsDoc.text(
      "Q" + questionNum.toString() + ".",
      position.x,
      position.y
    );
    questionNum++;
    position.y += lineHeight;
    if ("Question_text" in value && value.Question_text !== null) {
      // Calculate the height of the text being added
      const textLines = questionsDoc.splitTextToSize(
        value.Question_text,
        pageWidth - position.x * 2
      );
      const textHeight = textLines.length * lineHeight;
      // Add the text
      questionsDoc.text(textLines, position.x, position.y);
      // Increment y by the height of the text
      position.y += textHeight + 3;
    }
    if (value.Question_URL !== null) {
      position = await imageWriter(
        value.Question_URL,
        pageWidth,
        questionsDoc,
        position
      );
    }
    if (value.Answer_URL && withAnswer) {
      questionsDoc.text("Ans.", position.x, position.y);
      position.y += 3;
      position = await imageWriter(
        value.Answer_URL,
        pageWidth,
        questionsDoc,
        position
      );
    }
  }

  questionsDoc.save("unibud.pdf");
};
const imageWriter = async (
  imageUrl: string,
  pageWidth: number,
  questionsDoc: jsPDF,
  position: {
    x: number;
    y: number;
  }
) => {
  try {
    const img = await fetchImage(imageUrl);
    const imgWidth = pageWidth-3;
    const imgHeight = (img.height * imgWidth) / img.width;

    if (position.y + imgHeight > questionsDoc.internal.pageSize.getHeight()) {
      questionsDoc.addPage();
      position.y = 10;
    }
    questionsDoc.addImage(
      img,
      "jpg",
      position.x,
      position.y,
      imgWidth,
      imgHeight
    );
    position.y += imgHeight + 10; // Increment y position by the height of the image
    return position;
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
const fetchImage = async (imageUrl: string): Promise<HTMLImageElement> => {
  try {
    const response = await fetch(`${process.env.API_URL}/getImg`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageUrl }),
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const blob = await response.blob();
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = URL.createObjectURL(blob);
    });
  } catch (error) {
    console.error("Error fetching image:", error);
    throw error;
  }
};
