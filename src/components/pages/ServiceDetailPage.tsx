import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { MedicalServices } from '@/entities';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [service, setService] = useState<MedicalServices | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadService();
  }, [id]);

  const loadService = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const data = await BaseCrudService.getById<MedicalServices>('medicalservices', id);
      setService(data);
    } catch (error) {
      console.error('Error loading service:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const benefitsList = service?.benefits?.split('\n').filter(b => b.trim()) || [];
  const preparationList = service?.preparationInstructions?.split('\n').filter(p => p.trim()) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 py-24 min-h-[600px]">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        ) : !service ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h2 className="font-heading text-3xl text-primary mb-4">Service Not Found</h2>
            <p className="font-paragraph text-lg text-primary/70 mb-8">
              The service you're looking for doesn't exist
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-buttonborder text-primary font-paragraph hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </motion.div>
        ) : (
          <>
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-linkcolor font-paragraph text-base hover:gap-3 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Services
              </Link>
            </motion.div>

            {/* Service Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h1 className="font-heading text-5xl lg:text-6xl text-primary mb-6">
                {service.serviceName}
              </h1>
              <p className="font-paragraph text-xl text-primary/80 leading-relaxed max-w-4xl">
                {service.shortDescription}
              </p>
            </motion.div>

            {/* Featured Image */}
            {service.featuredImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-16"
              >
                <Image
                  src={service.featuredImage}
                  alt={service.serviceName || 'Medical service'}
                  width={1600}
                  className="w-full h-[500px] object-cover"
                />
              </motion.div>
            )}

            {/* Detailed Description */}
            {service.detailedDescription && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-16"
              >
                <h2 className="font-heading text-3xl text-primary mb-6">
                  About This Service
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="font-paragraph text-lg text-primary/80 leading-relaxed whitespace-pre-line">
                    {service.detailedDescription}
                  </p>
                </div>
              </motion.section>
            )}

            {/* Benefits and Preparation Grid */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Benefits */}
              {benefitsList.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-secondary p-8"
                >
                  <h2 className="font-heading text-3xl text-primary mb-6">
                    Benefits
                  </h2>
                  <ul className="space-y-4">
                    {benefitsList.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}

              {/* Preparation Instructions */}
              {preparationList.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="bg-secondary p-8"
                >
                  <h2 className="font-heading text-3xl text-primary mb-6">
                    Preparation Instructions
                  </h2>
                  <ul className="space-y-4">
                    {preparationList.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1 font-paragraph text-sm">
                          {index + 1}
                        </div>
                        <span className="font-paragraph text-base text-secondary-foreground leading-relaxed">
                          {instruction}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.section>
              )}
            </div>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-primary p-12 text-center"
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-primary-foreground mb-6">
                Ready to Schedule This Service?
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Book an appointment with our specialists to discuss your needs
              </p>
              <Link
                to="/appointment"
                className="inline-block px-10 py-5 bg-primary-foreground text-primary font-paragraph text-lg hover:bg-primary-foreground/90 transition-all duration-300"
              >
                Book Appointment
              </Link>
            </motion.section>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
