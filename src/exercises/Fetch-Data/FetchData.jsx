import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FetchData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchUsers(url) {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    }

    fetchUsers('https://jsonplaceholder.typicode.com/users');
  }, []);

  return (
    <>
      {loading && 'Loading...'}

      {error && 'Oops, could not fetch users, please try again later!'}

      {data && data.map((user) => {
        const { id, name, email } = user;
        
        return (
          <div key={id}>
            {id}. {name} - {email}
          </div>
        );
      })}
    </>
  );
}

export default FetchData;
