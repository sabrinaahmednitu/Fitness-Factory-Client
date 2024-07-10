// import './Sort.css';
// import { useDispatch, useSelector } from 'react-redux';

// const Sort = () => {
//   const dispatch = useDispatch();
//   const { filter_products, sorting_value } = useSelector(
//     (state) => state.filter
//   );

//   const handleSortingChange = (e) => {
//     dispatch(updateSortValue(e.target.value));
//   };

//   return (
//     <div>
//       <div className="sorting-section pt-12">
//         {/* 1st column */}
//         <div className="product-data">
//           <p>{`${filter_products.length} Products Available`}</p>
//         </div>
//         {/* 2nd column */}
//         <div className="sort-selection">
//           <form action="#">
//             <label htmlFor="sort"></label>
//             <select
//               name="sort"
//               id="sort"
//               value={sorting_value}
//               onChange={handleSortingChange}
//             >
//               <option value="lowest">Price (lowest)</option>
//               <option value="highest">Price (highest)</option>
//               <option value="a-z">Name (a-z)</option>
//               <option value="z-a">Name (z-a)</option>
//             </select>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sort;

import './Sort.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateSortValue, sortingProducts } from '@/redux/Features/filterSlice';

const Sort = () => {
  const dispatch = useDispatch();
  const { filter_products, sorting_value } = useSelector(
    (state) => state.filter
  );

  const handleSortingChange = (e) => {
    dispatch(updateSortValue(e.target.value));
    dispatch(sortingProducts());
  };

  return (
    <div>
      <div className="sorting-section pt-12">
        <div className="product-data">
          <p>{`${filter_products.length} Products Available`}</p>
        </div>
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select
              name="sort"
              id="sort"
              value={sorting_value}
              onChange={handleSortingChange}
            >
              <option value="lowest">Price (lowest)</option>
              <option value="highest">Price (highest)</option>
              <option value="a-z">Name (a-z)</option>
              <option value="z-a">Name (z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Sort;
