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
  languages: 'languages',
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
                <li>GitHub <img src="../assets/qr1.png" alt="" /></li>
                <li>Linkedin <img src="../assets/qr1.png" alt="" /></li>
                <li>Instagram <img src="../assets/qr1.png" alt="" /></li>
              </ul>
          </div>
        </div>
      )}
    </div>
  );
}
