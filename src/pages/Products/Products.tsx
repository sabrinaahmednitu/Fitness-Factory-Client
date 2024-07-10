import { useSelector } from 'react-redux';
import FilterSection from '@/components/Product/FilterSection/FilterSection';
import GridView from '@/components/Product/GridView/GridView';
import Sort from '@/components/Product/Sort/Sort';
import './Products.css';

const Products = () => {
  const { filter_products, isLoading } = useSelector((state) => state.filter);

  if (isLoading) {
    return <p className="text-2xl text-center text-red-500">Loading .... </p>;
  }

  return (
    <div className="container mx-auto">
      <div className="grid-filter-column">
        <section>
          <FilterSection />
        </section>
        <section className="product-view-sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <GridView products={filter_products} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
