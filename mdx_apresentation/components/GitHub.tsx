import React, { useEffect, useState } from 'react';
import './GitHub.css';

interface GitHubData {
  name: string;
  owner: {
    avatar_url: string;
  };
}

const style = {
  gitHubKevin: 'content',
  socialMedia: 'socialMedia',
}

export function GitHub() {
  const [kevinData, setKevinData] = useState<GitHubData | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/KevinDik/kevindik')
      .then((resp) => resp.json())
      .then((data) => {
        // Faz nova requisição para obter as linguagens usadas no repositório
        fetch(data.languages_url)
          .then((resp) => resp.json())
          .then((langData) => {
            const kevinObj: GitHubData = {
              name: data.name,
              owner: {
                avatar_url: data.owner.avatar_url,
              },
            };
            setKevinData(kevinObj);
          });
      });
  }, []);

  return (
    <div className={style.gitHubKevin}>
      {kevinData && (
        <div>
          <img src={kevinData.owner.avatar_url} alt="Avatar" />
          <h1>{kevinData.name}</h1>
          <div className={style.socialMedia}>
              <ul>
                <li>GitHub</li>
                <li>Linkedin</li>
                <li>Instagram</li>
              </ul>
          </div>
        </div>
      )}
    </div>
  );
}
