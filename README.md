# crown-clothing

## Clone this repository
git clone https://github.com/wittywatz/crown-clothing.git

## Change directory into crown-clothing
cd crown-clothing

## Install dependencies
npm install

## Change directory into the client and install dependencies
cd client && npm install

## Go up one folder back into the main folder and run the server
cd .. && npm run dev

In the clisnt folder, locate the StripeButton.js file under src/components and paste in your publishable STRIPE API key

While in the root folder, create a .env file
PORT=5000 
STRIPE_SECRET_KEY=[YOUR STRIPE SECRET KEY GOES HERE]

NOTE: Use port as 5000. Also ensure there are no spaces between the key,value pairs eg. PORT=    5000❌, PORT=5000✅

Save all changes made

## You're all set 👌
