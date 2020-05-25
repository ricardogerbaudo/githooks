import React, { useState, useEffect } from 'react';

export default function GitRepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/ricardogerbaudo/repos');
      const data = await response.json();
      setRepositories(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = repositories.filter(repository => repository.favorite);
    document.title = `You have ${filtered.length} favorite repos`;
  }, [repositories]);

  function handleFavorite(id) {
    const newRepositories = repositories.map(repository => {
      return repository.id === id ? { ...repository, favorite: !repository.favorite } : repository;
    });
    setRepositories(newRepositories);
  }

  return (
    <>
      {repositories.map(repository => (
        <p key={repository.id}>
          {repository.favorite && "⭐"}
          {repository.name}
          <button onClick={() => handleFavorite(repository.id)}>{repository.favorite ? "Remove" : "Add"} Favorite</button>
        </p>
      ))}
    </>
  );
}
