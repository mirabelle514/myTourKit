# My Tour Kit

A comprehensive tour management application built with React Native and Expo, designed to streamline the management of music tours, events, and performances.

## Features

### Schedule & Itinerary Management
- Daily schedules with load-in times, soundcheck, and show times
- Upcoming shows overview with venue details
- Automatic timezone adjustments for multi-city tours
- Calendar integration with push notifications

### Venue Management
- Detailed venue information including capacity and technical specs
- Contact information for venue staff
- Venue ratings and reviews
- Photo galleries and virtual tours

### Financial Tracking
- Tour income and expense monitoring
- Real-time financial analytics
- Transaction history
- Budget vs. actual reporting

### Crew Management
- Team member profiles and roles
- Contact information
- Role-based access control
- Communication tools

### Communication Hub
- Internal messaging system
- Group chats for different teams
- File sharing capabilities
- Announcement broadcasts

## Technology Stack

- **Framework**: React Native + Expo
- **Navigation**: Expo Router
- **UI Components**: Custom components with native styling
- **Icons**: Lucide React Native
- **Fonts**: Google Fonts (Inter family)

## Getting Started

### Prerequisites

- Node.js 16.0 or later
- npm or yarn
- Expo CLI

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-tour-kit.git
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

### Development

The project uses Expo's managed workflow. Key commands:

- `npm run dev` - Start the development server
- `npm run build:web` - Build for web deployment
- `npm run lint` - Run linting

## Project Structure

```
my-tour-kit/
├── app/                    # Application routes
│   ├── tabs/              # Tab-based navigation
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── finances/          # Finance-related components
│   ├── home/             # Home screen components
│   ├── layout/           # Layout components
│   ├── navigation/       # Navigation components
│   └── ui/               # UI components
├── constants/            # Constants and theme
├── data/                # Mock data
└── hooks/               # Custom hooks
```

## Features Documentation

### Navigation

The app uses Expo Router for navigation with a tab-based layout:

- Home - Dashboard overview
- Schedule - Event management
- Venues - Venue information
- Finances - Financial tracking
- Crew - Team management
- Messages - Communication hub
- Settings - App configuration

### Styling

- Custom theme system with consistent colors and shadows
- Responsive design for various screen sizes
- Platform-specific adaptations
- Custom font implementation with Google Fonts

### Components

- Reusable UI components
- Consistent styling across the app
- Platform-specific behavior handling
- Performance-optimized rendering

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Expo team for the amazing framework
- React Native community
- All contributors who have helped shape this project