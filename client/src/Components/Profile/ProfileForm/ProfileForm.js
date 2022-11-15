import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../../Services/profileService';

import './ProfileForm.css';


function ProfileForm () {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [image, setImage] = useState()
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const profilePic = image;
    const name = e.target.name.value;
    const userName = e.target.username.value;
    const pronouns = e.target.pronouns.value;
    const email = user.email;
    const address = e.target.address.value;
    const birthday = new Date(e.target.date.value).toISOString();  // check
    const giftPref = e.target.giftPreference.value.value;
    const newProfile = { profilePic, name, userName, pronouns, email, address, birthday, giftPref };
    await updateUser(newProfile);
    navigate('/profile');
  }

  const imageHandler = async (e) => {
    setImage([e.target.files]);
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <form className='profile-input-form' onSubmit={submitHandler}>
        <h1 className='form-title'>Edit Your Profile</h1>
        <h2 className='input-title'>Profile Picture:</h2>
        <input
        type="file" multiple={false}
        accept="image/*" onChange={imageHandler} />
        <h2 className='input-title'>name:</h2>
        <input
          required name='name' className='name-input' type='text' placeholder="your name..."
        />
         <h2 className='input-title'>username:</h2>
        <input
          required name='username' className='name-input'
          type='text' placeholder="create a username..."
        />
        <h2 className='input-title'>pronouns:</h2>
        <input
          name='pronouns' className='name-input'
          type='text' placeholder="your pronouns..."
        />
        <h2 className='input-title'>e-mail:</h2>
        <p>{user.email}</p>
        <h2 className='input-title'>birthday:</h2>
        <input
          min={new Date().toISOString().slice(0,-8)}
          name='date' className='date-input'
          type='date'
        />
        <h2 className='input-title'>address:</h2>
        <input
          name='address' className='address-input' type='text'
          placeholder="1212 Give Better Blvd. Ifsburg, Giftesota, USA"
        />
        <h2 className='input-title'>my gift preference:</h2>
        <select required name ='giftPreference' className="gift-pref-select">
          <option value="Gifts from My Want List">My Want List</option>
          <option value="Gifts from My Registries">My Registries</option>
          <option value="Charitable Donations">Charitable Donations</option>
        </select>
        <button className='save-btn' type='submit'>Save Changes</button>
      </form>
    )
  );
}

export default ProfileForm;