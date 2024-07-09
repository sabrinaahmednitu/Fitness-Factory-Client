
import { FaQuoteLeft } from 'react-icons/fa'; // Example: Using Font Awesome for icons (install as needed)
import companyImage from '../assets/company-image.jpg'; // Example: Replace with your company image

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    bio: 'Alice has over 15 years of experience in the fitness industry. She is passionate about helping people achieve their health and fitness goals.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // Example: Replace with actual images
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: 'Bob is a tech enthusiast with a strong background in software development. He leads our tech team in building a seamless shopping experience.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg', // Example: Replace with actual images
  },
  {
    name: 'Carol Davis',
    role: 'CMO',
    bio: 'Carol has a knack for marketing and has been instrumental in growing our brand presence. She loves connecting with our customers.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg', // Example: Replace with actual images
  },
];

const testimonials = [
  {
    id: 1,
    text: 'Fantastic service and top-notch fitness equipment. I highly recommend this store to all fitness enthusiasts!',
    author: 'John Doe',
  },
  {
    id: 2,
    text: 'Great customer support and fast delivery. The products are of excellent quality.',
    author: 'Jane Smith',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            About Our Company
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="max-w-md mx-auto md:mr-8 mb-4 md:mb-0">
              <img
                src={companyImage}
                alt="Company"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="max-w-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum feugiat justo ac est lacinia, sed ultrices velit
                consectetur. Aliquam erat volutpat. Duis at felis nec sapien
                condimentum lobortis ut sed nunc.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full h-24 w-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-center">{member.role}</p>
                <p className="text-gray-600 text-center mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  <FaQuoteLeft className="text-2xl text-gray-400 mr-2" />
                  {testimonial.text}
                </p>
                <p className="text-gray-600 text-right mt-4">{`- ${testimonial.author}`}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="max-w-md mx-auto md:mr-8 mb-4 md:mb-0">
              <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                Have questions or feedback? Feel free to reach out to us.
              </p>
            </div>
            <div className="max-w-lg">
              <p className="text-lg text-gray-700 leading-relaxed text-center md:text-right">
                Email: contact@fitnessequip.com <br />
                Phone: (123) 456-7890 <br />
                Address: 123 Fitness St, Workout City, XY 12345
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
