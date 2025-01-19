const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange }) => {
  return (
    <form>
      <table border="1" width="300">
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={filterText}
                placeholder="Search..."
                onChange={(e) => onFilterTextChange(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => onInStockOnlyChange(e.target.checked)}
                />
                {' '}
                Only show products in stock
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};
export default SearchBar;