import { memo } from 'react';

const Contact = () => {
  return (
    <section id="contacts" className="py-16 px-4 bg-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-black text-center mb-12">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">Get In Touch</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-black py-4 px-6 rounded-lg font-semibold hover:bg-accent transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-black">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">📧</span>
                </div>
                <div>
                  <p className="text-black font-semibold">Email</p>
                  <p className="text-black">romdenielle.navarro@example.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">📱</span>
                </div>
                <div>
                  <p className="text-black font-semibold">Phone</p>
                  <p className="text-black">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-black font-bold">📍</span>
                </div>
                <div>
                  <p className="text-black font-semibold">Location</p>
                  <p className="text-black">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
