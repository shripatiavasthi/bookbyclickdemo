import { useState } from 'react'
import './App.css'

const sortOptions = [
  {
    id: 1,
    label: 'RECOMMENDED',
    price: '₹2500',
    tone: 'active',
  },
  {
    id: 2,
    label: 'CHEAPEST',
    price: '₹2600',
    tone: 'muted',
  },
  {
    id: 3,
    label: 'ALTERNATE DATES',
    price: '₹2714',
    tone: 'muted',
  },
  {
    id: 4,
    label: 'SHORTEST FLIGHT',
    price: '₹3207',
    tone: 'muted',
  },
]

const filters = [
  { label: 'Stops', icon: 'stops' },
  { label: 'Airlines', icon: 'airlines' },
  { label: 'Departure', icon: 'departure' },
  { label: 'Duration', icon: 'duration' },
  { label: 'Arrival', icon: 'arrival' },
  { label: 'Price', icon: 'price' },
]

const flights = [
  {
    id: 1,
    airline: 'Vistara',
    code: 'SG-2124',
    fareClass: 'Economy',
    price: '₹12775.67',
    departureDate: '25 Jul 2025',
    departureTime: '10:05',
    arrivalTime: '16:25',
    from: 'DEL',
    to: 'BOM',
    duration: '4h 30m',
    stopTag: '1Stop',
    logo: 'vistara',
  },
  {
    id: 2,
    airline: 'IndiGo',
    code: 'AI-860',
    fareClass: 'Economy',
    price: '₹12775.67',
    departureDate: '25 Jul 2025',
    departureTime: '10:05',
    arrivalTime: '16:25',
    from: 'DEL',
    to: 'BOM',
    duration: '4h 30m',
    stopTag: 'Non-stop',
    logo: 'indigo',
  },
  {
    id: 3,
    airline: 'Akasa Air',
    code: 'AI-860',
    fareClass: 'Economy',
    price: '₹12775.67',
    departureDate: '25 Jul 2025',
    departureTime: '10:05',
    arrivalTime: '16:25',
    from: 'DEL',
    to: 'BOM',
    duration: '4h 30m',
    stopTag: 'Non-stop',
    logo: 'akasa',
  },
  {
    id: 4,
    airline: 'SpiceJet',
    code: 'SG-2124',
    fareClass: 'Economy',
    price: '₹12775.67',
    departureDate: '25 Jul 2025',
    departureTime: '10:05',
    arrivalTime: '16:25',
    from: 'DEL',
    to: 'BOM',
    duration: '4h 30m',
    stopTag: '1Stop',
    logo: 'spice',
  },
  {
    id: 5,
    airline: 'Air India',
    code: 'AI-860',
    fareClass: 'Economy',
    price: '₹12775.67',
    departureDate: '25 Jul 2025',
    departureTime: '10:05',
    arrivalTime: '16:25',
    from: 'DEL',
    to: 'BOM',
    duration: '4h 30m',
    stopTag: 'Non-stop',
    logo: 'airindia',
  },
  {
    id: 6,
    airline: 'Air India Exp.',
    code: 'AI-860',
    fareClass: 'Economy',
    price: '₹12775.67',
    departureDate: '25 Jul 2025',
    departureTime: '10:05',
    arrivalTime: '16:25',
    from: 'DEL',
    to: 'BOM',
    duration: '4h 30m',
    stopTag: 'Non-stop',
    logo: 'express',
  },
]

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-7 8a7 7 0 0 1 14 0H5Z" />
    </svg>
  )
}

function IconPlane() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 16-8-4V5.5a1.5 1.5 0 0 0-3 0V12L2 16v2l8-1.5V21l2-1 2 1v-4.5L22 18Z" />
    </svg>
  )
}

function IconFilter() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16v2H4V7Zm3 5h10v2H7v-2Zm3 5h4v2h-4v-2Z" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 2h2v2h6V2h2v2h3v17H4V4h3V2Zm11 8H6v9h12v-9Z" />
    </svg>
  )
}

function IconDown() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m7 10 5 5 5-5z" />
    </svg>
  )
}

function IconChevronDown() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m6 9 6 6 6-6 1.4 1.4L12 18 4.6 10.4Z" />
    </svg>
  )
}

function IconStops() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a6 6 0 0 0-6 6c0 4.42 6 12 6 12s6-7.58 6-12a6 6 0 0 0-6-6Zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5ZM7 20h10v2H7z" />
    </svg>
  )
}

function IconAirlines() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m21 5-8.5 4.5L8 5.5l-2 1.2 3.4 4.3-3.9 2.1-2.2-1.6L2 12.4l2.2 3.1 3.6-1.2 2.2 3.9 1.8-1-1.8-4.9L19.8 7 21 5Z" />
    </svg>
  )
}

function IconDeparture() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m2 19 20-5-20-5v4l14 1-14 1v4Zm1 2h18v1H3z" />
    </svg>
  )
}

function IconDuration() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M15 1H9v2h6V1Zm-3 4a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 16a7 7 0 1 1 7-7 7 7 0 0 1-7 7Zm1-7.59V9h-2v5l3.5 3.5 1.41-1.41Z" />
    </svg>
  )
}

function IconArrival() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m2 14 20 5v-4l-14-1 14-1V9L2 14Zm1 7h18v1H3z" />
    </svg>
  )
}

function IconPrice() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 15.5V19h-2v-1.5a4.17 4.17 0 0 1-3.45-2.14l1.73-1a2.34 2.34 0 0 0 2.11 1.14h1.24a1.36 1.36 0 0 0 0-2.72h-1.28a3.36 3.36 0 0 1-.3-6.7V5h2v1.1a4.28 4.28 0 0 1 2.93 1.69l-1.64 1.14A2.33 2.33 0 0 0 12.4 8H11.3a1.36 1.36 0 0 0 0 2.72h1.28a3.36 3.36 0 0 1 .42 6.78Z" />
    </svg>
  )
}

const filterIcons = {
  stops: IconStops,
  airlines: IconAirlines,
  departure: IconDeparture,
  duration: IconDuration,
  arrival: IconArrival,
  price: IconPrice,
}

const stopOptions = [
  { label: 'Non Stop', price: '₹1,466.81' },
  { label: '1 Stop', price: '₹847.07' },
  { label: '2 Stop', price: '₹1,133.87' },
]

const timeSlots = [
  {
    title: 'Early Morning',
    subtitle: 'Before 6AM',
    icon: 'sunrise',
  },
  {
    title: 'Morning',
    subtitle: '06AM - 12PM',
    icon: 'sun',
  },
  {
    title: 'Mid Day',
    subtitle: '12PM - 06PM',
    icon: 'midday',
  },
  {
    title: 'Night',
    subtitle: '06PM - 12AM',
    icon: 'moon',
  },
]

const airlineOptions = ['IndiGo', 'Air India', 'Vistara', 'SpiceJet', 'Akasa Air']
const fareTypes = ['Refundable Only', 'Free Baggage', 'Flexible Dates']
const fareOptions = [
  {
    name: 'Standard',
    price: '₹4,999',
    sections: [
      {
        title: 'Flexibility',
        items: [
          { label: 'Cancel flights with lower fees (Airline policies applicable)', ok: false },
          { label: 'Save on change/cancel charges (airline rules apply).', ok: false },
          { label: 'Hassle-free upgrades (per airline policy).', ok: false },
        ],
      },
      {
        title: 'Seats, Meals',
        items: [
          { label: 'Chargeable Seats', ok: false },
          { label: 'Chargeable Meals', ok: false },
        ],
      },
      {
        title: 'Baggage',
        items: [
          { label: '7 Kgs Cabin Baggage', ok: true },
          { label: '15 Kgs Check-in Baggage', ok: true },
        ],
      },
    ],
    active: true,
  },
  {
    name: 'FlexiFly',
    price: '₹5,419',
    sections: [
      {
        title: 'Flexibility',
        items: [
          { label: 'Cancel flights with lower fees (Airline policies applicable)', ok: true },
          { label: 'Save on change/cancel charges (airline rules apply).', ok: true },
          { label: 'Hassle-free upgrades (per airline policy).', ok: true },
        ],
      },
      {
        title: 'Seats, Meals',
        items: [
          { label: 'Chargeable Seats', ok: true },
          { label: 'Chargeable Meals', ok: false },
        ],
      },
      {
        title: 'Baggage',
        items: [
          { label: '7 Kgs Cabin Baggage', ok: true },
          { label: '15 Kgs Check-in Baggage', ok: true },
        ],
      },
    ],
  },
]

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.4 4.29 19.7 2.88 18.29 9.17 12 2.88 5.71 4.29 4.3l6.3 6.29 6.29-6.3z" />
    </svg>
  )
}

function IconSunrise() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 17a7 7 0 0 1 14 0h-2a5 5 0 0 0-10 0Zm7-13h1v3h-1ZM4.22 7.64l.71-.71 2.12 2.12-.7.71Zm14.72-.71.7.7-2.12 2.13-.7-.71ZM2 20h20v1H2Zm10-9 4 4-1.41 1.41L12 13.83l-2.59 2.58L8 15Z" />
    </svg>
  )
}

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 1h2v4h-2Zm0 18h2v4h-2ZM1 11h4v2H1Zm18 0h4v2h-4ZM4.93 3.51l1.41-1.41 2.83 2.83-1.41 1.41Zm9.9 15.56 1.41-1.41 2.83 2.83-1.41 1.41ZM3.51 19.07l2.83-2.83 1.41 1.41-2.83 2.83Zm12.73-14.14 2.83-2.83 1.41 1.41-2.83 2.83ZM12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Z" />
    </svg>
  )
}

function IconMidday() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 2h2v4h-2Zm7.78 3.64 1.41 1.41-2.83 2.83-1.41-1.41ZM4.22 7.05l1.41-1.41 2.83 2.83-1.41 1.41ZM12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm-8 9h3a3 3 0 0 0 6 0h3a3 3 0 0 0 6 0v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
    </svg>
  )
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2a8.5 8.5 0 1 0 8 11.34A9.5 9.5 0 1 1 10.66 2 8.44 8.44 0 0 0 14 2ZM3 19h18v1H3Zm2 3h14v1H5Z" />
    </svg>
  )
}

function IconCheckCircle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.1 14.2-3.6-3.6 1.4-1.4 2.2 2.2 4.9-4.9 1.4 1.4Z" />
    </svg>
  )
}

function IconCrossCircle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.7 13.3-1.4 1.4-3.3-3.3-3.3 3.3-1.4-1.4 3.3-3.3-3.3-3.3 1.4-1.4 3.3 3.3 3.3-3.3 1.4 1.4-3.3 3.3Z" />
    </svg>
  )
}

const timeIcons = {
  sunrise: IconSunrise,
  sun: IconSun,
  midday: IconMidday,
  moon: IconMoon,
}

function App() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isModifyMode, setIsModifyMode] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState(null)
  const [priceValue, setPriceValue] = useState(40)

  return (
    <div className="flight-page">
      <header className="page-header">
        <div className="logo" aria-label="BookbyClick">
          <span className="logo-book">Bookby</span>
          <span className="logo-click">Click</span>
        </div>
        <div className="support-block">
          <div className="support-avatar">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
              alt="Support agent"
            />
            <span className="status-dot" />
          </div>
          <div>
            <p className="support-label text-label">FOR FURTHER INQUIRES</p>
            <strong>+91-124-407-0221</strong>
          </div>
        </div>
      </header>

      <section className="search-strip">
        <div className="search-strip-inner">
          {isModifyMode ? (
            <div className="modify-summary">
              <div className="modify-field compact">
                <span className="modify-label text-small">Trip Type</span>
                <strong className="text-subheading">Round Trip</strong>
                <IconChevronDown />
              </div>
              <div className="modify-field">
                <span className="modify-field-icon">
                  <IconPlane />
                </span>
                <div>
                  <span className="modify-label text-small">Leaving from</span>
                  <strong className="text-subheading">DEL - New Delhi</strong>
                </div>
              </div>
              <div className="modify-field">
                <span className="modify-field-icon">
                  <IconPlane />
                </span>
                <div>
                  <span className="modify-label text-small">Going to</span>
                  <strong className="text-subheading">BOM - Mumbai</strong>
                </div>
              </div>
              <div className="modify-field">
                <div>
                  <span className="modify-label text-small">Departing</span>
                  <strong className="text-subheading">02-11-2025</strong>
                </div>
                <IconCalendar />
              </div>
              <div className="modify-field">
                <div>
                  <span className="modify-label text-small">Returning</span>
                  <strong className="text-subheading">31-11-2025</strong>
                </div>
                <IconCalendar />
              </div>
            <div className="modify-field wide">
              <div>
                <span className="modify-label text-small">Passenger &amp; Class</span>
                <strong className="text-subheading">1 Traveler ( s) Economy</strong>
              </div>
              <IconChevronDown />
            </div>
          </div>
          ) : (
            <div className="trip-summary">
              <div className="route-block">
                <div>
                  <strong className="text-heading">DEL</strong>
                  <span className="text-body">Delhi</span>
                </div>
                <div className="route-art">
                  <span />
                  <IconPlane />
                  <span />
                </div>
                <div>
                  <strong className="text-heading">BOM</strong>
                  <span className="text-body">Mumbai</span>
                </div>
              </div>
              <div className="trip-stat">
                <span className="text-body">Depart</span>
                <strong className="text-subheading">24-07-2025</strong>
              </div>
              <div className="trip-stat">
                <span className="text-body">Return</span>
                <strong className="text-subheading">31-07-2025</strong>
              </div>
              <div className="trip-stat">
                <span className="text-body">Passenger &amp; Class</span>
                <strong className="with-icon text-subheading">
                  <IconUser />
                  1 Adult • Economy
                </strong>
              </div>
              <button
                type="button"
                className="modify-button"
                onClick={() => setIsModifyMode(true)}
              >
                <IconPlane />
                MODIFY FLIGHT
              </button>
            </div>
          )}
          <button
            type="button"
            className={`booking-panel${isModifyMode ? ' booking-panel-search' : ''}`}
            onClick={() => {
              if (isModifyMode) {
                setIsModifyMode(false)
              }
            }}
          >
            <div className="booking-icon">{isModifyMode ? '✈️' : '🧳'}</div>
            <div>
              <strong className="text-subheading">
                {isModifyMode ? 'SEARCH FLIGHT' : 'MY BOOKINGS'}
              </strong>
              <span className="text-body">
                {isModifyMode ? 'Update your trip search' : 'No Flight Selected'}
              </span>
            </div>
          </button>
        </div>
      </section>

      <main className="results-shell">
        <section className="results-header">
          <div>
            <p className="pick-label">
              Top Pick: <strong>Delhi → Mumbai</strong>
            </p>
            <h1 className="page-title text-subheading">Start your Mumbai story the best way.</h1>
          </div>
          <div className="sort-block">
            <span className="sort-title text-subheading">Sort by:</span>
            <div className="sort-chips">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  className={`sort-chip ${option.tone}`}
                >
                  <span className="text-small">
                    {option.label}
                    <strong>{option.price}</strong>
                  </span>
                  <em className="chip-badge">{option.tone === 'active' ? '👍' : '◔'}</em>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="filter-bar">
          <button
            type="button"
            className="filter-link"
            onClick={() => setIsFilterOpen(true)}
          >
            <IconFilter />
            All Filter
          </button>
          {filters.map((filter) => {
            const FilterIcon = filterIcons[filter.icon]

            return (
              <button key={filter.label} type="button" className="filter-button">
                <FilterIcon />
                <span className="filter-label">{filter.label}</span>
                <IconDown />
              </button>
            )
          })}
        </section>

        <section className="flight-grid">
          {flights.map((flight) => (
            <article key={flight.id} className="flight-card">
              <div className="flight-card-main">
                <div className="flight-card-top">
                  <div className="airline-group">
                    <div className={`airline-logo ${flight.logo}`}>
                      <span />
                    </div>
                    <div>
                      <h2 className="text-subheading">{flight.airline}</h2>
                      <p className="text-body">{flight.code}</p>
                    </div>
                  </div>
                  <div className="fare-group">
                    <span className="text-body">{flight.fareClass}</span>
                    <strong>{flight.price}</strong>
                  </div>
                </div>

                <p className="departure-note text-body">
                  <strong>Departure:</strong> {flight.departureDate}
                </p>

                <div className="timeline">
                  <div className="time-block">
                    <strong>{flight.departureTime}</strong>
                    <span className="text-body">{flight.from}</span>
                  </div>
                  <div className="timeline-mid">
                    <span className="text-small">{flight.duration}</span>
                    <div className="line" />
                    <em>{flight.stopTag}</em>
                  </div>
                  <div className="time-block align-right">
                    <strong>{flight.arrivalTime}</strong>
                    <span className="text-body">{flight.to}</span>
                  </div>
                </div>
              </div>

              <div className="flight-card-actions">
                <button type="button" className="details-button text-body">
                  Flight Details
                </button>
                <button
                  type="button"
                  className="select-button text-body"
                  onClick={() => setSelectedFlight(flight)}
                >
                  SELECT <span>➤</span>
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {isFilterOpen ? (
        <div className="filter-modal-overlay" onClick={() => setIsFilterOpen(false)}>
          <div
            className="filter-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="filter-modal-header">
              <h2 id="filter-modal-title" className="text-heading">
                Filter
              </h2>
              <button
                type="button"
                className="filter-modal-close"
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filter"
              >
                <IconClose />
              </button>
            </div>

            <div className="filter-modal-body">
              <section className="filter-section">
                <h3 className="text-subheading">Stops</h3>
                <div className="option-list">
                  {stopOptions.map((option) => (
                    <label key={option.label} className="option-row">
                      <span className="option-left">
                        <input type="checkbox" />
                        <span className="text-body">{option.label}</span>
                      </span>
                      <span className="text-body">{option.price}</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="filter-section">
                <h3 className="text-subheading">Price Range</h3>
                <div className="price-range">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceValue}
                    onChange={(event) => setPriceValue(Number(event.target.value))}
                  />
                  <p className="text-subheading">₹2,000 - ₹5,000</p>
                </div>
              </section>

              <section className="filter-section">
                <h3 className="text-subheading">Departure Time</h3>
                <div className="time-grid">
                  {timeSlots.map((slot) => {
                    const TimeIcon = timeIcons[slot.icon]

                    return (
                      <button key={slot.title} type="button" className="time-card">
                        <TimeIcon />
                        <span>
                          <strong className="text-body">{slot.title}</strong>
                          <em className="text-body">{slot.subtitle}</em>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </section>

              <section className="filter-section">
                <h3 className="text-subheading">Return Time</h3>
                <div className="time-grid">
                  {timeSlots.map((slot) => {
                    const TimeIcon = timeIcons[slot.icon]

                    return (
                      <button key={`return-${slot.title}`} type="button" className="time-card">
                        <TimeIcon />
                        <span>
                          <strong className="text-body">{slot.title}</strong>
                          <em className="text-body">{slot.subtitle}</em>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </section>

              <section className="filter-section">
                <h3 className="text-subheading">Airlines</h3>
                <div className="option-list">
                  {airlineOptions.map((option) => (
                    <label key={option} className="option-row">
                      <span className="option-left">
                        <input type="checkbox" />
                        <span className="text-body">{option}</span>
                      </span>
                      <span className="text-body">₹1,466.81</span>
                    </label>
                  ))}
                </div>
              </section>

              <section className="filter-section">
                <h3 className="text-subheading">Fare Type</h3>
                <div className="option-list">
                  {fareTypes.map((option) => (
                    <label key={option} className="option-row">
                      <span className="option-left">
                        <input type="checkbox" />
                        <span className="text-body">{option}</span>
                      </span>
                      <span className="text-body">₹1,466.81</span>
                    </label>
                  ))}
                </div>
              </section>
            </div>

            <div className="filter-modal-footer">
              <button type="button" className="filter-reset">
                Reset
              </button>
              <button type="button" className="filter-apply">
                APPLY <span>➤</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {selectedFlight ? (
        <div className="fare-modal-overlay" onClick={() => setSelectedFlight(null)}>
          <div
            className="fare-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fare-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="fare-modal-head">
              <div>
                <h2 id="fare-modal-title" className="text-heading">
                  Select your fare
                </h2>
                <p className="text-subheading">
                  {selectedFlight.from} to {selectedFlight.to} | {selectedFlight.departureDate}
                </p>
              </div>
              <button
                type="button"
                className="fare-modal-close"
                onClick={() => setSelectedFlight(null)}
                aria-label="Close fare selection"
              >
                <IconClose />
              </button>
            </div>

            <div className="fare-grid">
              {fareOptions.map((fare) => (
                <article
                  key={fare.name}
                  className={`fare-card${fare.active ? ' active' : ''}`}
                >
                  <div className="fare-card-top">
                    <span className="fare-radio" aria-hidden="true" />
                    <div>
                      <h3 className="text-subheading">{fare.name}</h3>
                      <p>
                        <strong>{fare.price}</strong> per adult
                      </p>
                    </div>
                  </div>

                  {fare.sections.map((section) => (
                    <section key={section.title} className="fare-section">
                      <h4 className="text-body">{section.title}</h4>
                      <div className="fare-list">
                        {section.items.map((item) => (
                          <div key={item.label} className="fare-item">
                            <span className={`fare-item-icon ${item.ok ? 'ok' : 'no'}`}>
                              {item.ok ? <IconCheckCircle /> : <IconCrossCircle />}
                            </span>
                            <span className="text-body">{item.label}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </article>
              ))}
            </div>

            <div className="fare-modal-foot">
              <p className="text-body">Please select a fare to continue</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
