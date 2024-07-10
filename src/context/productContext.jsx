import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../reducer/productReducer';

const AppContext = createContext();

const API = 'http://localhost:5000/electronicProduct';

const initialState = {
  isLoading: false,
  isError: false,
  products: [], //sob product data akta array te chilo tai []
  featureProducts: [], //sudhu feature product gulo
  singleProduct: {}, //sudhu single product tai {object debo}
};

//delivery man
const AppProvider = ({ children }) => {
  //const [count,setCount]=useState([])
  const [state, dispatch] = useReducer(reducer, initialState);

  //my 1st api call for products
  const getProducts = async (url) => { //API k url bole get kora hoiche
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(url);
      const products = await res.data;  //product is  data array
      dispatch({ type: 'SET_API_DATA', payload: products }); //products data payload e pathay dechi and reducer e products state e set kore dechi
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  };

  //my second api call for single products
  const getSingleProduct = async (url) => {
    dispatch({ type: 'SET_SINGLE_LOADING' });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
    } catch (error) {
      dispatch({ type: 'SET_SINGLE_ERROR' });
    }
  };

  //my 1st api call for products
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useProductContext = () => {
  return useContext(AppContext);
  //  const myname = useContext(AppContext) ai line er poriborte oi last part bosbe;
};

export { AppProvider, AppContext, useProductContext };
