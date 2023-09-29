

# Running the App (yarn)

1. In the project directory, run `yarn` to install dependencies.
2. Run `yarn start` to launch the app at [http://localhost:3000](http://localhost:3000).

# Limitations

Due to limited time, some features were considered but not implemented. The following is a list of things to do and features not yet supported:

### Architecture / Code Quality
* Remove "any" types
* Remove "@ts-ignore" directives
* Fix build warnings / dependency issues
* Use (or remove) Storybook
* Unit/Automated tests
* Decoupling from react-md UI library by creating wrapper components for everything used from that library
* Add a Redux "billingSlice" to use the Redux store for billing information (instead of component state)

### Compatibility
* Responsive/Mobile UI (looks okay on a 1032px width, better on 1440px)
* Tested only on Chrome browser on a Windows machine

### Localization
* Addresses outside of the USA
* Support for other languages
* Support for other currencies

### Payments
* Storing multiple credit cards
* Credit cards other than Visa (doesn't support AmEx 4-digit CVV, for example)
* Formatting for card number and expiration date
* Data validation for expiration date
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
* On-screen navigation back to the event listing page
* Terms of Use
* Dynamic "available by" date
