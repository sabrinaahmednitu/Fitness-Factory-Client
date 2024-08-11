import { useNavigate } from 'react-router-dom';
const Success = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg animate__animated animate__bounceIn">
        <div className="bg-black rounded-2xl">
          <svg
            className="w-16 h-16 text-green-500 mx-auto mb-4 animate__animated animate__tada animate__delay-1s"
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
        <h2 className="text-3xl font-bold text-gray-800 mb-2 animate__animated animate__fadeIn animate__delay-2s">
          Congratulations !
        </h2>
        <h2 className="text-3xl font-bold text-green-500 mb-2 animate__animated animate__fadeIn animate__delay-2s">
          Order Placed Successfully!
        </h2>

        <p className="text-gray-600 animate__animated animate__fadeInUp animate__delay-3s">
          Thank you for your purchase. We are processing your order.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-6 px-5 py-3 bg-gray-500 text-white font-bold rounded-lg hover:bg-green-600 transition duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-4s"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
