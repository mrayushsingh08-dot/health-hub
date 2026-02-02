import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        reason: ''
      });
      setSubmitSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <h1 className="font-heading text-5xl lg:text-6xl text-primary">
            Book an Appointment
          </h1>
          <p className="font-paragraph text-xl text-primary/80 leading-relaxed">
            Schedule your visit with our healthcare professionals
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="flex items-center gap-2 font-paragraph text-base text-primary">
                  <User className="w-4 h-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-background text-primary font-paragraph focus:border-primary focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="flex items-center gap-2 font-paragraph text-base text-primary">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-background text-primary font-paragraph focus:border-primary focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="flex items-center gap-2 font-paragraph text-base text-primary">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-background text-primary font-paragraph focus:border-primary focus:outline-none transition-colors"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              {/* Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="flex items-center gap-2 font-paragraph text-base text-primary">
                    <Calendar className="w-4 h-4" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-primary/20 bg-background text-primary font-paragraph focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="time" className="flex items-center gap-2 font-paragraph text-base text-primary">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-primary/20 bg-background text-primary font-paragraph focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="15:00">03:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                    <option value="17:00">05:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Reason */}
              <div className="space-y-2">
                <label htmlFor="reason" className="flex items-center gap-2 font-paragraph text-base text-primary">
                  <MessageSquare className="w-4 h-4" />
                  Reason for Visit
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-primary/20 bg-background text-primary font-paragraph focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Please describe your symptoms or reason for visit"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className="w-full px-8 py-4 border-2 border-buttonborder text-primary font-paragraph text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : submitSuccess ? 'Appointment Requested!' : 'Request Appointment'}
              </button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-secondary text-secondary-foreground font-paragraph text-center"
                >
                  Thank you! We'll contact you shortly to confirm your appointment.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-secondary p-8 space-y-6">
              <h2 className="font-heading text-2xl text-primary">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-paragraph text-sm text-secondary-foreground/70 mb-1">
                      Call Us
                    </div>
                    <a 
                      href="tel:+1234567890"
                      className="font-paragraph text-base text-primary hover:text-linkcolor transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-paragraph text-sm text-secondary-foreground/70 mb-1">
                      Email Us
                    </div>
                    <a 
                      href="mailto:appointments@healthcare.com"
                      className="font-paragraph text-base text-primary hover:text-linkcolor transition-colors"
                    >
                      appointments@healthcare.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-secondary p-8 space-y-6">
              <h2 className="font-heading text-2xl text-primary">
                Office Hours
              </h2>
              <div className="space-y-3 font-paragraph text-base text-secondary-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-primary p-8 space-y-4">
              <h3 className="font-heading text-xl text-primary-foreground">
                Emergency Care
              </h3>
              <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed">
                For medical emergencies, please call 911 or visit our emergency department immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
