import FilterSection from '@/components/Product/FilterSection/FilterSection';
import ProductList from '@/components/Product/ProductList/ProductList';
import Sort from '@/components/Product/Sort/Sort';

const Products = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className=" grid-filter-column bg-red-500">
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
              <ProductList></ProductList>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Products;
