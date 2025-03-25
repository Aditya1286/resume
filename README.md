# Personal Resume Website

## Project Overview

This is a personal resume website built using HTML, CSS, and Tailwind CSS, designed to showcase professional experience, skills, and contact information.

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- Email.js for contact form functionality

## Features

- Responsive design
- Professional portfolio layout
- Interactive sections
- Contact form with email integration
- Modern, clean UI using Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or later)
- npm (Node Package Manager)
- A modern web browser

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya1286/resume.git
   cd resume-website
   ```

2. Install dependencies:
   ```bash
   npm install
   npm install tailwindcss postcss autoprefixer
   ```

3. Initialize Tailwind CSS:
   ```bash
   npx tailwindcss init
   ```

4. Configure Email.js
   - Sign up at [Email.js](https://www.emailjs.com/)
   - Create an email template
   - Get your User ID and Email Template ID
   - Add these to your `.env` file:
     ```
     EMAILJS_USER_ID=your_user_id
     EMAILJS_TEMPLATE_ID=your_template_id
     EMAILJS_SERVICE_ID=your_service_id
     ```

## Configuration

### Tailwind CSS
Update `tailwind.config.js`:
```javascript
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html"
  ],
  theme: {
    extend: {
      // Add custom theme extensions
    },
  },
  plugins: [],
}
```

### Email.js Integration
Ensure you have the Email.js script in your HTML and initialize with your credentials:
```javascript
emailjs.init("YOUR_USER_ID");
```

## Deployment

### Local Development
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

## Customization

1. Update `index.html` with your personal information
2. Modify Tailwind CSS classes to match your design preferences
3. Customize Email.js template for contact form

## Best Practices

- Keep your personal information updated
- Optimize images for web
- Ensure responsive design across devices
- Validate contact form inputs
- Implement proper error handling for email submissions

## Recommended Extensions

- VS Code Live Server
- Tailwind CSS IntelliSense
- HTML Preview

## Security Considerations

- Use environment variables for sensitive information
- Implement CORS for Email.js
- Add input validation on contact form

## License

[Choose an appropriate license, e.g., MIT License]

## Contact

- Your Name
- Email: aishwaryaaditya2@gmail.com
- LinkedIn: https://www.linkedin.com/in/aditya-aishwarya
- GitHub: [Your GitHub Profile]

---

### Contributions

Contributions, issues, and feature requests are welcome!
Feel free to check [issues page](https://github.com/yourusername/resume-website/issues).
