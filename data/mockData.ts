// Tour Data
export const mockTourData = {
  name: "Summer World Tour 2025",
  totalShows: 24,
  remainingShows: 16,
  startDate: "Jun 1, 2025",
  endDate: "Aug 30, 2025"
};

// Upcoming Shows
export const mockUpcomingShows = [
  {
    id: 1,
    venue: "Madison Square Garden",
    location: "New York, NY",
    date: "2025-06-15",
    day: "15",
    month: "Jun",
    time: "8:00 PM",
    image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketsSold: 15000,
    ticketsTotal: 20000
  },
  {
    id: 2,
    venue: "Staples Center",
    location: "Los Angeles, CA",
    date: "2025-06-22",
    day: "22",
    month: "Jun",
    time: "7:30 PM",
    image: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketsSold: 12000,
    ticketsTotal: 18000
  },
  {
    id: 3,
    venue: "United Center",
    location: "Chicago, IL",
    date: "2025-06-28",
    day: "28",
    month: "Jun",
    time: "8:00 PM",
    image: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketsSold: 10000,
    ticketsTotal: 15000
  },
  {
    id: 4,
    venue: "Toyota Center",
    location: "Houston, TX",
    date: "2025-07-05",
    day: "05",
    month: "Jul",
    time: "7:00 PM",
    image: "https://images.pexels.com/photos/167471/pexels-photo-167471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketsSold: 8000,
    ticketsTotal: 12000
  },
  {
    id: 5,
    venue: "TD Garden",
    location: "Boston, MA",
    date: "2025-07-12",
    day: "12",
    month: "Jul",
    time: "8:00 PM",
    image: "https://images.pexels.com/photos/3975635/pexels-photo-3975635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ticketsSold: 9000,
    ticketsTotal: 14000
  }
];

// Schedule Data
export const mockScheduleData = [
  {
    id: 1,
    title: "Madison Square Garden",
    venue: "New York, NY",
    date: "2025-06-15",
    time: "8:00 PM",
    tags: ["Show"]
  },
  {
    id: 2,
    title: "Press Interview - Rolling Stone",
    venue: "New York, NY",
    date: "2025-06-16",
    time: "10:00 AM",
    tags: ["Press"]
  },
  {
    id: 3,
    title: "Staples Center",
    venue: "Los Angeles, CA",
    date: "2025-06-22",
    time: "7:30 PM",
    tags: ["Show"]
  },
  {
    id: 4,
    title: "Radio Appearance - KROQ",
    venue: "Los Angeles, CA",
    date: "2025-06-23",
    time: "11:00 AM",
    tags: ["Press"]
  },
  {
    id: 5,
    title: "United Center",
    venue: "Chicago, IL",
    date: "2025-06-28",
    time: "8:00 PM",
    tags: ["Show"]
  },
  {
    id: 6,
    title: "Toyota Center",
    venue: "Houston, TX",
    date: "2025-07-05",
    time: "7:00 PM",
    tags: ["Show"]
  },
  {
    id: 7,
    title: "TV Appearance - Late Night",
    venue: "New York, NY",
    date: "2025-07-10",
    time: "4:30 PM",
    tags: ["Press"]
  },
  {
    id: 8,
    title: "TD Garden",
    venue: "Boston, MA",
    date: "2025-07-12",
    time: "8:00 PM",
    tags: ["Show"]
  }
];

// Venue Data
export const mockVenueData = [
  {
    id: 1,
    name: "Madison Square Garden",
    location: "New York, NY",
    phone: "(212) 465-6741",
    capacity: "20,000",
    rating: "4.8",
    imageUrl: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Staples Center",
    location: "Los Angeles, CA",
    phone: "(213) 742-7100",
    capacity: "18,000",
    rating: "4.7",
    imageUrl: "https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "United Center",
    location: "Chicago, IL",
    phone: "(312) 455-4500",
    capacity: "15,000",
    rating: "4.6",
    imageUrl: "https://images.pexels.com/photos/2263436/pexels-photo-2263436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Toyota Center",
    location: "Houston, TX",
    phone: "(713) 758-7200",
    capacity: "12,000",
    rating: "4.5",
    imageUrl: "https://images.pexels.com/photos/167471/pexels-photo-167471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Financial Data
export const mockFinancialData = {
  income: 540000,
  expenses: 350000,
  incomeChange: 12.5,
  expensesChange: 8.2,
  profitChange: 15.3
};

// Transaction Data
export const mockTransactions = [
  {
    id: 1,
    description: "Madison Square Garden Show",
    amount: 120000,
    date: "Jun 15, 2025",
    type: "income"
  },
  {
    id: 2,
    description: "Tour Bus Rental",
    amount: 35000,
    date: "Jun 10, 2025",
    type: "expense"
  },
  {
    id: 3,
    description: "Merchandise Sales",
    amount: 28000,
    date: "Jun 15, 2025",
    type: "income"
  },
  {
    id: 4,
    description: "Crew Salaries",
    amount: 45000,
    date: "Jun 5, 2025",
    type: "expense"
  },
  {
    id: 5,
    description: "Equipment Rental",
    amount: 18000,
    date: "Jun 2, 2025",
    type: "expense"
  }
];

// Crew Data
export const mockCrewData = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Tour Manager",
    roleCategory: "management",
    photoUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Production Manager",
    roleCategory: "management",
    photoUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    name: "Mike Chen",
    role: "Sound Engineer",
    roleCategory: "tech",
    photoUrl: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    name: "Jessica Moore",
    role: "Lighting Designer",
    roleCategory: "tech",
    photoUrl: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    name: "David Lee",
    role: "Lead Singer",
    roleCategory: "band",
    photoUrl: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "Bassist",
    roleCategory: "band",
    photoUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Message Data
export const mockMessageData = [
  {
    id: 1,
    sender: "Alex Johnson",
    lastMessage: "We need to adjust the load-in time for tomorrow's show",
    time: "5m ago",
    unread: 2,
    avatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    sender: "Tour Group",
    lastMessage: "Sarah: Just confirmed the hotel arrangements for next week",
    time: "20m ago",
    unread: 5,
    avatar: null
  },
  {
    id: 3,
    sender: "Mike Chen",
    lastMessage: "The new sound equipment will arrive at the venue by 2pm",
    time: "1h ago",
    unread: 0,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    sender: "Venue Managers",
    lastMessage: "John: Please share your technical requirements for the Boston show",
    time: "3h ago",
    unread: 0,
    avatar: null
  },
  {
    id: 5,
    sender: "Jessica Moore",
    lastMessage: "I've updated the lighting cues for the opening number",
    time: "5h ago",
    unread: 0,
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];