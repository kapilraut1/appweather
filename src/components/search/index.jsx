export default function Search({ search, setSearch, handleSearch }) {
  return (
    <>
      <div>
        <h1>Weather App</h1>{" "}
      </div>
      <div className="searchBar">
        <input
          className="city-search"
          type="text"
          placeholder="Enter the place here"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}   
          onKeyDown={(e) => {
            if (e.key === "Enter") {
                e.preventDefault(); // Prevents default form submission behavior
                handleSearch();
            }
        }}
    />
        <button className="btn" onClick={handleSearch}>
          Click me mate!
        </button>
      </div>
    </>
  );
}
