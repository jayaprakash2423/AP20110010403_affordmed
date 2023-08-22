
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAuthorizationToken } from './api';

const API_BASE_URL = 'http://20.244.56.144';

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      const token = await getAuthorizationToken();
      const response = await axios.get(`${API_BASE_URL}/train/trains`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTrains(response.data);
    };

    fetchTrains();
  }, []);

  return (
    <div>
      {trains.map(train => (
        <div key={train.trainNumber}>
          {}
        </div>
      ))}
    </div>
  );
};

export default TrainList;
