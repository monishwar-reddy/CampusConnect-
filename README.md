# 🎓 CampusConnect

A comprehensive AI-powered campus community platform that revolutionizes student interaction, knowledge sharing, and campus engagement.

## ✨ Features

### 🤖 AI Features (Powered by Gemini)
- ✅ **AI Auto Moderation** - Automatically detects spam, toxicity, and inappropriate content
- ✅ **AI Auto Tags** - Automatically categorizes posts (Notes, Doubts, Opportunities, Events, General)
- ✅ **AI Summary** - Generates short summaries for long posts

### 🎨 UI/UX Features
- ✅ **Dark Spooky Theme** - Halloween-inspired dark UI with glowing effects
- ✅ **Animations** - Smooth hover effects, floating elements, and ghost animations
- ✅ **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- ✅ **Modern Design** - Clean, minimal, and professional

### 📱 Core Features
- ✅ **Post Feed** - Browse all posts with search and category filters
- ✅ **Create Posts** - Easy post creation with category selection
- ✅ **Post Details** - View full posts with comments
- ✅ **Comments System** - Add comments to any post
- ✅ **Like System** - Upvote posts you find helpful
- ✅ **User Profiles** - Simple username-based authentication
- ✅ **Search** - Search posts by title or content
- ✅ **Categories** - Filter by Notes, Doubts, Opportunities, Events, General
- ✅ **Flagged Content** - Visual indicators for moderated content

## 🚀 Tech Stack

- **Frontend**: React 19 + React Router
- **Backend**: Supabase (Serverless)
- **Database**: Supabase PostgreSQL
- **AI**: Google Gemini API
- **Styling**: Custom CSS with animations
- **Deployment**: Netlify

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up Supabase:
   - Go to your Supabase project
   - Run the SQL commands from `SUPABASE_SETUP.md`

4. Configure environment variables:
   - Add your Gemini API key to `.env`:
   ```
   REACT_APP_GEMINI_API_KEY=your_api_key_here
   ```

5. Start the development server:
   ```bash
   npm start
   ```

## 🎯 Pages

1. **Home** - Browse all posts with search and filters
2. **Create Post** - Create new posts
3. **Post Detail** - View post with comments
4. **Profile** View your posts and profile
5. **Fun Game** Play Game
6. **Contact Us** Contact page

## 🔑 How to Use

1. **Login** - Click "Login" and enter any username (no password needed)
2. **Create Post** - Go to "Create Post" and write your content
3. **Browse** - Use search and category filters to find posts
4. **Interact** - Use features, play game, Like posts and add comments 
5. **AI Magic** - Posts are automatically moderated, tagged, and summarized

## 🎃 Halloween Theme

- Spooky dark background with purple gradients
- Glowing red accents (#ff6b6b)
- Creepster font for headings
- Floating animations
- Ghost effects on flagged content
- Pulsing warnings

## 📝 Notes

- The app uses simple username-based auth (no passwords) for hackathon simplicity
- AI features work with or without Gemini API key (fallback to rule-based)
- All data is stored in Supabase
- Fully serverless architecture

Good luck! 🎃👻

You can contact me through my email (monishwar26413@gmail.com)
