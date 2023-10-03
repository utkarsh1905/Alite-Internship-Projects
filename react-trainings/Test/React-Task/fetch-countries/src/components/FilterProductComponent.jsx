// /* eslint-disable react/prop-types */
// import { useState } from "react";

// function FilterableProductTable({ products }) {
//   const [filterText, setFilterText] = useState("");
//   const [inStockOnly, setInStockOnly] = useState(false);

//   return (
//     <div className="border border-gray-300 p-4 w-90">
//       <SearchBar
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//         onFilterTextChange={setFilterText}
//         onInStockOnlyChange={setInStockOnly}
//       />
//       <ProductTable
//         products={products}
//         filterText={filterText}
//         inStockOnly={inStockOnly}
//       />
//     </div>
//   );
// }

// function ProductCategoryRow({ category }) {
//   return (
//     <tr>
//       <th colSpan="2" className="bg-gray-200 py-2">
//         {category}
//       </th>
//     </tr>
//   );
// }

// function ProductRow({ product }) {
//   const name = product.stocked ? (
//     product.name
//   ) : (
//     <span style={{ color: "red" }}>{product.name}</span>
//   );

//   return (
//     <tr>
//       <td className="border p-2">{name}</td>
//       <td className="border p-2">{product.price}</td>
//     </tr>
//   );
// }

// function ProductTable({ products, filterText, inStockOnly }) {
//   const rows = [];
//   let lastCategory = null;

//   products.forEach((product) => {
//     if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
//       return;
//     }
//     if (inStockOnly && !product.stocked) {
//       return;
//     }
//     if (product.category !== lastCategory) {
//       rows.push(
//         <ProductCategoryRow
//           category={product.category}
//           key={product.category}
//         />
//       );
//     }
//     rows.push(<ProductRow product={product} key={product.name} />);
//     lastCategory = product.category;
//   });

//   return (
//     <table className="w-full">
//       <thead>
//         <tr>
//           <th className="p-2 border-b">Name</th>
//           <th className="p-2 border-b">Price</th>
//         </tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   );
// }

// function SearchBar({
//   // eslint-disable-next-line react/prop-types
//   filterText,
//   inStockOnly,
//   onFilterTextChange,
//   // eslint-disable-next-line react/prop-types
//   onInStockOnlyChange,
// }) {
//   return (
//     <form className="mb-4">
//       <input
//         type="text"
//         value={filterText}
//         placeholder="Search..."
//         onChange={(e) => onFilterTextChange(e.target.value)}
//         className="border border-gray-400 rounded-md px-2 py-1 mr-2"
//       />
//       <label className="flex items-center">
//         <input
//           type="checkbox"
//           checked={inStockOnly}
//           onChange={(e) => onInStockOnlyChange(e.target.checked)}
//           className="mr-2"
//         />
//         Only show products in stock
//       </label>
//     </form>
//   );
// }

// const PRODUCTS = [
//   { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
//   { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
//   { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
//   { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
//   { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
//   { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
// ];

// export default function FilterProductComponent() {
//   return <FilterableProductTable products={PRODUCTS} />;
// }

import FilterableProductTable from "./FilterableProductTable";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

export default function FilterProductComponent() {
  return <FilterableProductTable products={PRODUCTS} />;
}
