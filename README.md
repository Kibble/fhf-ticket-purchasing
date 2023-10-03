# Deployment

The app is deployed and can be viewed at [https://65165b748469b4328aa25f9f--taupe-fenglisu-dde9f5.netlify.app/](https://65165b748469b4328aa25f9f--taupe-fenglisu-dde9f5.netlify.app/).

# Running the App Locally (yarn)

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
* Decouple from react-md UI library by creating wrapper components for everything used from that library
* Use `billingSlice.ts` to maintain billing information in Redux store instead of component state

### Compatibility
* Responsive/Mobile UI (looks okay on a 1025px width, better on 1160px)
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
* Adding more than one item at a time
* "Your cart is empty" text
* Prevent user from checkout out with empty cart

### Other
* WCAG compliance / accessibility
* Fix favicon and browser page title
* Different delivery options
* Convenience fees
* Event handling on "Place Order" click - Validations of form inputs
* Order cancelling
* On-screen navigation back to the event listing page
* Terms of Use
