

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

// Initialize GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI("AIzaSyAVRquZtQ9_FcyIUy-nA0LM9SHGcoQ2Clo");

// Async function to call the API and process the response
const funcall = async () => {
    try {
        // Get the generative model instance
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        // Define your prompt and image data
        const prompt = "Does this look store-bought or homemade?";
        const image = {
            inlineData: {
                data: Buffer.from(fs.readFileSync("logo explore-me.jpg")).toString("base64"),
                mimeType: "image/jpg",
            },
        };

        // Generate content using the model and image
        const result = await model.generateContent([image]);

        // Extract and process the generated text
        let generatedText = result.response.text();

        // Ensure the text is approximately 70 words
        const maxWords = 80;
        const words = generatedText.split(' ');
        if (words.length > maxWords) {
            generatedText = words.slice(0, maxWords).join(' ');
        }

        // Example: Print the generated text
        console.log("Generated Text:", generatedText);

        // Here you can integrate further with your project, e.g., store in a database, display on a webpage, etc.
    } catch (error) {
        console.error('Error in funcall:', error);
    }
};

// Call the function to start the process
funcall();

