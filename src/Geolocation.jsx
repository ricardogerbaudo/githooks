import React, { useState, useEffect } from 'react';

export default function Geolocation() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);
  },[location]);

  function handlePositionReceived({coords}) {
    const { latitude, longitude } = coords;
    setLocation({ latitude, longitude })
  }

  return (
    <>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </>
  );
}
