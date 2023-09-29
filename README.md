

# Running the App (yarn)

1. In the project directory, run `yarn` to install dependencies.
2. Run `yarn start` to launch the app at [http://localhost:3000](http://localhost:3000).

# Limitations

Due to limited time, some features were considered but not implemented. The following is a list of features not yet supported:

### Architecture / Code Quality
* Removal of "any" types
* 

### Compatibility
* Responsive/Mobile UI (looks okay on a 1032px width, better on 1440px)
* Tested only on Chrome browser on a Windows machine

### Localization
* Addresses outside of the USA

### Payments
* Storing multiple credit cards
* Credit cards other than Visa (doesn't support AmEx 4-digit CVV, for example)
* Other methods of payment

### Shopping Cart
* Removing items from the cart
* Adding more than one item at a time
* "Your cart is empty" text
* Prevent user from checkout out with empty cart

### Other
* WCAG compliance / accessibility
* Different delivery options
* Convenience fees
* Event handling on "Place Order" click
* Order cancelling
* Terms of Use
* Dynamic "available by" date
