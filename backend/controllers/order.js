const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const Payment = require('../models/Payment');
const User = require('../models/User');

exports.createOrder = (req, res, next) => {
  const {
    email,
    name,
    totalAmount,
    orderStatus,
    shippingAddress,
    billingAddress,
    paymentMethod,
    paymentStatus,
    paymentAmount,
    orderItems,
  } = req.body;

  const user = new User({
    email,
    name,
    billingAddress: {
      street: billingAddress.street,
      city: billingAddress.city,
      state: billingAddress.state,
      country: billingAddress.country,
      zipCode: billingAddress.zipCode,
    },
    shippingAddress: {
      street: shippingAddress.street,
      city: shippingAddress.city,
      state: shippingAddress.state,
      country: shippingAddress.country,
      zipCode: shippingAddress.zipCode,
    },
  });

  user.save()
    .then(user => {
      const order = new Order({
        customer: user._id,
        totalAmount,
        orderStatus,
        paymentMethod,
        paymentStatus,
        shippingAddress: {
          street: shippingAddress.street,
          city: shippingAddress.city,
          state: shippingAddress.state,
          country: shippingAddress.country,
          zipCode: shippingAddress.zipCode,
        },
      });

      order.save()
        .then(order => {
          const orderItemPromises = orderItems.map(orderItem => {
            const orderItemModel = new OrderItem({
              order: order._id,
              product: orderItem.productId,
              price: orderItem.price,
              quantity: orderItem.quantity,
            });
            return orderItemModel.save();
          });

          const payment = new Payment({
            order: order._id,
            paymentMethod,
            paymentAmount,
            paymentStatus,
          });

          Promise.all([payment.save(), ...orderItemPromises])
            .then(() => res.status(200).json({ message: 'User, order, order items, and payment saved!' }))
            .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(400).json({ error }));
};
