# Austin Multifamily Market Report - Next.js Edition

A modern, responsive web application built with Next.js that presents the Q2 2025 Austin Multifamily Market Intelligence Report. This project converts the original HTML report into a maintainable, scalable React application.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **Interactive Charts**: Powered by Chart.js with custom annotations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Hover effects on metric cards revealing detailed information
- **Professional Styling**: Consistent branding with the original report
- **TypeScript Support**: Full type safety and better development experience

## 📊 Chart Components

1. **Supply & Demand Chart**: Shows Austin's robust demand trends
2. **Construction Starts Chart**: Quarterly construction activity with pre-pandemic averages
3. **Delivery Pipeline Chart**: Stacked bar chart showing construction pipeline exhaustion
4. **Supply-Demand & Rent Growth Chart**: Comprehensive view with dual Y-axes and projections

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Chart.js 4.4.0 + react-chartjs-2
- **Annotations**: chartjs-plugin-annotation
- **Development**: ESLint, PostCSS, Autoprefixer

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd austin-multifamily-report
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
austin-multifamily-report/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── Header.tsx         # Report header with title and metadata
│   ├── InvestmentThesis.tsx # Main investment thesis section
│   ├── RentOccupancyTable.tsx # Rent & occupancy comparison table
│   ├── MarketFundamentals.tsx # Interactive metric cards
│   ├── SupplyDemandChart.tsx # Supply vs demand chart
│   ├── ConstructionChart.tsx # Construction starts chart
│   ├── PipelineChart.tsx  # Delivery pipeline chart
│   ├── SupplyDemandRentChart.tsx # Main comprehensive chart
│   ├── Footer.tsx         # Report footer
│   └── ChartWrapper.tsx   # Chart.js registration wrapper
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:
- **Primary Blue**: `#005395` (Austin brand color)
- **Dark Variants**: `#1a202c`, `#2c5282`
- **Accent Colors**: Various shades for charts and UI elements

### Styling
- **Global Styles**: Defined in `app/globals.css` using Tailwind's `@layer` directive
- **Component Styles**: Tailwind utility classes with custom component classes
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Charts
- **Chart.js Configuration**: Each chart component has its own configuration
- **Responsive**: Charts automatically resize based on container
- **Interactive**: Hover effects and tooltips enabled
- **Annotations**: Custom arrows and projection boxes

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: `< 768px` - Single column layout
- **Tablet**: `768px - 1024px` - Two column layout
- **Desktop**: `> 1024px` - Full three column layout

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Quality
- **TypeScript**: Full type safety
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (recommended)

### Adding New Charts
1. Create a new component in `components/`
2. Import Chart.js and register required components
3. Use `useRef` and `useEffect` for chart lifecycle management
4. Add to the main page or relevant section

## 📈 Data Updates

To update the report data:
1. **Chart Data**: Modify the data arrays in each chart component
2. **Text Content**: Update the content in the respective components
3. **Styling**: Modify Tailwind classes or custom CSS
4. **Charts**: Update Chart.js configurations as needed

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for internal use by Presidium. Please respect the original content and branding.

## 🆘 Support

For technical issues or questions about the Next.js implementation, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ using Next.js, React, and Chart.js**

