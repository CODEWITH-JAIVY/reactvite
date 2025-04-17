import React, { useEffect, useState } from 'react';

function Roposetory() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/jaivyroy/repos')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch repositories');
        }
        return res.json();
      })
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-4 text-lg">Loading Repositories...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">📦 My GitHub Repositories</h2>
      <ul className="space-y-3">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="p-4 border border-gray-200 rounded-md shadow hover:shadow-lg transition duration-200"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              {repo.name}
            </a>
            <p className="text-sm text-gray-600">
              {repo.description || 'No description provided.'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Roposetory;
