const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.post('/payment', async (req, res) => {
  console.log('here');
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };
  try {
    await stripe.charges.create(body);
    console.log('Posted successfully');
    res.status(200).send();
  } catch (error) {
    res.status(500).send({ error: stripeErr });
  }
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log('Up and running on port', process.env.PORT);
});
