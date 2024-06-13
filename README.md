# Ragin' Riders
Ragin' Riders is an online motorcycle shop that sells different types of biker gear, travel gear, and motorcycle parts. It has a home page, contact page, login and signup forms, a shop with dynamic pages for the products, and a page for blog posts. The products can be added to a cart that stores the item in a global state. The user account info is also stored in the global state and it has its own account page that displays some of the user information. The user stays logged in and the cart keeps its items on page refresh or exit. 

## Built With 
* CSS
* React
* Nextjs
* TypeScript
* MongoDB

## Home Page 
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/19805186-5b96-4d79-a9b0-ac0a5e7f8c81)
The landing page greets the user with a big, bold message and a video of a motorcycle track race taking place in the background. Beneath the video, there is a blurb about the company that details a bit of history and the goal of Ragin' Riders. Further down, there is a small section that shows off the categories of products that are available in the store. At the bottom, the universal page footer can be found. It contains contact information and links to the other pages just like the header. Each link uses the Next Link component for better client-side navigation.

## The Shop
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/3387ef47-c6bd-4718-8978-d19715cd5bd7)
The shop page features 25 products for sale in the Ragin' Riders store. It uses the searchParams parameter to create a page variable that allows for pagination between all of the products. Each product is in a div that has a link to the individual product page using the Nextjs dynamic route segments. The site connects to a MongoDB database that has a "products" collection and it pulls from this collection to display the products on screen. Each product has a custom TypeScript type called Product that matches the fields of the documents in the collection. Each image uses the Next Image component for smoother image loading

### Search Function 
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/791a7032-ac4c-457a-8ecb-7c73ce7cc511)
To search for specific items in the shop, a user can use the search bar built into the header that accepts an input to search. The input is passed a search variable as part of searchParams and is debounced using the use-debounce package to cause less network calls to the server. Upon successful debouncing, the applicable search results come up. If no matching results are found, then nothing will appear. The search matches results up to one character off, as you can see with the above "glove" search. The input uses a search index that is attached to the MongoDB collection to be able to bring back the relevant results.

### Product Pages 
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/2578b845-7450-4c19-81e6-826b5fe67bdb)
Each product page uses a JavaScript array map to map out the images that are set to the "images" property in each database product. It displays these images on the left, and each image will become the bigger image when clicked by using a useState setter. Other information like product description, price, and brand can also be seen here. There are dropdown menus to change the amount to add to cart and size and color options if applicable. The "add to cart" button puts the items into the global state slice called "cart" via a Redux Toolkit reducer. If there is at least 1 item in the cart, the amount will pop up next to the cart.

## The Cart
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/bd0bafb3-06e3-4b6a-90b8-6af1ce03830b)
The cart contains all the items that the user passed into the cart state via the "add to cart" button. It grabs all the items using the useSelector hook from Redux Toolkit and displays them all in a table that details the item, its quantity, and its total price. Each item row has a "remove" button that uses a removeFromCart reducer and will filter the item out of the cart state. The last row of the table has a "clear cart" button that is attached to the clearCart reducer and will reset the cart to an empty array. The cart state will persist on page refresh or exit thanks to the Redux Persist package that creates a persistent store via the persistStore function and the PersistGate component. 

## Contact Page 
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/7f21f852-796d-41e5-b687-215304656518)
The contact form allows users to send messages to a "contacts" collection in the database. Each input field on the form carries a state that is passed into the handleSubmit function. The name field has minLength and maxLength properties attached to them via their MongoDB schema, requiring the user to put in a name that is greater than 1 but less than 40 characters. The email has a match property in the schema that is set to a common email validation regular expression. None of the fields can be left empty. If the user fails to meet any of the requirements, then the applicable error messages will be displayed beneath the form. A message saying that the message sent successfully will otherwise appear and the message will be sent to the "contacts" collection with the time and date attached to it.

## Blogs Page 
![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/659002fe-5cfd-4bf5-a8c6-844a6cff7a8f)
This page shows a list of all the blogs in the "blogs" collection in the database. Each blog link shows the title, author, and date of the post. The link is attached to another dynamic route segment. 

![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/44d08a83-b6c6-4b51-acb4-dd303269156a) <br />
Upon clicking the link, the user will be met with an image for the blog and a couple paragraphs for the blog, all of which are pulled from the database. Each page has a dynamic title thanks to the generateMetadata function that Nextjs provides to dynamic route segments.

## User Authentication 
<img src="https://github.com/fletchcoder/Ragin-Riders/assets/131314453/43958bda-0769-470c-96f7-9e2d31bf4e07" width="49%" /> <img src="https://github.com/fletchcoder/Ragin-Riders/assets/131314453/d16d3162-c709-4925-9426-6b20b0da5dd5" width="49%"/>

Clicking the sign in link on the header will direct to login form. A slice in the global state object called "auth" controls the authentication via an initialState with currentUser and isLoading properties. currentUser stores username, email, token, bio, and image properties that will be set to user information when they login or signup, but the fields are empty by default. isLoading is a boolean that determines if the state is done being accessed or not. The state uses the extraReducers prop of the createSlice function of Redux Toolkit to adjust the state. The builder callback in extraReducers is attached to register and login thunks that were made via createAsyncThunk, another Toolkit function. These thunks return promises and the builder has different cases for depending on whether the promises fulfill, reject, or are pending. Each promise pends before either rejection or fulfillment, setting isLoading to true.  On fulfillment for either promise, the currentUser fields will be filled with the users info and isLoading is set to false. On rejection, isLoading is set to false and currentUser values remain default. The authentication uses the free RealWorld API to match user input against its /users/login endpoint for login or its /users endpoint for signup. An error message will pop up beneath each form telling the user that their username or password is incorrect on the login or that the username or email is already in use on the signup. Both pages have a link to the other and a link back to the shop page. 

![image](https://github.com/fletchcoder/Ragin-Riders/assets/131314453/4785c5f4-e80f-497d-af66-9de12b77c47b)
Successful sign up or login will redirect the user to the shop page with the account svg replacing the sign in link. Clicking the image will bring up a dropdown that has a link to this account page and a button that uses the useDispatch hook from Redux Toolkit to dispatch a reducer called signOut, which sets the currentUser key in the auth initialState back to an object of empty strings. 


