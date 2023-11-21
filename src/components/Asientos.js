import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

function NoLabelExample() {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((selected) => selected !== seat));
    } else {
      if (selectedSeats.length < 10) {
        setSelectedSeats([...selectedSeats, seat]);
      }
    }
  };

  const renderSeats = () => {
    const seats = [];

    for (let i = 1; i <= 10; i++) {
      const seatId = `seat${i}`;
      seats.push(
        <React.Fragment key={seatId}>
          <Form.Check
            type="checkbox"
            id={seatId}
            checked={selectedSeats.includes(seatId)}
            onChange={() => handleSeatSelection(seatId)}
            aria-label={`Asiento ${i}`}
            style={{ display: 'none' }}
          />
          <label htmlFor={seatId}>
            {selectedSeats.includes(seatId) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-armchair-2"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#ffec00"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
                <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
                <path d="M8 12h8" />
                <path d="M7 19v2" />
                <path d="M17 19v2" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-armchair-2"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#00abfb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
                <path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
                <path d="M8 12h8" />
                <path d="M7 19v2" />
                <path d="M17 19v2" />
              </svg>
            )}
          </label>
        </React.Fragment>
      );
    }

    return seats;
  };

  return (
    <>
      {renderSeats()}
      <p>Asientos seleccionados: {selectedSeats.join(', ')}</p>
    </>
  );
}

export default NoLabelExample;