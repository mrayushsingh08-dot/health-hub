import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { MedicalServices } from '@/entities';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [services, setServices] = useState<MedicalServices[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<MedicalServices>('medicalservices');
      setServices(result.items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
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
            Our Medical Services
          </h1>
          <p className="font-paragraph text-xl text-primary/80 leading-relaxed">
            Comprehensive healthcare solutions delivered by expert physicians using advanced medical technology
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 pb-24 min-h-[600px]">
        {isLoading ? null : services.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-primary/10 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {service.featuredImage && (
                  <Image
                    src={service.featuredImage}
                    alt={service.serviceName || 'Medical service'}
                    width={600}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6 space-y-4">
                  <h2 className="font-heading text-2xl text-primary">
                    {service.serviceName}
                  </h2>
                  <p className="font-paragraph text-base text-primary/80 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <Link
                    to={`/services/${service._id}`}
                    className="inline-flex items-center gap-2 text-linkcolor font-paragraph text-base hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="font-paragraph text-xl text-primary/60">
              No services available at the moment
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="w-full bg-secondary py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-primary">
              Need Medical Assistance?
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-2xl mx-auto">
              Schedule an appointment with our specialists today
            </p>
            <Link
              to="/appointment"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-buttonborder text-primary font-paragraph text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
