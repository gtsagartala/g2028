// Application configuration for Gorilla Tech Solution

export interface AppConfig {
  name: string;
  version: string;
  description: string;
  port: number;
  environment: 'development' | 'production' | 'test';
  apiPrefix: string;
  corsOrigins: string[];
  jwtSecret: string;
  jwtExpiresIn: string;
}

export const appConfig: AppConfig = {
  name: 'Gorilla Tech Solution API',
  version: '1.0.0',
  description: 'Digital Media Solutions API',
  port: 3000,
  environment: 'development',
  apiPrefix: '/api/v1',
  corsOrigins: ['http://localhost:3000'],
  jwtSecret: 'gorilla-tech-secret-key',
  jwtExpiresIn: '24h',
};

export const constants = {
  COMPANY: {
    NAME: 'Gorilla Tech Solution',
    EMAIL: 'Business@GorillaTechSolution.com',
    EMAIL_DISPLAY: 'business@gorillatechsolution.com',
    PHONE: '0381 359 9517',
    PHONE_LINK: 'tel:03813599517',
    WHATSAPP: 'https://wa.me/03813599517',
    ADDRESS: 'Agartala, Tripura (w) India, pin 799006',
    ADDRESS_SHORT: 'Agartala, Tripura (w) India',
    CITY: 'Agartala',
    STATE: 'Tripura',
    COUNTRY: 'India',
    PIN: '799006',
    DOMAIN: 'GorillaTechSolution.com',
    WEBSITE: 'https://gorillatechsolution.com',
    SOCIAL_LINKS: {
      FACEBOOK: 'https://facebook.com/gorillatechsolution',
      INSTAGRAM: 'https://instagram.com/gorillatechsolution',
      LINKEDIN: 'https://linkedin.com/company/gorillatechsolution',
      TWITTER: 'https://twitter.com/gorillatechsol',
      WHATSAPP: 'https://wa.me/03813599517',
      TELEGRAM: 'https://t.me/gorillatechsolution',
      GOOGLE: 'https://business.google.com/gorillatechsolution',
      GITHUB: 'https://github.com/gorillatechsolution',
      WIKIPEDIA: 'https://en.wikipedia.org/wiki/Gorilla_Tech_Solution'
    },
    BUSINESS_HOURS: {
      WEEKDAYS: 'Mon-Fri 9AM-6PM',
      SATURDAY: 'Sat 10AM-4PM',
      SCHEDULE_HOURS: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00']
    }
  },
  PAGINATION: {
    DEFAULT_LIMIT: 10,
    MAX_LIMIT: 100
  },
  FILE_UPLOAD: {
    MAX_SIZE: 5 * 1024 * 1024, // 5MB
    ALLOWED_EXTENSIONS: ['jpg', 'jpeg', 'png', 'gif', 'webp']
  }
};