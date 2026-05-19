# McDonald Insurance Services - React Site

## ✅ Site is Complete and Ready!

### Features Implemented:
- ✅ **Dark Mode Toggle** - Button in navbar with localStorage persistence
- ✅ **Responsive Design** - Works on desktop, tablet, and mobile
- ✅ **Professional Styling** - Theme color #748348 throughout
- ✅ **6 Complete Pages** - All functional with routing
- ✅ **Reusable Components** - Following React best practices
- ✅ **Data-Driven** - All content from `/src/data/` files

### Pages:
1. **Home** (`/`) - Hero with logo, mission statement, statistics, benefits, agent previews
2. **Meet the Team** (`/meet-the-team`) - Detailed agent profile cards with contact info
3. **Services** (`/services`) - What you offer and referral numbers for what you don't
4. **FAQ** (`/faq`) - Collapsible questions and answers
5. **Helpful Info** (`/helpful-info`) - Categorized resources with phone numbers
6. **Contact Us** (`/contact`) - Office info and agent contact cards

### How to Run:

#### Development Mode:
```bash
npm run dev
```
Then open: http://localhost:51731/

#### Build for Production:
```bash
npm run build
```

#### Preview Production Build:
```bash
npm run preview
```

### How to Update Content:

All content is in the `/src/data/` folder:
- `companyInfo.js` - Company name, slogan, phone, email, mission, statistics
- `agents.js` - Agent information (5 agents with placeholders)
- `faq.js` - Frequently asked questions
- `helpfulInfo.js` - Resource categories with phone numbers
- `services.js` - Services offered and referral information

### Adding Agent Photos:

When you have real photos, replace the placeholder code in:
- `/src/components/home/AgentPreviewCard.jsx`
- `/src/components/about/AgentProfileCard.jsx`

Just uncomment the `<img>` tags and use the `agent.photo` path from the data.

### Theme Customization:

Edit `/src/styles/variables.css` to change:
- Primary color (currently #748348)
- Spacing, fonts, shadows, etc.
- Dark mode colors

### Project Structure:
```
src/
├── assets/          # Logo images
├── components/      # React components
│   ├── common/      # Reusable: Button, SectionHeader, PageContainer
│   ├── layout/      # NavBar, Footer
│   ├── home/        # Home page components
│   ├── about/       # Team and contact components
│   └── services/    # Services, FAQ, Helpful Info
├── data/           # All content (easy to update!)
├── hooks/          # useScrollToTop
├── styles/         # Global CSS and variables
├── App.jsx         # Main app with dark mode
├── main.jsx        # Entry point
└── router.jsx      # Route definitions

```

### Technologies Used:
- React 19
- React Router v6
- Vite 8
- CSS Custom Properties (CSS Variables)
- No CSS frameworks (pure CSS for better control)

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Dark mode support via system preference or manual toggle

---

**Note:** Agent images are currently placeholders showing initials. Update the `agents.js` file with real photo paths when ready!
