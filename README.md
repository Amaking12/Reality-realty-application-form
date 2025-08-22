
# Reality Realty — Vercel-Deployable App

This is a professional rental application website for **Reality Realty** with:
- Landing page + logo
- Application form (U.S. only)
- EmailJS notifications to admin (no auto-reply to applicants)
- Works on Vercel via GitHub

## Local Setup
```bash
npm install
cp .env.sample .env  # then edit the values
npm start
```
Visit http://localhost:3000

## Set your EmailJS keys in `.env`
```
REACT_APP_EMAILJS_SERVICE_ID=service_v1fgc8a
REACT_APP_EMAILJS_TEMPLATE_ID=template_ss0uvxv
REACT_APP_EMAILJS_PUBLIC_KEY=pTgonbe4KQdw73-D_
```

## Deploy on Vercel
1. Push this folder to a new GitHub repository.
2. Go to Vercel → "New Project" → Import your repo.
3. Add Environment Variables in Vercel project settings:
   - REACT_APP_EMAILJS_SERVICE_ID
   - REACT_APP_EMAILJS_TEMPLATE_ID
   - REACT_APP_EMAILJS_PUBLIC_KEY
4. Click **Deploy**.
