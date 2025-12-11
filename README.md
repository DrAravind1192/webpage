# Dr. Aravind Krishnakumar - Portfolio Website

A professional portfolio website for Dr. Aravind Krishnakumar, Postdoctoral Fellow in Astrophysics at the University of Liège, Belgium.

## 🌟 Features

### Design & Theme
- **Dark/Light Mode Toggle**: Professional astrophysics-themed dark mode with animated stars, clean light mode
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Professional Color Scheme**: Blues and cosmic colors for dark mode, clean whites for light mode
- **Smooth Animations**: Subtle transitions and hover effects throughout

### Sections

1. **Hero Section**
   - Professional introduction with profile photo
   - Key metrics (citations, publications, h-index)
   - Call-to-action buttons
   - Social media links
   - Animated starfield in dark mode

2. **About Me**
   - Detailed biography
   - Research interests
   - Personal interests (sports, music)

3. **Current Research**
   - Focus areas in cometary science
   - Research specializations with icons

4. **Publications**
   - Top 5 publications with citations
   - Links to Google Scholar
   - One-liner descriptions with external links

5. **Talks & Presentations**
   - Interactive cards with click-to-view details
   - Modal dialogs with presentation photos
   - Event details and locations

6. **Background**
   - Two-column layout: Education & Professional Experience
   - Timeline visualization
   - Detailed information for each entry

7. **Skills & Expertise**
   - Categorized technical skills
   - Research areas
   - Tools and instrumentation

8. **Documents & Resources**
   - Downloadable CV, research statements
   - Publication lists
   - PhD thesis
   - File information with last updated dates

9. **Contact Form**
   - Name, Email, Subject, Message fields
   - Form validation
   - Toast notifications (currently frontend-only, ready for backend integration)

10. **Footer**
    - Quick links
    - Social media
    - Copyright information

## 🛠️ Technology Stack

### Frontend
- **React 19**: Latest React version
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Modern icon library
- **Axios**: HTTP client for API calls

### Backend
- **FastAPI**: Modern Python web framework
- **MongoDB**: NoSQL database (via Motor async driver)
- **Python 3.11+**: Latest Python features

## 📁 Project Structure

```
/app
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn UI components
│   │   │   ├── Header.jsx       # Navigation with telescope icon
│   │   │   ├── Hero.jsx         # Hero section with stars
│   │   │   ├── About.jsx
│   │   │   ├── Research.jsx
│   │   │   ├── Publications.jsx
│   │   │   ├── Talks.jsx        # With modal dialogs
│   │   │   ├── Background.jsx   # Two-column layout
│   │   │   ├── Skills.jsx
│   │   │   ├── Downloads.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeProvider.jsx
│   │   ├── data/
│   │   │   └── mock.js          # Mock data (replace with API calls)
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
│
└── backend/
    ├── server.py              # FastAPI server
    └── requirements.txt       # Python dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and Yarn
- Python 3.11+
- MongoDB (local or cloud instance)

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
yarn install
```

3. Create `.env` file:
```bash
REACT_APP_BACKEND_URL=http://localhost:8001
```

4. Start development server:
```bash
yarn start
```

Frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file:
```bash
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
```

5. Start server:
```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

Backend will be available at `http://localhost:8001`

## 🎨 Customization

### Updating Profile Data
Edit `/frontend/src/data/mock.js` to update:
- Personal information
- Publications
- Talks
- Education
- Professional experience
- Skills
- Downloads

### Theme Colors
Edit `/frontend/src/index.css` for theme customization:
- Light mode: `:root` CSS variables
- Dark mode: `.dark` CSS variables

### Profile Photo
Replace the LinkedIn URL in `mock.js` with your own image URL or use local images in `/frontend/public/images/`

## 📱 Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Future Enhancements (Backend Integration)

Currently, the portfolio uses mock data. To integrate with backend:

1. **Contact Form**
   - Update `Contact.jsx` to POST to `/api/contact`
   - Add email service integration (SendGrid, etc.)

2. **Downloads**
   - Store documents in backend storage
   - Add download tracking
   - Implement authentication if needed

3. **Analytics**
   - Track page views
   - Monitor download counts
   - Visitor statistics

## 📄 License

This is a personal portfolio website. Feel free to use as inspiration for your own portfolio.

## 👨‍🔬 About Dr. Aravind Krishnakumar

Postdoctoral Fellow in Astrophysics specializing in cometary science and observational astronomy at the University of Liège, Belgium.

- **Email**: u246982@uliege.be
- **Google Scholar**: [Profile Link](https://scholar.google.com/citations?user=63MKgTkAAAAJ&hl=en)
- **LinkedIn**: [Profile Link](https://www.linkedin.com/in/dr-aravind-krishnakumar-14413668/)
- **ResearchGate**: [Profile Link](https://www.researchgate.net/profile/Aravind-Krishnakumar)
- **ORCID**: [0000-0002-8328-5667](https://orcid.org/0000-0002-8328-5667)

## 🙏 Acknowledgments

Built with modern web technologies and best practices for academic portfolios.
