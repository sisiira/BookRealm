import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [recentChanges, setRecentChanges] = useState([]);

  useEffect(() => {
    axios.get('https://example.com/api/RecentChanges')
      .then(response => {
        setRecentChanges(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <main>
      <Header />
      <div>
        <h2>Recent Changes</h2>
        {recentChanges.map((change, index) => (
          <div key={index}>
            <h3>{change.title}</h3>
            <p>{change.description}</p>
          </div>
        ))}
      </div>
      <Outlet />
    </main>
  );
};

export default Home;