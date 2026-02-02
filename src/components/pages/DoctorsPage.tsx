import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Doctors } from '@/entities';
import { ArrowRight, Award } from 'lucide-react';

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctors[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDoctors();
  }, []);

  const loadDoctors = async () => {
    setIsLoading(true);
    try {
      const result = await BaseCrudService.getAll<Doctors>('doctors');
      setDoctors(result.items);
    } catch (error) {
      console.error('Error loading doctors:', error);
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
            Our Medical Team
          </h1>
          <p className="font-paragraph text-xl text-primary/80 leading-relaxed">
            Meet our board-certified physicians dedicated to providing exceptional care
          </p>
        </motion.div>
      </section>

      {/* Doctors Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 pb-24 min-h-[600px]">
        {isLoading ? null : doctors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background border border-primary/10 overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                {doctor.profileImage && (
                  <Image
                    src={doctor.profileImage}
                    alt={doctor.doctorName || 'Doctor'}
                    width={600}
                    className="w-full h-80 object-cover"
                  />
                )}
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="font-heading text-2xl text-primary mb-2">
                      {doctor.doctorName}
                    </h2>
                    <p className="font-paragraph text-base text-linkcolor font-semibold">
                      {doctor.specialization}
                    </p>
                  </div>
                  
                  {doctor.yearsOfExperience && (
                    <div className="flex items-center gap-2 text-primary/70">
                      <Award className="w-4 h-4" />
                      <span className="font-paragraph text-sm">
                        {doctor.yearsOfExperience} years of experience
                      </span>
                    </div>
                  )}

                  <Link
                    to={`/doctors/${doctor._id}`}
                    className="inline-flex items-center gap-2 text-linkcolor font-paragraph text-base hover:gap-3 transition-all duration-300"
                  >
                    View Profile
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
              No doctors available at the moment
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
              Schedule Your Consultation
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-2xl mx-auto">
              Book an appointment with one of our specialists today
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
