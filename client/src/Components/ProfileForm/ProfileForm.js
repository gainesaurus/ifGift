import './ProfileForm.css';

function ProfileForm () {
  const submitHandler = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const birthDate = new Date(e.target.date.value).toISOString();
    const address = e.target.address.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const country = e.target.country.value;
    const newProfile = { firstName, lastName, email, birthDate, address, city, state, country };
    // await addProfile(newProfile);
    await e.target.reset();
  }

  return (
    <form className='profile-input-form' onSubmit={submitHandler}>
      <h1 className='form-title'>Edit Your Profile</h1>
      <h2 className='input-title'>name:</h2>
      <input
        required name='firstName' className='name-input' type='text' placeholder="First name..."
      />
      <input
        required name='lastName' className='name-input' type='text' placeholder="Last name..."
      />
      <h2 className='input-title'>e-mail:</h2>
      <input
        required name='email' className='email-input' type='text' placeholder="Preferred e-mail..."
      />
      <h2 className='input-title'>birthday:</h2>
      <input min={new Date().toISOString().slice(0,-8)} name='date' className='date-input' type='datetime-local' />
      <h2 className='input-title'>address:</h2>
      <input name='address' className='address-input' type='text' placeholder="1212 Give Better Blvd..." />
      <input name='city' className='city-input' type='text' placeholder="Ifsburg..." />
      <input name='state' className='state-input' type='text' placeholder="Giftesota..." />
      <input name='country' className='country-input' type='text' placeholder="Giftopia..." />

      <button className='save-btn' type='submit'>Save</button>
    </form>
  );
}

export default ProfileForm;