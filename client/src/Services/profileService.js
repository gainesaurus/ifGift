const BASEurl = 'http://localhost:3333';

export const getUserInfo = async (userId) => {
  try {
    const result = await fetch(`${BASEurl}/profile/${userId}`, {
      method: 'GET',
      mode: 'cors',
    });
    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

export const addUser = async (user) => {
  try {
    const result = await fetch(`${BASEurl}/profile`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return result.json();
  } catch (err) {
    console.error(err);
  }
};

export const updateUser = async (user) => {
  try {
    const result = await fetch(`${BASEurl}/profile`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
    return result.json();
  } catch (err) {
    console.error(err);
  }
};
