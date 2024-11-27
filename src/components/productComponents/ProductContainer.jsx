import React from "react";
import exportIcon from "/icons/export.svg";
import Button from "../../elements/Button";
import SearchBar from "../../elements/SearchBar";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/getApi/getApi";

const ProductContainer = () => {
   const { data, isLoading, isError } = useQuery({
      queryKey: ["products"],
      queryFn: getProducts,
   });

   const products = data?.data || [];

   if (isLoading) {
      return <p>Loading...</p>;
   }

   if (isError) {
      return <p>Error loading products</p>;
   }

   return (
      <div className="w-full">
         <div className="max-w-full bg-background px-[24px] py-[32px] rounded-xl">
            <div className="flex items-center justify-between w-full">
               <h2 className="text-[24px] font-semibold">Products</h2>

               <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-[16px] py-[8px] border border-primary rounded-xl">
                     <p>Export</p>
                     <img src={exportIcon} alt="Export Icon" />
                  </div>

                  <Button title="Add Product +" />
               </div>
            </div>

            <div className="flex items-center justify-between w-full mt-5">
               <div className="flex items-center gap-3">
                  <p>All Products</p>
                  <p>Catalog</p>
               </div>

               <SearchBar />
            </div>

            <div className="mt-5 w-full">
               <table className="min-w-full">
                  <thead>
                     <tr className="flex items-center w-full">
                        <th className="flex-1 text-left px-6 py-3">Product</th>
                        <th className="flex-1 text-left px-6 py-3">Category</th>
                        <th className="flex-1 text-left px-6 py-3">Stock</th>
                        <th className="flex-1 text-left px-6 py-3">Amount</th>
                        <th className="flex-1 text-left px-6 py-3">Quantity</th>
                        <th className="flex-1 text-left px-6 py-3">Status</th>
                        <th className="flex-1 text-left px-6 py-3">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {products.length > 0 ? (
                        products.map((product, idx) => (
                           <tr
                              key={idx}
                              className="flex items-center w-full border-b"
                           >
                              <td className="flex-1 px-6 py-4 flex items-center gap-3">
                                 <img
                                    src={product.imageUrl}
                                    width={50}
                                    height={50}
                                    alt={product.name}
                                 />
                                 <p>{product.name}</p>
                              </td>
                              <td className="flex-1 px-6 py-4">
                                 {product.category}
                              </td>
                              <td className="flex-1 px-6 py-4">
                                 {product.stock}
                              </td>
                              <td className="flex-1 px-6 py-4">
                                 ${product.amount}
                              </td>
                              <td className="flex-1 px-6 py-4">
                                 {product.quantity}
                              </td>
                              <td className="flex-1 px-6 py-4">
                                 {product.status}
                              </td>
                              <td className="flex-1 px-6 py-4">
                                 <button className="text-primary">...</button>
                              </td>
                           </tr>
                        ))
                     ) : (
                        <tr>
                           <td colSpan="7" className="text-center py-4">
                              No products found
                           </td>
                        </tr>
                     )}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default ProductContainer;
