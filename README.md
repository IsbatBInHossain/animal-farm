# animal-farm

## Frontend Documentation
This code snippet represents a frontend React component App. The component is responsible for rendering a list of animals that can be searched using a search input field.

The useAnimals function is a custom React hook that initializes the animals state to an empty array and fetches data from a backend server when the component mounts. The search function makes an HTTP GET request to the server to fetch animals that match the query and sets the animals state to the returned data. The hook returns an array containing the animals state and the search function.

The App component uses the useAnimals hook to initialize its state and fetch data from the server. The animals state is rendered as a list of Animal components. The search function is called when the user types in the search input field, and the animals state is updated with the returned data.

## Backend Documentation
This code snippet represents a backend server implemented in Node.js using the Express framework.

The app is initialized with cors middleware to allow cross-origin requests, and express.json() middleware to parse incoming JSON requests.

The Chance library is used to generate random animal data. An array of 250 animals is generated using chance.animal(), chance.age(), and chance.name() methods. Each animal object has an id, type, age, and name property.

The server responds to HTTP GET requests to the root endpoint ("") and returns an array of animals that match the query parameter q. The q parameter is obtained from the request query string and converted to lowercase. The filter method is used to find animals that contain the q parameter in their type property. The results are sent back to the client using the res.send() method.

The server is started on port 5000 using the app.listen() method. When the server starts, a message is logged to the consol
