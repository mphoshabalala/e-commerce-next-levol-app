
# Shopping List App

## Overview

This is a simple shopping list application built using React. It allows users to add items to their shopping list, set a budget, and track the total cost of items in their list. Additionally, users can mark items as purchased or unpurchased, and the application will calculate the current cost based on their selections.

## Features

- Add items to the shopping list with a name and price.
- Set a budget to track your spending.
- Mark items as purchased or unpurchased with a click.
- Automatically calculate the total price of all items in the list.
- Display the current cost based on purchased items.
- Display the budget and remaining budget after making purchases.

## Getting Started

To get started with the Shopping List App, follow these steps:

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/your-username/shopping-list-app.git
   ```

2. Navigate to the project directory:

   ```shell
   cd shopping-list-app
   ```

3. Install the required dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

5. Open your web browser and access the app at [http://localhost:3000](http://localhost:3000).

## Usage

### Adding Items

- To add an item to your shopping list, use the "Add to list🛒" form.
- Enter the item name and its price, then click the "Add to list🛒" button.
- The item will be added to your shopping list with a default "unpurchased" status.

### Setting a Budget

- You can set a budget by entering a numeric value in the "Budget" input field and clicking the "Set budget💵" button.
- The budget will be displayed in the "My Budget" field, prefixed with "R" (for example, "R100.00").

### Managing Items

- In the shopping list table, you'll see the names, prices, and "Purchased" status of each item.
- To mark an item as purchased or unpurchased, click the "✅" or "❌" icon in the "Purchased" column.
- The "Current Cost" field will update to reflect the cost of purchased items.

### Viewing Total Price

- The "Total Price" field displays the total price of all items in your shopping list, regardless of their purchased status.
- The total price is displayed with "R" as a prefix (for example, "R250.00").

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your changes:

   ```shell
   git checkout -b feature/my-feature
   ```

4. Make your changes and commit them with descriptive commit messages:

   ```shell
   git commit -m "Add new feature: my feature"
   ```

5. Push your changes to your GitHub repository:

   ```shell
   git push origin feature/my-feature
   ```

6. Create a pull request from your branch to the original repository's `main` branch.

7. Describe your changes and submit the pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize this README to include any additional information or specific instructions for your project.
