import { Link } from "react-router-dom";
import herobg from "../assets/Home/hero-bg.png";
import path3 from "../assets/Home/Path 3.svg";
import scissor from "../assets/Home/icon scissors.svg";
import path2 from "../assets/Home/Path 2.svg";
import mustache from "../assets/Home/icon mustache.svg";
import down from "../assets/Home/down.svg";
import {
  ScissorsIcon,
  PencilIcon,
  CalendarIcon,
  ArrowRightIcon,
  BoxIcon,
} from "lucide-react";
import ServiceCard from "../components/services/ServiceCard";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import BlogPreview from "../components/blog/BlogPreview";
const HomePage = () => {
  // Mock data for services
  const services = [
    {
      id: 1,
      title: "Haircut & Styling",
      description:
        "Professional haircuts and styling for all hair types and preferences.",
      icon: ScissorsIcon,
      price: "From $30",
      imageUrl:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      title: "Beard Trim & Grooming",
      description:
        "Expert beard trimming and grooming services for the perfect facial hair.",
      icon: BoxIcon,
      price: "From $20",
      imageUrl:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      title: "Custom Tattoos",
      description:
        "Personalized tattoo designs from our talented artists in various styles.",
      icon: PencilIcon,
      price: "From $80",
      imageUrl:
        "https://images.unsplash.com/photo-1598371839696-5d0121b834ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Regular Customer",
      content:
        "Niyo Salon has been my go-to place for haircuts for over a year now. The staff is professional and the results are always amazing!",
      rating: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 2,
      name: "Jamie Smith",
      role: "First-time Client",
      content:
        "I was nervous about getting my first tattoo, but the artists at Niyo made me feel comfortable and delivered exactly what I wanted.",
      rating: 5,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
    {
      id: 3,
      name: "Taylor Morgan",
      role: "Monthly Visitor",
      content:
        "The beard grooming service is top-notch. I always leave looking sharp and feeling confident.",
      rating: 4,
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80",
    },
  ];
  // Mock data for blog posts
  const blogPosts = [
    {
      id: 1,
      title: "2023 Hair Trends You Need to Try",
      excerpt:
        "Discover the hottest hair trends of the year and how to achieve these looks.",
      imageUrl:
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "Tattoo Aftercare: Essential Tips",
      excerpt:
        "Learn how to properly care for your new tattoo to ensure it heals perfectly.",
      imageUrl:
        "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "May 28, 2023",
    },
    {
      id: 3,
      title: "The Art of Beard Maintenance",
      excerpt:
        "Expert tips on how to keep your beard looking its best between salon visits.",
      imageUrl:
        "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      date: "May 10, 2023",
    },
  ];
  return (
    <div className="w-full bg-[#212121]">
      {/* Hero Section 01 */}
      <section
        className="bg-cover bg-center text-white text-center pt-10"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        <section className="border-b-1 border-white-100 pt-10">
          <div className="flex justify-center items-center gap-8 py-[40px]">
            <img
              src={path3}
              alt="Left Decoration"
              className="w-[113.48px] h-[87.935px] flex-shrink-0 [stroke-width:4.001px] [stroke:rgba(247,191,36,0.91)]"
            />
            <img
              src={scissor}
              alt="Scissors Icon"
              className="flex flex-col items-center gap-[94px] px-[20px] mt-[-80px]"
            />
            <img
              src={path2}
              alt="Right Decoration"
              className="w-[113.48px] h-[87.935px]  flex-shrink-0 [stroke-width:4.001px] [stroke:rgba(247,191,36,0.91)]"
            />
          </div>

          <h1 className="text-white text-center [leading-trim:both] [text-edge:cap] font-abril text-[120px] font-semibold leading-none tracking-[6px]">
            NIYO SALON
          </h1>

          <div className="flex flex-col items-center relative w-full mt-8">
            {/* Mustache Icon */}
            <img
              src={mustache}
              alt="Mustache"
              className="w-[171.98px] y-[54.6px] mb-4"
            />

            {/* Center Text */}
            <p className="font-abril text-white text-[30px] md:text-5xl font-medium">
              shaves & trims
            </p>

            {/* Chevron with EST. and 2024 */}
            <div
              className="relative w-full flex justify-center items-center"
              style={{ height: 150 }}
            >
              {/* EST. */}
              <span
                className=" text-yellow-400 font-bold text-xl md:text-2xl"
                style={{ bottom: 0, left: "2rem" }}
              >
                EST.
              </span>
              {/* Chevron SVG */}
              <img
                src={down}
                alt="Chevron"
                className="w-[425.261px] max-w-[500px] mx-auto mt-[-140px]"
                style={{ display: "block" }}
              />

              {/* 2024 */}
              <span
                className=" right-0 text-yellow-400 font-bold text-xl md:text-2xl"
                style={{ bottom: 0, right: "2rem" }}
              >
                2024
              </span>
            </div>
          </div>

          {/* <p className="text-xl italic">shaves & trims</p> */}
          {/* <p className="text-sm mt-2">EST. 2024</p> */}
        </section>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white rounded-2xl shadow-xl overflow-hidden m-4">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight font-inter uppercase drop-shadow-lg">
              Transform Your Look
              <br />
              at Niyo Salon
            </h1>
            <p className="text-2xl mb-10 font-medium text-gray-200 max-w-2xl mx-auto md:mx-0">
              Premium hair styling and custom tattoo artistry in one
              destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <Link
                to="/appointments"
                className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3 rounded-full font-bold flex items-center justify-center shadow-lg transition-all duration-200 border-2 border-yellow-400 hover:border-yellow-300"
              >
                <CalendarIcon size={20} className="mr-3" />
                Book Appointment
              </Link>
              <Link
                to="/gallery"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-yellow-500 text-white px-8 py-3 rounded-full font-bold transition-all duration-200 flex items-center justify-center shadow-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Discover our range of professional services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/appointments"
              className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900"
            >
              View all services
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Look?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Book an appointment today and let our professional team help you
            achieve the style you've always wanted.
          </p>
          <Link
            to="/appointments"
            className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-flex items-center"
          >
            <CalendarIcon size={18} className="mr-2" />
            Book Now
          </Link>
        </div>
      </section>
      {/* Gallery Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Gallery</h2>
            <p className="mt-4 text-lg text-gray-600">
              Browse through our recent work
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Haircut example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1635273051899-3f76b81f1a31?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Beard trim example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1611501355759-f0e3ce5c7dc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Tattoo example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1626015677293-95388882c900?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Styling example"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900"
            >
              View full gallery
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      {/* Blog Preview Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Style Insights</h2>
            <p className="mt-4 text-lg text-gray-600">
              Latest trends and tips from our blog
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPreview key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center text-purple-700 font-medium hover:text-purple-900"
            >
              Read more articles
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
