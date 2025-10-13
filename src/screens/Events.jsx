
import React, { useState, useRef } from 'react';

function Events() {
  const eventsRef = useRef(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showEvents, setShowEvents] = useState(false);

  const sampleEvents = [
    {
      id: 1,
      title: "India Coastal Cleanup Drive",
      description: "Join thousands of volunteers across India's coastlines to remove plastic and waste from beaches and promote clean seas.",
      date: "2025-09-20",
      location: "Mumbai, Chennai, Kochi, and Vizag",
      organizer: "Indian Coast Guard & Environment Ministry",
      category: "Beach Cleanup",
      participants: "2L+ volunteers"
    },
    {
      id: 2,
      title: "National River Cleanup Mission",
      description: "A nationwide initiative to clean rivers like the Ganga, Yamuna, and Godavari, focusing on reducing water pollution.",
      date: "2025-06-08",
      location: "Across major river cities in India",
      organizer: "National Mission for Clean Ganga (NMCG)",
      category: "River Cleanup",
      participants: "5L+ participants"
    },
    {
      id: 3,
      title: "Save the Lakes Campaign",
      description: "An awareness and cleanup event targeting pollution in urban lakes and promoting sustainable water conservation.",
      date: "2025-11-15",
      location: "Bengaluru, Hyderabad, Pune",
      organizer: "Clean Water Foundation India",
      category: "Conservation",
      participants: "1K+ volunteers"
    },
    {
      id: 4,
      title: "Blue Planet Awareness Summit",
      description: "A national conference uniting students, NGOs, and policymakers to discuss marine ecosystem protection and plastic waste reduction.",
      date: "2025-10-12",
      location: "Goa, India",
      organizer: "Ocean India Initiative",
      category: "Conference",
      participants: "800+ attendees"
    }
  ];

  const handleGetEvents = () => {
    setLoading(true);
    setShowEvents(true);

    setTimeout(() => {
      setEvents(sampleEvents);
      setLoading(false);
      setTimeout(() => {
      eventsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    }, 1000);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #eff6ff, #ecfeff)' }}>
      <div style={{  backgroundImage: 'linear-gradient( rgba(112, 220, 226, 0.4)), url("/images/Beach_cleanup2.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      padding: '4rem 1rem',
      minHeight: '400px' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>Clean the Blue - Events</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
            Discover opportunities to protect our oceans and marine life worldwide
          </p>
          <button
            onClick={handleGetEvents}
            disabled={loading}
            style={{
              background: 'white',
              color: '#2563eb',
              padding: '1rem 2rem',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '1.125rem',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {loading ? (
              <>
                ⏳ Loading Events...
              </>
            ) : (
              <>
                📅 View Global Events
              </>
            )}
          </button>
        </div>
      </div>

      {showEvents && (
        <div ref={eventsRef} style={{ maxWidth: '72rem', margin: '0 auto', padding: '3rem 1rem' }}>
          {!loading && events.length > 0 && (
            <>
              <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  Upcoming Events ({events.length})
                </h2>
                <p style={{ color: '#6b7280' }}>
                  Join these initiatives to make a difference for our oceans
                </p>
              </div>

              <div style={{ display: 'grid', gap: '1.5rem' }}>
                {events.map((event) => (
                  <div
                    key={event.id}
                    style={{
                      background: 'white',
                      borderRadius: '0.75rem',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                      padding: '1.5rem',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{
                        background: '#dbeafe',
                        color: '#1e40af',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.75rem',
                        fontWeight: '600'
                      }}>
                        {event.category}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                      {event.title}
                    </h3>

                    <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                      {event.description}
                    </p>

                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ marginRight: '0.5rem' }}>📅</span>
                        <span style={{ fontSize: '0.875rem' }}>{formatDate(event.date)}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ marginRight: '0.5rem' }}>📍</span>
                        <span style={{ fontSize: '0.875rem' }}>{event.location}</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ marginRight: '0.5rem' }}>👥</span>
                        <span style={{ fontSize: '0.875rem' }}>{event.participants}</span>
                      </div>
                    </div>

                    <div style={{ paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                      <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        By <span style={{ fontWeight: '600' }}>{event.organizer}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Events