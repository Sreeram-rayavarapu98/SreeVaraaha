# Community Sales PWA

A Progressive Web Application for managing community sales, prospects, and inventory. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- 📊 **Dashboard** - Overview of appointments, walk-ins, and customer follow-ups
- 👥 **Customers** - Manage leads, visits, and bookings with detailed customer profiles
- 🏢 **Flats & Apartments** - Track inventory, availability, and unit details
- 📅 **Appointments / Calendar** - Plan visits, follow-ups, and site tours with calendar view
- 👨‍💼 **Consultants** - Track consultant capacity, workload, and performance
- ⚙️ **Settings** - Configure calendar rules, team access, and data management

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **next-pwa** - PWA support with service workers
- **Heroicons** - Beautiful SVG icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

The PWA will be available at `http://localhost:3000` and can be installed on devices.

### Deploying to Vercel

1. **Create a Vercel project**  
   - Push this repository to GitHub/GitLab/Bitbucket.  
   - Import the repo in [Vercel](https://vercel.com/new) and select the `Next.js` preset.
2. **Set build settings**  
   - Framework: `Next.js` (auto-detected).  
   - Build command: `npm run build`.  
   - Install command: `npm install`.  
   - Output directory: `.next` (default).  
   No extra environment variables are required unless you add APIs later.
3. **Enable PWA support**  
   `next-pwa` is already configured. Make sure the “Automatically expose System Environment Variables” option is enabled so the service worker honors `NODE_ENV`.
4. **Deploy**  
   - Click *Deploy* in the Vercel dashboard, or run:
     ```bash
     npx vercel
     npx vercel --prod
     ```
   - Vercel will build the project, upload the `.next` output, and serve it globally on HTTPS.
5. **Post-deploy checks**  
   - Open the production URL, verify the PWA prompt, and run `vercel logs` if you need diagnostics.  
   - Use `vercel env pull` to sync secrets if you add backend integrations.

## PWA Features

- **Offline Support** - Service worker caches assets for offline access
- **Installable** - Can be installed on mobile and desktop devices
- **Responsive** - Works seamlessly on all screen sizes
- **Fast** - Optimized performance with Next.js

## Project Structure

```
├── app/
│   ├── appointments/    # Appointments & Calendar page
│   ├── consultants/     # Consultants management page
│   ├── customers/       # Customers management page
│   ├── flats/           # Flats & Apartments page
│   ├── settings/        # Settings page
│   ├── layout.tsx       # Root layout with sidebar
│   ├── page.tsx         # Dashboard page
│   └── globals.css      # Global styles
├── components/
│   ├── Sidebar.tsx      # Navigation sidebar
│   └── TodayOverview.tsx # Today overview card
├── public/
│   └── manifest.json    # PWA manifest
└── package.json
```

## Pages

### Dashboard (`/`)
- Today's appointments overview
- New walk-ins summary
- Upcoming appointments list
- Customers needing follow-up

### Customers (`/customers`)
- Customer pipeline overview
- Customer list with filters
- Detailed customer profiles
- Interest & fit matching

### Flats & Apartments (`/flats`)
- Inventory overview
- Tower/unit filtering
- Unit details table
- Status tracking (Available, Reserved, Booked)

### Appointments / Calendar (`/appointments`)
- Today's summary
- Calendar view with events
- Timeline view for appointments
- Filter by type and status

### Consultants (`/consultants`)
- Team overview
- Consultant list
- Individual consultant details
- Unassigned leads management

### Settings (`/settings`)
- Appointment & calendar rules
- Team & access management
- Data & audit settings

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme.

### Icons
Icons are from Heroicons. Replace them in `components/Sidebar.tsx` as needed.

### PWA Icons
Add your own icons:
- `public/icon-192.png` (192x192)
- `public/icon-512.png` (512x512)

## License

MIT


