import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Award, Users, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { icon: Users, value: '50+', label: 'Expert Physicians' },
    { icon: Heart, value: '100K+', label: 'Patients Treated' },
    { icon: Award, value: '35+', label: 'Years of Excellence' },
    { icon: TrendingUp, value: '98%', label: 'Patient Satisfaction' }
  ];

  const values = [
    {
      title: 'Patient-Centered Care',
      description: 'Every decision we make prioritizes your health, comfort, and well-being'
    },
    {
      title: 'Medical Excellence',
      description: 'Our team maintains the highest standards of clinical expertise and innovation'
    },
    {
      title: 'Compassionate Service',
      description: 'We treat every patient with dignity, respect, and genuine care'
    },
    {
      title: 'Collaborative Approach',
      description: 'Working together with patients and families for optimal health outcomes'
    }
  ];

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
            About HealthCare Medical Center
          </h1>
          <p className="font-paragraph text-xl text-primary/80 leading-relaxed">
            Dedicated to providing exceptional healthcare services with compassion, integrity, and clinical excellence since 1985
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-secondary py-16">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center space-y-3"
                >
                  <Icon className="w-10 h-10 text-primary mx-auto" />
                  <div className="font-heading text-4xl text-primary">{stat.value}</div>
                  <div className="font-paragraph text-base text-secondary-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://static.wixstatic.com/media/29acf2_d2570b73179e46d59ee07b4c611fb4f1~mv2.png?originWidth=768&originHeight=448"
              alt="Medical professionals collaborating in modern hospital setting"
              width={800}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-primary">
              Our Mission
            </h2>
            <p className="font-paragraph text-lg text-primary/80 leading-relaxed">
              To deliver comprehensive, patient-centered healthcare that combines medical expertise with compassionate service. We are committed to improving the health and well-being of every individual we serve.
            </p>
            <p className="font-paragraph text-lg text-primary/80 leading-relaxed">
              Through continuous innovation, education, and collaboration, we strive to set the standard for excellence in healthcare delivery while maintaining the personal touch that makes our patients feel valued and cared for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-secondary py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-primary mb-6">
              Our Core Values
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 space-y-4"
              >
                <h3 className="font-heading text-2xl text-primary">
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-primary/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-[100rem] mx-auto px-6 lg:px-12 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl text-primary mb-6">
            Our Medical Team
          </h2>
          <p className="font-paragraph text-lg text-primary/80 max-w-3xl mx-auto">
            Board-certified physicians and healthcare professionals dedicated to your well-being
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-12 items-start"
        >
          <div className="lg:col-span-2 space-y-6">
            <p className="font-paragraph text-lg text-primary/80 leading-relaxed">
              Our multidisciplinary team brings together specialists from various fields of medicine, all committed to providing integrated, comprehensive care. Each physician is board-certified and maintains active involvement in continuing medical education to stay current with the latest advances in their specialty.
            </p>
            <p className="font-paragraph text-lg text-primary/80 leading-relaxed">
              Beyond clinical expertise, our team is known for their compassionate approach to patient care. We believe in taking the time to listen, explain treatment options clearly, and involve patients in every decision about their health.
            </p>
          </div>

          <div className="bg-secondary p-8 space-y-4">
            <h3 className="font-heading text-2xl text-primary">
              Meet Our Doctors
            </h3>
            <p className="font-paragraph text-base text-secondary-foreground leading-relaxed">
              Learn more about our experienced physicians and their specializations
            </p>
            <a
              href="/doctors"
              className="inline-block px-6 py-3 border-2 border-buttonborder text-primary font-paragraph text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View Doctor Profiles
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
