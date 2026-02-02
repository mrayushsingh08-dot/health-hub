import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Doctors } from '@/entities';
import { ArrowLeft, Award, Calendar, Stethoscope } from 'lucide-react';

export default function DoctorDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctors | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDoctor();
  }, [id]);

  const loadDoctor = async () => {
    if (!id) return;
    setIsLoading(true);
    try {
      const data = await BaseCrudService.getById<Doctors>('doctors', id);
      setDoctor(data);
    } catch (error) {
      console.error('Error loading doctor:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 py-24 min-h-[600px]">
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        ) : !doctor ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <h2 className="font-heading text-3xl text-primary mb-4">Doctor Not Found</h2>
            <p className="font-paragraph text-lg text-primary/70 mb-8">
              The doctor profile you're looking for doesn't exist
            </p>
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-buttonborder text-primary font-paragraph hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Doctors
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
                to="/doctors"
                className="inline-flex items-center gap-2 text-linkcolor font-paragraph text-base hover:gap-3 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Doctors
              </Link>
            </motion.div>

            {/* Doctor Profile */}
            <div className="grid lg:grid-cols-5 gap-12 mb-16">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                {doctor.profileImage && (
                  <Image
                    src={doctor.profileImage}
                    alt={doctor.doctorName || 'Doctor'}
                    width={800}
                    className="w-full h-[600px] object-cover"
                  />
                )}
              </motion.div>

              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-3 space-y-8"
              >
                <div>
                  <h1 className="font-heading text-5xl lg:text-6xl text-primary mb-4">
                    {doctor.doctorName}
                  </h1>
                  <p className="font-paragraph text-2xl text-linkcolor font-semibold">
                    {doctor.specialization}
                  </p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                  {doctor.yearsOfExperience && (
                    <div className="bg-secondary p-6 space-y-3">
                      <Award className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-heading text-3xl text-primary">
                          {doctor.yearsOfExperience}+
                        </div>
                        <div className="font-paragraph text-base text-secondary-foreground">
                          Years of Experience
                        </div>
                      </div>
                    </div>
                  )}

                  {doctor.specialization && (
                    <div className="bg-secondary p-6 space-y-3">
                      <Stethoscope className="w-8 h-8 text-primary" />
                      <div>
                        <div className="font-heading text-xl text-primary">
                          Specialization
                        </div>
                        <div className="font-paragraph text-base text-secondary-foreground">
                          {doctor.specialization}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Biography */}
                {doctor.biography && (
                  <div className="space-y-4">
                    <h2 className="font-heading text-3xl text-primary">
                      About
                    </h2>
                    <p className="font-paragraph text-lg text-primary/80 leading-relaxed whitespace-pre-line">
                      {doctor.biography}
                    </p>
                  </div>
                )}

                {/* Availability */}
                {doctor.availabilitySchedule && (
                  <div className="bg-secondary p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-primary" />
                      <h2 className="font-heading text-2xl text-primary">
                        Availability Schedule
                      </h2>
                    </div>
                    <p className="font-paragraph text-base text-secondary-foreground leading-relaxed whitespace-pre-line">
                      {doctor.availabilitySchedule}
                    </p>
                  </div>
                )}
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-primary p-12 text-center"
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-primary-foreground mb-6">
                Book an Appointment with {doctor.doctorName?.split(' ')[0]}
              </h2>
              <p className="font-paragraph text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Schedule your consultation today and take the first step towards better health
              </p>
              <Link
                to="/appointment"
                className="inline-block px-10 py-5 bg-primary-foreground text-primary font-paragraph text-lg hover:bg-primary-foreground/90 transition-all duration-300"
              >
                Schedule Appointment
              </Link>
            </motion.section>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}
