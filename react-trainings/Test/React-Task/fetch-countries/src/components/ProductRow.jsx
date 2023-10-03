/* eslint-disable react/prop-types */

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td className="border p-2">{name}</td>
      <td className="border p-2">{product.price}</td>
    </tr>
  );
}

export default ProductRow;
