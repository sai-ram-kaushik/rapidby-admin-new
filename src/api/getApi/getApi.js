// products api endpoints

const getProducts = async () => {
   const response = await fetch(
      `http://localhost:8000/api/v1/admin/get-all-products`
   );

   const products = await response.json();
   return products;
};

const productCount = async () => {
   const response = await fetch(
      `http://localhost:8000/api/v1/admin/get-count-of-product`
   );

   const totalProductCount = await response.json();
   return totalProductCount;
};

// orders api endpoints

const getOrders = async () => {
   const response = await fetch(
      `http://localhost:8000/api/v1/admin/get-all-orders`
   );

   const orders = await response.json();
   return orders;
};

const pendingOrder = async () => {
   const response = await fetch(
      `http://localhost:8000/api/v1/admin/get-order-pending-count`
   );

   const pendingOrderCount = response.json();
   return pendingOrderCount;
};

const getMonthlyMetrix = async () => {
   const response = await fetch(
      `http://localhost:8000/api/v1/admin/get-montly-matrix`
   );

   const montlyMetrix = response.json();
   return montlyMetrix;
};

export { getProducts, productCount, getOrders, pendingOrder, getMonthlyMetrix };
