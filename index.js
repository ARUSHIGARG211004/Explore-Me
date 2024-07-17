

// const express = require('express');
// const mongoose = require('mongoose');
//  const bodyParser = require('body-parser');

// const fs = require('fs');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// // Initialize Express application
// const app = express();

// // Initialize GoogleGenerativeAI with your API key
// const genAI = new GoogleGenerativeAI('AIzaSyAVRquZtQ9_FcyIUy-nA0LM9SHGcoQ2Clo'); // Replace with your API key

// // Async function to call the API and process the response
// const funcall = async () => {
//     try {
//         // Get the generative model instance
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

//         // Define your prompt and image data (adjust file path as necessary)
//         const prompt = 'Does this look store-bought or homemade?';
//         const image = {
//             inlineData: {
//                 data: Buffer.from(fs.readFileSync('login image.jpg')).toString('base64'),
//                 mimeType: 'image/jpg',
//             },
//         };

//         // Generate content using the model and image
//         const result = await model.generateContent([image]);

//         // Extract and process the generated text
//         let generatedText = result.response.text();

//         // Ensure the text is approximately 70 words
//         const maxWords = 80;
//         const words = generatedText.split(' ');
//         if (words.length > maxWords) {
//             generatedText = words.slice(0, maxWords).join(' ');
//         }

//         // Example: Print the generated text
//         console.log('Generated Text:', generatedText);

//         // Here you can integrate further with your project, e.g., store in a database, display on a webpage, etc.
//     } catch (error) {
//         console.error('Error in funcall:', error);
//     }
// };

// // Call the function to start the process
// funcall();



// require('./db/config'); 
// const signup = require("./signup");
// const login = require("./login");
// const collectionapi = require('./collection');
// const saveImageapi = require('./saveImage');
// const uploadImageApi = require("./uploadImage");


// app.use(express.json({ limit: '50mb' }));
//  app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// app.use(signup);
// app.use(login);
// app.use(collectionapi);
// app.use(saveImageapi);
// app.use(uploadImageApi);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const fetch = require('node-fetch');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// // Import the Unsplash route
// const unsplashRoute = require('./server.js');

// // Initialize Express application
// const app = express();

// // Initialize GoogleGenerativeAI with your API key
// const genAI = new GoogleGenerativeAI('AIzaSyAVRquZtQ9_FcyIUy-nA0LM9SHGcoQ2Clo'); // Replace with your API key

// // Async function to call the API and process the response
// const funcall = async () => {
//     try {
//         // Get the generative model instance
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

//         // Define your prompt and image data (adjust file path as necessary)
//         const prompt = 'Does this look store-bought or homemade?';
//         const image = {
//             inlineData: {
//                 data: Buffer.from(fs.readFileSync('login image.jpg')).toString('base64'),
//                 mimeType: 'image/jpg',
//             },
//         };

//         // Generate content using the model and image
//         const result = await model.generateContent([image]);

//         // Extract and process the generated text
//         let generatedText = result.response.text();

//         // Ensure the text is approximately 70 words
//         const maxWords = 80;
//         const words = generatedText.split(' ');
//         if (words.length > maxWords) {
//             generatedText = words.slice(0, maxWords).join(' ');
//         }

//         // Example: Print the generated text
//         console.log('Generated Text:', generatedText);

//         // Here you can integrate further with your project, e.g., store in a database, display on a webpage, etc.
//     } catch (error) {
//         console.error('Error in funcall:', error);
//     }
// };

// // Call the function to start the process
// funcall();

// require('./db/config'); 
// const signup = require("./signup");
// const login = require("./login");
// const collectionapi = require('./collection');
// const saveImageapi = require('./saveImage');
// const uploadImageApi = require("./uploadImage");

// // Middleware
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Routes
// app.use(signup);
// app.use(login);
// app.use(collectionapi);
// app.use(saveImageapi);
// app.use(uploadImageApi);
// app.use(unsplashRoute);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });






// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const fetch = require('node-fetch');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// // Import the Unsplash route
// const unsplashRoute = require('./server.js');

// // Initialize Express application
// const app = express();

// // Initialize GoogleGenerativeAI with your API key
// const genAI = new GoogleGenerativeAI('AIzaSyAVRquZtQ9_FcyIUy-nA0LM9SHGcoQ2Clo'); // Replace with your API key

// // Async function to call the API and process the response
// const funcall = async () => {
//     try {
//         // Get the generative model instance
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

//         // Define your prompt and image data (adjust file path as necessary)
//         const prompt = 'Does this look store-bought or homemade?';
//         const image = {
//             inlineData: {
//                 data: Buffer.from(fs.readFileSync('login image.jpg')).toString('base64'),
//                 mimeType: 'image/jpg',
//             },
//         };

//         // Generate content using the model and image
//         const result = await model.generateContent([image]);

//         // Extract and process the generated text
//         let generatedText = result.response.text();

//         // Ensure the text is approximately 70 words
//         const maxWords = 80;
//         const words = generatedText.split(' ');
//         if (words.length > maxWords) {
//             generatedText = words.slice(0, maxWords).join(' ');
//         }

//         // Example: Print the generated text
//         console.log('Generated Text:', generatedText);

//         // Here you can integrate further with your project, e.g., store in a database, display on a webpage, etc.
//     } catch (error) {
//         console.error('Error in funcall:', error);
//     }
// };

// // Call the function to start the process
// funcall();

// require('./db/config');
// const signup = require("./signup");
// const login = require("./login");
// const collectionapi = require('./collection');
// const saveImageapi = require('./saveImage');
// const uploadImageApi = require("./uploadImage");

// // Middleware
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// // Routes
// app.use(signup);
// app.use(login);
// app.use(collectionapi);
// app.use(saveImageapi);
// app.use(uploadImageApi);
// app.use(unsplashRoute);

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });




// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const { GoogleGenerativeAI } = require('@google/generative-ai');

// // Initialize Express application
// const app = express();

// // Initialize GoogleGenerativeAI with your API key
// const genAI = new GoogleGenerativeAI('AIzaSyAVRquZtQ9_FcyIUy-nA0LM9SHGcoQ2Clo'); // Replace with your API key

// // Unsplash API access key
// const unsplashAccessKey = 'miYvvB_AHjVSJ0MyLZURJbtmhSt1e3wXWOOyzbm7XkA'; // Replace with your actual Unsplash access key

// // Async function to call the API and process the response
// const funcall = async () => {
//     try {
//         // Get the generative model instance
//         const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

//         // Define your prompt and image data (adjust file path as necessary)
//         const prompt = 'Does this look store-bought or homemade?';
//         const image = {
//             inlineData: {
//                 data: Buffer.from(fs.readFileSync('searchingforrock.jpg')).toString('base64'),
//                 mimeType: 'image/jpg',
//             },
//         };

//         // Generate content using the model and image
//         const result = await model.generateContent([image]);

//         // Extract and process the generated text
//         let generatedText = result.response.text();

//         // Ensure the text is approximately 70 words
//         const maxWords = 80;
//         const words = generatedText.split(' ');
//         if (words.length > maxWords) {
//             generatedText = words.slice(0, maxWords).join(' ');
//         }

//         // Example: Print the generated text
//         console.log('Generated Text:', generatedText);

//         // Here you can integrate further with your project, e.g., store in a database, display on a webpage, etc.
//     } catch (error) {
//         console.error('Error in funcall:', error);
//     }
// };

// // Call the function to start the process
// funcall();

// // Middleware to handle JSON and URL-encoded form data
// app.use(express.json({ limit: '50mb' }));
// app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// require('./db/config'); 
// const signup = require("./signup");
// const login = require("./login");
// const collectionapi = require('./collection');
// const saveImageapi = require('./saveImage');
// const uploadImageApi = require("./uploadImage");

// // Use the routes
// app.use(signup);
// app.use(login);
// app.use(collectionapi);
// app.use(saveImageapi);
// app.use(uploadImageApi);

// // Define the /similar-images route
// app.get('/similar-images', async (req, res) => {
//   try {
//     const { text } = req.query;

//     // Dynamically import node-fetch
//     const fetch = await import('node-fetch').then(module => module.default);

//     // Call Unsplash API to fetch similar images based on generated text
//     const unsplashResponse = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(text)}&per_page=5`, {
//       headers: {
//         Authorization: `Client-ID ${unsplashAccessKey}`,
//       },
//     });

//     if (!unsplashResponse.ok) {
//       throw new Error('Failed to fetch similar images from Unsplash');
//     }

//     const unsplashData = await unsplashResponse.json();
//     const similarImages = unsplashData.results.map(image => image.urls.regular);

//     // Generate HTML response with images
//     let htmlResponse = '<h1>Similar Images</h1>';
//     htmlResponse += '<div>';
//     similarImages.forEach(imgUrl => {
//         htmlResponse += `<img src="${imgUrl}" alt="Similar Image" style="width: 300px; height: auto; margin: 10px;">`;
//     });
//     htmlResponse += '</div>';

//     // Send the HTML response
//     res.send(htmlResponse);
//   } catch (error) {
//     console.error('Error fetching similar images:', error);
//     res.status(500).send('Failed to fetch similar images');
//   }
// });

// // Start the Express server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });








const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fs = require('fs');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Express application
const app = express();

// Initialize GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI('AIzaSyAVRquZtQ9_FcyIUy-nA0LM9SHGcoQ2Clo'); // Replace with your API key

// Unsplash API access key
const unsplashAccessKey = 'miYvvB_AHjVSJ0MyLZURJbtmhSt1e3wXWOOyzbm7XkA'; // Replace with your actual Unsplash access key

// Middleware to handle JSON and URL-encoded form data
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

require('./db/config'); 
const signup = require("./signup");
const login = require("./login");
const collectionapi = require('./collection');
const saveImageapi = require('./saveImage');
const uploadImageApi = require("./uploadImage");
const logoutapi= require("./logout");

// Use the routes
app.use(signup);
app.use(login);
app.use(collectionapi);
app.use(saveImageapi);
app.use(uploadImageApi);
app.use(logoutapi);

// Define the /similar-images route
app.get('/similar-images', async (req, res) => {
  try {
    const { text } = req.query;

    // Dynamically import node-fetch
    const fetch = await import('node-fetch').then(module => module.default);

    // Call Unsplash API to fetch similar images based on generated text
    const unsplashResponse = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(text)}&per_page=5`, {
      headers: {
        Authorization: `Client-ID ${unsplashAccessKey}`,
      },
    });

    if (!unsplashResponse.ok) {
      throw new Error('Failed to fetch similar images from Unsplash');
    }

    const unsplashData = await unsplashResponse.json();
    const similarImages = unsplashData.results.map(image => image.urls.regular);

    // Send the JSON response with images
    res.json({ similarImages });
  } catch (error) {
    console.error('Error fetching similar images:', error);
    res.status(500).send('Failed to fetch similar images');
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});