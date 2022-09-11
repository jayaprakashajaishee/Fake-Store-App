# Instruction to start the App

1. Fork and clone the repo
2. Navigate to the _fake-store-app_ folder
3. Run the command **_npm start_** from the terminal.

## Folder Structure

The app is bootstrapped by create-react-app, so all the folder structure follows the create-react-app.
I have added all the custom reusable components inside the _components_ folder inside the _src_.
All redux files such as store, reducers and actions are inside the _redux_ folder within _components_.

## change the number of products per page

- Go to src => components => Products => Products.js file.
- Find the following line
  ```js
  const productsPerPage = 5;
  ```
- To change the products per page, change the value of the **_productsPerPage_** variable. (By default set to 5 products per page)

## Libraries used

1. React-Redux
2. redux-toolkit
3. Material UI
4. Axios
5. react-router-dom v6
