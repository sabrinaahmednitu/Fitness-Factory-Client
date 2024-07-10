//2nd and all ok section
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetProductsQuery } from '@/redux/Api/baseApi';
import './FilterSection.css';
import {
  clearFilters,
  filterProducts,
  loadFilterProducts,
  updateFiltersValue,
} from '@/redux/Features/filterSlice';

const FilterSection = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetProductsQuery();

  const { filters, all_products } = useSelector((state) => state.filter);

  useEffect(() => {
    if (data) {
      dispatch(loadFilterProducts(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    dispatch(filterProducts());
  }, [dispatch, filters]);

  const getUniqueData = (data, property) => {
    let newValue = data.map((curElem) => curElem[property]);
    return ['all', ...new Set(newValue)];
  };

  const categoryOnlyData = getUniqueData(all_products, 'category');

  if (isLoading) {
    return <p className="text-2xl text-center text-red-500">Loading .... </p>;
  }

  return (
    <div>
      <div className="filter-search pt-8">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={filters.text}
            onChange={(e) =>
              dispatch(
                updateFiltersValue({
                  name: e.target.name,
                  value: e.target.value,
                })
              )
            }
            placeholder="Search"
          />
        </form>
      </div>

      <div className="filter-category">
        <h4>Category</h4>
        <div className="category-name">
          {categoryOnlyData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={(e) =>
                dispatch(
                  updateFiltersValue({
                    name: e.target.name,
                    value: e.target.value,
                  })
                )
              }
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-price">
        <h4>Price</h4>
        <p>{filters.price}</p>
        <input
          type="range"
          name="price"
          min={filters.minPrice}
          max={filters.maxPrice}
          value={filters.price}
          onChange={(e) =>
            dispatch(
              updateFiltersValue({ name: e.target.name, value: e.target.value })
            )
          }
        />
      </div>

      <div className="filter-clear">
        <button onClick={() => dispatch(clearFilters())}>Clear Filters</button>
      </div>
    </div>
  );
};

export default FilterSection;
