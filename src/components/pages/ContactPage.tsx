import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
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
            Contact Us
          </h1>
          <p className="font-paragraph text-xl text-primary/80 leading-relaxed">
            We're here to help. Reach out to us for any questions or concerns
          </p>
        </motion.div>
      </section>

      {/* Contact Info Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-secondary p-8 space-y-4"
          >
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="font-heading text-xl text-primary">
              Our Location
            </h3>
            <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
              123 Medical Center Drive<br />
              Healthcare City, HC 12345<br />
              United States
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-secondary p-8 space-y-4"
          >
            <Phone className="w-8 h-8 text-primary" />
            <h3 className="font-heading text-xl text-primary">
              Phone
            </h3>
            <div className="space-y-2">
              <div>
                <div className="font-paragraph text-sm text-secondary-foreground/70">
                  Main Line
                </div>
                <a 
                  href="tel:+1234567890"
                  className="font-paragraph text-base text-primary hover:text-linkcolor transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div>
                <div className="font-paragraph text-sm text-secondary-foreground/70">
                  Emergency
                </div>
                <a 
                  href="tel:911"
                  className="font-paragraph text-base text-primary hover:text-linkcolor transition-colors"
                >
                  911
                </a>
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-secondary p-8 space-y-4"
          >
            <Mail className="w-8 h-8 text-primary" />
            <h3 className="font-heading text-xl text-primary">
              Email
            </h3>
            <div className="space-y-2">
              <div>
                <div className="font-paragraph text-sm text-secondary-foreground/70">
                  General Inquiries
                </div>
                <a 
                  href="mailto:info@healthcare.com"
                  className="font-paragraph text-base text-primary hover:text-linkcolor transition-colors break-all"
                >
                  info@healthcare.com
                </a>
              </div>
              <div>
                <div className="font-paragraph text-sm text-secondary-foreground/70">
                  Appointments
                </div>
                <a 
                  href="mailto:appointments@healthcare.com"
                  className="font-paragraph text-base text-primary hover:text-linkcolor transition-colors break-all"
                >
                  appointments@healthcare.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-secondary p-8 space-y-4"
          >
            <Clock className="w-8 h-8 text-primary" />
            <h3 className="font-heading text-xl text-primary">
              Office Hours
            </h3>
            <div className="space-y-2 font-paragraph text-base text-secondary-foreground">
              <div>
                <div className="text-sm text-secondary-foreground/70">Mon - Fri</div>
                <div>8:00 AM - 6:00 PM</div>
              </div>
              <div>
                <div className="text-sm text-secondary-foreground/70">Saturday</div>
                <div>9:00 AM - 2:00 PM</div>
              </div>
              <div>
                <div className="text-sm text-secondary-foreground/70">Sunday</div>
                <div>Closed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center">
            <h2 className="font-heading text-4xl text-primary mb-4">
              Find Us on the Map
            </h2>
            <p className="font-paragraph text-lg text-primary/80">
              Conveniently located in the heart of Healthcare City
            </p>
          </div>

          <div className="w-full h-[500px] bg-secondary flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648750455!2d-73.98784368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HealthCare Medical Center Location"
            />
          </div>
        </motion.div>
      </section>

      {/* Departments Section */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl text-primary mb-4">
              Department Contacts
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground">
              Direct lines to our specialized departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { dept: 'Cardiology', phone: '+1 (234) 567-891', email: 'cardiology@healthcare.com' },
              { dept: 'Neurology', phone: '+1 (234) 567-892', email: 'neurology@healthcare.com' },
              { dept: 'Emergency', phone: '+1 (234) 567-893', email: 'emergency@healthcare.com' },
              { dept: 'Pediatrics', phone: '+1 (234) 567-894', email: 'pediatrics@healthcare.com' },
              { dept: 'Dental Care', phone: '+1 (234) 567-895', email: 'dental@healthcare.com' },
              { dept: 'General Medicine', phone: '+1 (234) 567-896', email: 'general@healthcare.com' }
            ].map((dept, index) => (
              <motion.div
                key={dept.dept}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-6 space-y-3"
              >
                <h3 className="font-heading text-xl text-primary">
                  {dept.dept}
                </h3>
                <div className="space-y-2">
                  <a 
                    href={`tel:${dept.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 font-paragraph text-sm text-primary/80 hover:text-linkcolor transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {dept.phone}
                  </a>
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center gap-2 font-paragraph text-sm text-primary/80 hover:text-linkcolor transition-colors break-all"
                  >
                    <Mail className="w-4 h-4" />
                    {dept.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
