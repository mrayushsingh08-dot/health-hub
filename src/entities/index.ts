/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: doctors
 * Interface for Doctors
 */
export interface Doctors {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  doctorName?: string;
  /** @wixFieldType text */
  specialization?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  profileImage?: string;
  /** @wixFieldType text */
  biography?: string;
  /** @wixFieldType number */
  yearsOfExperience?: number;
  /** @wixFieldType text */
  availabilitySchedule?: string;
}


/**
 * Collection ID: medicalservices
 * Interface for MedicalServices
 */
export interface MedicalServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  featuredImage?: string;
  /** @wixFieldType text */
  benefits?: string;
  /** @wixFieldType text */
  preparationInstructions?: string;
}
