// import { useGetProductsQuery } from '@/redux/Api/baseApi';

// const Products = () => {
//   const { data, isLoading } = useGetProductsQuery(undefined);

//   if (isLoading) {
//     return <p className="text-2xl text-center text-red-500">Loading .... </p>;
//   }

//   return (
//     <div className="my-8">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-4 gap-4">
//           {data?.map((product) => (
//             <div key={product._id} >
//               <img src={product.images} alt="" />
//               <h2 className="text-xl font-bold">{product.name}</h2>
//               <p>{product.description}</p>
//               <p className="text-lg font-semibold">{product.price}</p>
//               <p>{ product._id}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;

import FilterSection from '@/components/Product/FilterSection/FilterSection';
import GridView from '@/components/Product/GridView/GridView';
import Sort from '@/components/Product/Sort/Sort';
import './Products.css'

const Products = () => {
 
  
  return (
    <div className="container mx-auto">
      <div className=" grid-filter-column">
        {/*-------- section 1 --------*/}
        <section>
          <FilterSection></FilterSection>
        </section>

        {/*-------- section 2 --------*/}
        <section className="product-view-sort">
          {/* section2 (part 1) */}
          <div className="sort-filter">
            <Sort></Sort>
          </div>
          {/* section2 (part 2) */}
          <div className="main-product">
               <GridView></GridView>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
