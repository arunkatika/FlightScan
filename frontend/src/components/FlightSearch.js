import React, { useState } from 'react';
import axios from 'axios';

const FlightSearch = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Calling the Django backend endpoint
      const response = await axios.get('http://localhost:8000/api/flight-search/', {
        params: {
          origin,
          destination,
          departureDate,
        },
      });
      // Adjust response parsing as needed (this example assumes response.data contains flight data)
      setFlights(response.data.flights || []);
    } catch (err) {
      console.error(err);
      setError('Error fetching flights. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Search Flights</h2>
      <form onSubmit={handleSearch} className="row g-3">
        <div className="col-md-4">
          <label htmlFor="origin" className="form-label">
            Origin
          </label>
          <input
            type="text"
            id="origin"
            className="form-control"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
            placeholder="Enter origin"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="destination" className="form-label">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            className="form-control"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Enter destination"
            required
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="departureDate" className="form-label">
            Departure Date
          </label>
          <input
            type="date"
            id="departureDate"
            className="form-control"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {loading && <p className="mt-3">Loading flights...</p>}
      {error && <p className="mt-3 text-danger">{error}</p>}
      {flights.length > 0 && (
        <div className="mt-4">
          <h3>Flight Results</h3>
          <div className="row">
            {flights.map((flight, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">
                      {flight.airline || 'Airline Name'}
                    </h5>
                    <p className="card-text">
                      Departure: {flight.departureTime || 'Time'} <br />
                      Arrival: {flight.arrivalTime || 'Time'} <br />
                      Price: {flight.price || 'Price'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
