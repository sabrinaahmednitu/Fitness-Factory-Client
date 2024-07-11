

import { NavLink, useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '@/redux/Api/baseApi';
import { TbReplace, TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import AddToCart from '../AddToCart/AddToCart';



const SingleProduct = () => {
  
const { id } = useParams();
const { data: product, isLoading } = useGetSingleProductQuery(id);

if (isLoading) {
  return <div>Loading...</div>;
}
 if (!product) {
   return <div>Product not found</div>;
 }

  return (
    <div>
      <section className="container mx-auto max-w-5xl mt-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
          <div className="product_image">
            <img src={product?.images} alt="" />
          </div>
          <div className="product_data text-black p-5">
            <h1 className="text-4xl mb-3">
              {product?.name}
            </h1>
            {/* <Stars stars={stars} reviews={reviews}></Stars> */}
            <p className="product-real-price font-bold text-indigo-500 mb-3">
              Deal of the Day : <p>{product?.price}</p>
            </p>
            <h1>{product?.description}</h1>
            <div className="product-data-warranty flex mt-5 mb-5">
              <div>
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Free Delivery</p>
              </div>
              <div>
                <TbReplace className="text-3xl"></TbReplace>
                <p>Free Delivery</p>
              </div>
              <div>
                <TbTruckDelivery className="text-3xl"></TbTruckDelivery>
                <p>Your Delivery</p>
              </div>
              <div>
                <MdSecurity className="text-3xl"></MdSecurity>
                <p>Year Warranty</p>
              </div>
            </div>
            <hr />

            <div className="product-data-info mt-4 mb-4">
              <p>
                Available :{' '}
                <span className="font-bold">
                  {product?.stock > 0 ? 'In Stock' : 'Not Availavle'}
                </span>{' '}
              </p>
            </div>
            <hr />
            {product.stock > 0 && (
              <NavLink
                to="/cart">
                <button className="addButton">Add To Cart</button>
              </NavLink>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
