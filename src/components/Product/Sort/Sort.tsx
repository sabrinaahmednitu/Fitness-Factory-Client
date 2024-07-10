// import React from 'react';
// import './Sort.css';
// import { BsFillGridFill, BsList } from 'react-icons/bs';
// import { useFilterContext } from '../../../context/filterContext';
// const Sort = () => {
//   const { grid_view, setGridView, setListView, filter_products, sorting } =
//     useFilterContext();
//   return (
//     <div>
//       <div className="sorting-section">
//         {/* 1st column */}
//         <div className="sorting-list--grid">
//           <button
//             className={grid_view ? 'active sort-btn' : 'sort-btn'}
//             onClick={setGridView}
//           >
//             <BsFillGridFill className=""></BsFillGridFill>
//           </button>
//           <button
//             className={!grid_view ? 'active sort-btn' : 'sort-btn'}
//             onClick={setListView}
//           >
//             <BsList className=""></BsList>
//           </button>
//         </div>
//         {/* 2nd column */}
//         <div className="product-data">
//           <p>{`${filter_products.length} Products Available`}</p>
//         </div>
//         {/* 3rd column */}
//         <div className="sort-selection ">
//           <form action="#">
//             <label htmlFor="sort"></label>
//             <select name="sort" id="sort" onClick={sorting}>
//               <option value="lowest">Price(lowest)</option>
//               <option value="#" disabled></option>
//               <option value="highest">Price(highest)</option>
//               <option value="#" disabled></option>
//               <option value="a-z">Price(a-z)</option>
//               <option value="#" disabled></option>
//               <option value="z-a">Price(z-a)</option>
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

const Sort = () => {
  const dispatch = useDispatch();
  const { filter_products, sorting_value } = useSelector(
    (state) => state.filter
  );

  const handleSortingChange = (e) => {
    dispatch(updateSortValue(e.target.value));
  };

  return (
    <div>
      <div className="sorting-section pt-12">
        {/* 1st column */}
        <div className="product-data">
          <p>{`${filter_products.length} Products Available`}</p>
        </div>
        {/* 2nd column */}
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

