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
                className="w-full !bg-[#FDC435] text-black py-4 px-6 rounded-lg font-semibold "
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
