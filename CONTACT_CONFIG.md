# Contact Information Configuration Guide

## Overview
All contact details for Gorilla Tech Solution are now centralized in the `src/app/config/app.config.ts` file. To update contact information across the entire application, simply modify the values in this single file.

## How to Update Contact Information

### 1. Edit Configuration File
Open `src/app/config/app.config.ts` and update the `constants.COMPANY` object:

```typescript
export const constants = {
  COMPANY: {
    NAME: 'Your Company Name',
    EMAIL: 'Your@BusinessEmail.com',
    EMAIL_DISPLAY: 'your@displayemail.com',
    PHONE: 'Your Phone Number',
    PHONE_LINK: 'tel:yourphonenumber',
    WHATSAPP: 'https://wa.me/yourphonenumber',
    ADDRESS: 'Your Full Address',
    ADDRESS_SHORT: 'Your City, State Country',
    CITY: 'Your City',
    STATE: 'Your State',
    COUNTRY: 'Your Country',
    PIN: 'Your Postal Code',
    DOMAIN: 'YourDomain.com',
    WEBSITE: 'https://yourdomain.com',
    SOCIAL_LINKS: {
      FACEBOOK: 'https://facebook.com/yourpage',
      INSTAGRAM: 'https://instagram.com/yourpage',
      LINKEDIN: 'https://linkedin.com/company/yourcompany',
      TWITTER: 'https://twitter.com/yourhandle',
      WHATSAPP: 'https://wa.me/yourphonenumber',
      TELEGRAM: 'https://t.me/yourhandle',
      GOOGLE: 'https://business.google.com/yourpage',
      GITHUB: 'https://github.com/yourorganization',
      WIKIPEDIA: 'https://en.wikipedia.org/wiki/Your_Company'
    },
    BUSINESS_HOURS: {
      WEEKDAYS: 'Mon-Fri 9AM-6PM',
      SATURDAY: 'Sat 10AM-4PM',
      SCHEDULE_HOURS: ['Mo-Fr 09:00-18:00', 'Sa 10:00-16:00']
    }
  }
}
```

### 2. What Gets Updated Automatically
When you change the configuration, these components will automatically reflect the new information:

- **Footer Component**: Company name, address, phone, email, social links
- **Contact Page**: All contact information, structured data, business hours
- **About Page**: Company address in structured data and story text
- **Collaboration Page**: Phone number and address
- **All SEO Metadata**: Schema.org structured data across all pages

### 3. Components Using Centralized Config
- `src/components/Footer.tsx`
- `src/pages/Contact.tsx`
- `src/pages/About.tsx`
- `src/pages/CollabWithUs.tsx`
- `src/app/views/components.view.ts`

### 4. Example: Updating Phone Number
To change the phone number everywhere:
1. Open `src/app/config/app.config.ts`
2. Update these fields:
   ```typescript
   PHONE: '1234567890',
   PHONE_LINK: 'tel:1234567890',
   WHATSAPP: 'https://wa.me/1234567890',
   ```
3. Save the file - all components will automatically use the new number

### 5. Example: Updating Address
To change the company address:
1. Update these fields in the config:
   ```typescript
   ADDRESS: 'New Full Address, City, State, Country, PIN',
   ADDRESS_SHORT: 'New City, State, Country',
   CITY: 'New City',
   STATE: 'New State',
   COUNTRY: 'New Country',
   PIN: 'New PIN',
   ```

## Benefits of This Approach
- ✅ Single source of truth for all contact information
- ✅ Consistent data across entire application
- ✅ Easy maintenance and updates
- ✅ Automatic SEO metadata updates
- ✅ No risk of missing updates in individual components
- ✅ Centralized social media links management

## Files That No Longer Need Manual Updates
These files now automatically pull contact information from the config:
- Footer component
- Contact page
- About page
- Collaboration page
- All SEO structured data
- Business hours across the application

Simply update the configuration file and all contact details will be updated throughout the entire application!