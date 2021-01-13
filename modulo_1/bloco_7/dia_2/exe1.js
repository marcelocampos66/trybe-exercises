const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const personDelivery = order.order.delivery.deliveryPerson;
  const personDestiny = order.name;
  const personPhoneNumber = order.phoneNumber;
  const streetAddress = order.address.street;
  const numberAdress = order.address.number;
  const apAdress = order.address.apartment;

  let message

  message = `Ola ${personDelivery}, entrega para: ${personDestiny}, Telefone: ${personPhoneNumber}, ${streetAddress}, Nº: ${numberAdress}, AP: ${apAdress}.`;

  // console.log(`Ola ${personDelivery}, entrega para: ${personDestiny}, Telefone: ${personPhoneNumber}, ${streetAddress}, Nº: ${numberAdress}, AP: ${apAdress}.`);

  return message;
}

customerInfo(order);
console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

  let newBuyer = order.name = 'Luiz Silva';
  let drink = order.order.drinks.coke.type;
  let newPayment = order.payment.total = 50;
  let newPizza1 = order.order.pizza.muzzarella = { amount: 1, price: 25,};
  let newPizza2 = order.order.pizza.calabresa = { amount: 1, price: 25,};

  // console.log(`Ola ${newBuyer}, o total do seu pedido de ${newPizza1}, ${newPizza2} e ${drink} eh RS ${newPayment},00.`);


  return `Ola ${newBuyer}, o total do seu pedido de ${newPizza1}, ${newPizza2} e ${drink} eh RS ${newPayment},00.`

}
orderModifier(order);

console.log(orderModifier(order));
