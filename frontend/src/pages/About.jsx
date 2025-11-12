import { Home, Users, Award, TrendingUp, Shield, Heart } from "lucide-react";

function About() {
  const stats = [
    { number: "500+", label: "Properties Listed" },
    { number: "1000+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Expert Agents" }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Trust & Transparency",
      description: "We believe in honest dealings and clear communication throughout your property journey."
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: "Customer First",
      description: "Your satisfaction is our priority. We go the extra mile to ensure you find your dream home."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Quality Assurance",
      description: "Every property is carefully vetted to meet our high standards of quality and value."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "Market Expertise",
      description: "Our team stays ahead of market trends to provide you with the best investment opportunities."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Starter Homes</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect property across Nigeria
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded with a vision to revolutionize the Nigerian real estate market, 
                <strong> Starter Homes</strong> has grown from a small startup to one of 
                the most trusted property platforms in the country.
              </p>
              <p>
                We understand that buying or renting a property is one of life's biggest 
                decisions. That's why we've built a platform that combines cutting-edge 
                technology with personalized service to make your property search seamless 
                and stress-free.
              </p>
              <p>
                Whether you're looking for a luxury apartment in Abuja, a family home in 
                Lagos, or a commercial space in Port Harcourt, we have the expertise and 
                inventory to help you find exactly what you need.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-lg p-8 text-white shadow-xl">
              <Home className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To help every Nigerian find their perfect property while ensuring 
                transparency, affordability, and comfort at every step of the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Sets Us Apart
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="text-center mb-12">
          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced team of real estate professionals is dedicated to helping 
            you make informed decisions and find properties that match your dreams and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: "Adebayo Johnson", role: "CEO & Founder", image: "https://ui-avatars.com/api/?name=Adebayo+Johnson&size=200&background=2563eb&color=fff" },
            { name: "Chioma Okafor", role: "Head of Sales", image: "https://ui-avatars.com/api/?name=Chioma+Okafor&size=200&background=2563eb&color=fff" },
            { name: "Ibrahim Yusuf", role: "Property Manager", image: "https://ui-avatars.com/api/?name=Ibrahim+Yusuf&size=200&background=2563eb&color=fff" }
          ].map((member, index) => (
            <div key={index} className="text-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <img 
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-blue-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Starter Home?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who found their perfect property with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Browse Properties
            </a>
            <a 
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;