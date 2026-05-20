# Agent Photo Management Guide

## Overview
The site supports displaying real agent photos with automatic fallback to initials if photos aren't available. This guide explains how to add and manage agent photos.

---

## How It Works

### Automatic Fallback System
- **If photo exists**: Displays the agent's photo
- **If photo missing or fails to load**: Shows agent's initials on a colored background
- **No broken images**: Graceful error handling prevents broken image icons

### Component Architecture
- **`AgentImage`** component: Reusable component handling all image logic
- **`AgentPreviewCard`**: Uses AgentImage (home page)
- **`AgentProfileCard`**: Uses AgentImage (meet the team page)
- **Single Responsibility Principle**: Image logic is centralized in one component

---

## Adding Agent Photos

### Step 1: Prepare the Photo

**Recommended Specifications:**
- **Format**: JPG or PNG
- **Dimensions**: 
  - Minimum: 500x500px
  - Recommended: 1000x1000px (square)
- **File Size**: Under 500KB (optimize for web)
- **Style**: Professional headshot with neutral background

**Naming Convention:**
- Use agent's name without spaces
- Example: `KylaBeckstrand.jpg`, `JamesMcDonald.jpg`

### Step 2: Add Photo to Project

1. Place the photo file in:
   ```
   public/agents/
   ```

2. File path example:
   ```
   public/agents/KylaBeckstrand.jpg
   ```

### Step 3: Update agents.js Data File

Edit `src/data/agents.js`:

```javascript
{
  id: 4,
  name: "Kyla Beckstrand",
  phone: "801-516-8639",
  email: "james@mcdinserv.com",
  photo: "/agents/KylaBeckstrand.jpg",  // ← Add this path
  role: "Health and Life Insurance Agent",
  blurb: "..."
}
```

**Path Format:**
- Start with `/agents/`
- Use exact filename
- Include file extension (`.jpg` or `.png`)

**No Photo Yet?**
```javascript
{
  id: 1,
  name: "James McDonald",
  photo: null,  // ← Will show initials "JM"
  ...
}
```

### Step 4: Test

1. **Local Development:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:51731 and check:
   - Home page agent preview cards
   - Meet the Team page agent profile cards

2. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

---

## Current Agent Photos Status

| Agent | Photo Status | File Path |
|-------|-------------|-----------|
| James McDonald | ❌ Not Added | `null` (shows initials "JM") |
| Rylee McDonald | ❌ Not Added | `null` (shows initials "RM") |
| Brysen McDonald | ❌ Not Added | `null` (shows initials "BM") |
| Kyla Beckstrand | ✅ **Added** | `/agents/KylaBeckstrand.jpg` |
| Charles Christiansen | ❌ Not Added | `null` (shows initials "CC") |

---

## Folder Structure

```
McdonaldInsuranceServices/
├── public/
│   ├── agents/                    ← Agent photos go here
│   │   └── KylaBeckstrand.jpg    ← Example photo
│   ├── TextLogo.png
│   └── ...
├── src/
│   ├── components/
│   │   └── common/
│   │       └── AgentImage.jsx     ← Reusable image component
│   └── data/
│       └── agents.js              ← Update photo paths here
└── ...
```

---

## Why Public Folder?

Photos are stored in the `public` folder (not `src/assets`) because:

1. **Reliable Serving**: Public folder files are served as-is at the root
2. **No Build Transform**: Vite doesn't process or rename these files
3. **Predictable Paths**: `/agents/photo.jpg` always works
4. **Easy Updates**: Just drop new photos in the folder
5. **GitHub Pages Compatible**: Works seamlessly with deployment

---

## Technical Details

### AgentImage Component Features

✅ **Graceful Fallback**: Shows initials if photo missing  
✅ **Error Handling**: Handles 404 errors without breaking  
✅ **Loading State**: Shows initials while photo loads  
✅ **Accessibility**: Proper alt text and ARIA labels  
✅ **SEO Friendly**: Includes descriptive image attributes  
✅ **Responsive**: Works on all device sizes  

### Image Loading Flow

```
1. Component renders
2. Checks if photo path exists (not null)
3. Attempts to load image from public folder
4. If success → Shows photo
5. If error → Falls back to initials
6. If no path → Immediately shows initials
```

### CSS Classes Used

**Home Page (AgentPreviewCard):**
- `.agent-preview-card__image-wrapper` - Container
- `.agent-preview-card__image` - Photo element
- `.agent-preview-card__placeholder` - Initials fallback

**Team Page (AgentProfileCard):**
- `.agent-profile-card__image-wrapper` - Container
- `.agent-profile-card__image` - Photo element
- `.agent-profile-card__placeholder` - Initials fallback

---

## Common Issues & Solutions

### Issue: Photo not displaying

**Check:**
1. File is in `public/agents/` folder
2. Path in `agents.js` matches filename exactly (case-sensitive)
3. Path starts with `/agents/`
4. File extension is correct (`.jpg` vs `.png`)

**Example Fix:**
```javascript
// ❌ Wrong
photo: "agents/KylaBeckstrand.jpg"           // Missing leading /
photo: "/agents/kylabeckstrand.jpg"          // Wrong case
photo: "/agents/KylaBeckstrand.png"          // Wrong extension

// ✅ Correct
photo: "/agents/KylaBeckstrand.jpg"
```

### Issue: Photo shows in dev but not in production

**Solution:**
1. Rebuild the project: `npm run build`
2. Verify `public/agents/` folder has the photos
3. Check `dist/agents/` folder after build (photos should be copied)

### Issue: Photo is too large / slow to load

**Solution:**
1. Optimize image with tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
2. Target 200-300KB file size
3. Use JPG for photos (better compression than PNG)

---

## Deployment Checklist

Before deploying with `npm run deploy`:

- [ ] All agent photos added to `public/agents/`
- [ ] All photo paths updated in `src/data/agents.js`
- [ ] Tested locally with `npm run dev`
- [ ] Build successful: `npm run build`
- [ ] Preview build works: `npm run preview`
- [ ] Photos copied to `dist/agents/` during build

---

## Future Enhancements

Possible improvements for later:

- **Image Optimization**: Automatic resizing and compression
- **WebP Format**: Modern image format for smaller file sizes
- **Lazy Loading**: Load images only when visible
- **Upload Interface**: Admin panel to upload photos
- **Cropping Tool**: Built-in photo cropper for consistency

---

## Example: Adding All Agent Photos

```javascript
// src/data/agents.js

export const agents = [
  {
	id: 1,
	name: "James McDonald",
	photo: "/agents/JamesMcDonald.jpg",  // ← Add photo
	...
  },
  {
	id: 2,
	name: "Rylee McDonald",
	photo: "/agents/RyleeMcDonald.jpg",  // ← Add photo
	...
  },
  {
	id: 3,
	name: "Brysen McDonald",
	photo: "/agents/BrysenMcDonald.jpg", // ← Add photo
	...
  },
  {
	id: 4,
	name: "Kyla Beckstrand",
	photo: "/agents/KylaBeckstrand.jpg", // ✓ Already added
	...
  },
  {
	id: 5,
	name: "Charles Christiansen",
	photo: "/agents/CharlesChristiansen.jpg", // ← Add photo
	...
  }
];
```

Then add corresponding files:
```
public/agents/JamesMcDonald.jpg
public/agents/RyleeMcDonald.jpg
public/agents/BrysenMcDonald.jpg
public/agents/KylaBeckstrand.jpg ✓
public/agents/CharlesChristiansen.jpg
```

---

## Support

If you need help:
1. Check this guide
2. Verify folder structure matches examples
3. Test with `npm run dev` before deploying

**The system is designed to be forgiving - if photos don't load, initials will always display as a professional fallback.** 📸
