**Project Description**
- This is a shopping cart application where users can shop from a product catalogue and check out using the Stripe payment.

**Tech Stack**
- React JS for frontend development.
- Express JS for backend development.
- JavaScript programming language.
- Stripe API.

**Setting Up**
1. Stripe:
   - Sign up for a Stripe account at: https://dashboard.stripe.com/login_success?redirect=%2F
   - Replace the Stripe API secret key in the `TESTING_STRIPE_KEY` in line 5 of `server.js` file.
   - Create the products in Stripe and replace `COFFEE_PRODUCT_KEY`, `SUNGLASSES_PRODUCT_KEY` and `CAMERA_PRODUCT_KEY` with the product keys in lines 8, 13, 18 of the `my_app/src/productStore.js` file.
2.  Run `npm install` command at the root folder.
3.  Run `cd my-app` and run `npm install` commands.
5.  At the `my-app` directory, run `npm start` command.
6.  At the root directory, run `npm start` command.

**Credits**
- https://www.youtube.com/watch?v=_8M-YVY76O8&ab_channel=TraversyMedia
