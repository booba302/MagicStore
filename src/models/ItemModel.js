const CardModel = {
  id: 0, //Number
  name: "", //String,
  img: "", //String
  description: "", //String,
  color: "", //String,
  price: 0, //Number,
};

const ItemOrderModel = {
  card: CardModel, //Object
  quantity: 0, //Number
};

const OrderModel = {
  id : 0,
  client: {
    name: "", //String
    lastname: "", //String
    phone: "", //String
    email: "", //String
  },
  cards: [ItemOrderModel],
  date: "" //Array
};

const CollectionOrdersModel = {
  orders: [OrderModel],
};
