# Makjuz Full-Stack Rebuild

This project rebuilds the publicly verifiable Makjuz homepage as a modern React + Node.js application while preserving the live site's visible copy, section order, CTA targets, and product/testimonial content.

## Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router v6, Axios, React Hook Form
- Backend: Node.js, Express, PostgreSQL, Prisma, Nodemailer

## Project Structure

- `frontend/`: animated React marketing site
- `backend/`: Express API, Prisma schema, email service

## Local Setup

1. Install dependencies:
   - `npm install --prefix frontend`
   - `npm install --prefix backend`
2. Copy env files:
   - `frontend/.env.example` to `frontend/.env`
   - `backend/.env.example` to `backend/.env`
3. Generate the Prisma client:
   - `npm run prisma:generate --prefix backend`
4. Optional database sync:
   - `npm run prisma:push --prefix backend`
5. Start both apps:
   - `npm run dev:backend`
   - `npm run dev:frontend`

## API Endpoints

- `GET /api/health`
- `GET /api/sections`
- `GET /api/testimonials`
- `GET /api/pricing`
- `POST /api/contact`
- `POST /api/newsletter`

## Notes

- The frontend falls back to local parity data if the backend is unavailable.
- Contact submissions persist only when `DATABASE_URL` is configured and the Prisma schema has been pushed.
- Email notifications use SMTP credentials when present; otherwise the app uses Nodemailer's JSON transport for safe local development.

## Deployment

### Frontend

- Deploy `frontend/` to Vercel or Netlify
- Set `VITE_API_URL` to your deployed backend URL plus `/api`

### Backend

- Deploy `backend/` to Render, Railway, or another Node host
- Provision PostgreSQL and set `DATABASE_URL`
- Run `npm run prisma:generate` during build and `npm run prisma:push` during release if desired

## Verification Checklist

- Confirm homepage copy matches the live Makjuz site
- Test contact form success and validation states
- Check mobile/tablet/desktop layouts
- Verify reduced-motion behavior
- Run frontend lint and build before deployment
