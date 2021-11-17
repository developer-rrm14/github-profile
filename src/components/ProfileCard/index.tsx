import ResultCard from 'components/ResultCard';
import { Profile } from 'types/profile';
import './styles.css';

type Props = {
  profile: Profile;
};

const ProfileCard = ({ profile }: Props) => {
  return (
    <div className="container profile-container">
      <div className="img-container">
        <img src={profile.avatar_url} alt={profile.name} />
      </div>
      <div className="details-container">
        <h4 className="text-primary">Informações</h4>
        <ResultCard title="Perfil:" description={profile.url} />
        <ResultCard
          title="Seguidores:"
          description={String(profile.followers)}
        />
        <ResultCard title="Localidade:" description={profile.location} />
        <ResultCard title="Nome:" description={profile.name} />
      </div>
    </div>
  );
};

export default ProfileCard;
