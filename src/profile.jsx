import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProfileNavbar, ProfileSection } from './components';

const ProfilePage = () => {
    return (
        <div className="relative z-0">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <ProfileNavbar />
            </div>
            <div className="profile-content mt-20 sm:mt-20 flex flex-col items-center sm:items-start bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <ProfileSection />
            </div>
        </div>
    );
}

export default ProfilePage;