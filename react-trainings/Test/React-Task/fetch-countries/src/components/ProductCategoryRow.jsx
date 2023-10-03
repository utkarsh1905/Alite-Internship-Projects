/* eslint-disable react/prop-types */

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2" className="bg-gray-200 py-2">
        {category}
      </th>
    </tr>
  );
}

export default ProductCategoryRow;
