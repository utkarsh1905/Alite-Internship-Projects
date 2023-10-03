/* eslint-disable react/prop-types */

function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form className="mb-4">
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
        className="border border-gray-400 rounded-md px-2 py-1 mr-2"
      />
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
          className="mr-2"
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
