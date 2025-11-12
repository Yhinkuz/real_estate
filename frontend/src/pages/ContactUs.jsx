import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+234 810 000 0000", "+234 810 000 0001"],
      link: "tel:+2348100000000"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["info@starterhomes.ng", "support@starterhomes.ng"],
      link: "mailto:info@starterhomes.ng"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Address",
      details: ["Plot 123, Victoria Island", "Lagos, Nigeria"],
      link: null
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      link: null
    }
  ];

  const offices = [
    {
      city: "Lagos",
      address: "123 Victoria Island, Lagos State",
      phone: "+234 810 000 0000",
      email: "lagos@starterhomes.ng"
    },
    {
      city: "Abuja",
      address: "45 Maitama District, FCT Abuja",
      phone: "+234 810 000 0001",
      email: "abuja@starterhomes.ng"
    },
    {
      city: "Port Harcourt",
      address: "78 GRA Phase 2, Rivers State",
      phone: "+234 810 000 0002",
      email: "ph@starterhomes.ng"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 text-blue-600">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 text-sm">
                  {info.link && idx === 0 ? (
                    <a href={info.link} className="hover:text-blue-600 transition">
                      {detail}
                    </a>
                  ) : (
                    detail
                  )}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                <p className="text-gray-600 text-center">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 810 000 0000"
                      className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    required
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Map & Additional Info */}
          <div className="space-y-6">
            {/* Map Placeholder */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Visit Our Office</h3>
                <p className="text-gray-600">
                  Come visit us at our head office in Lagos. Our team is ready to help you find your dream property.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Response Time</h4>
                  <p className="text-sm text-gray-600">We typically respond within 24 hours on business days.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Emergency Contact</h4>
                  <p className="text-sm text-gray-600">For urgent matters, call our hotline: +234 810 000 0000</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Property Viewing</h4>
                  <p className="text-sm text-gray-600">Schedule property viewings by appointment only.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offices Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Office Locations</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 text-sm hover:text-blue-600">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 text-sm hover:text-blue-600">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection of properties and find your perfect home today
          </p>
          <a 
            href="/"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Browse Properties
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;