import { useNavigate } from 'react-router-dom';
import 'animate.css';

const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg animate__animated animate__bounceIn">
        <div className="rounded-full h-[120px] w-[120px] border-4 border-green-500 mx-auto">
          <svg
            className="w-18 h-24 text-green-500 mt-2 mx-auto animate__animated animate__tada animate__delay-1s"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2 mt-3 ">
          Congratulations
        </h2>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600">
          Thank you for your purchase. We are processing your order.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-5 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-green-600 "
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
