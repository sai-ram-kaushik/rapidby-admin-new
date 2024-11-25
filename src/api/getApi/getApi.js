const productCount = async () => {
   const response = await fetch(
      `http://localhost:8000/api/v1/admin/get-count-of-product`
   );

   const totalProductCount = await response.json();
   return totalProductCount;
};

export { productCount };
