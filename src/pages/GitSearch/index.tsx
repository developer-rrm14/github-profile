import './styles.css';

import { useState } from 'react';
import axios from 'axios';
import ProfileCard from 'components/ProfileCard';
import { Profile } from 'types/profile';
import CardLoader from './CardLoader';

type FormData = { username: string };

const GitSearch = () => {
  const [profile, setProfile] = useState<Profile>();
  const [isLoading, setIsloading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    username: '',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsloading(true);
    axios
      .get(`https://api.github.com/users/${formData.username}`)
      .then((response) => {
        setProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setProfile(undefined);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div className="git-search-container">
      <div className="container search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              name="username"
              type="text"
              value={formData.username}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? (
        <CardLoader />
      ) : (
        profile && <ProfileCard profile={profile} />
      )}
    </div>
  );
};

export default GitSearch;
