const BASEurl = 'http://localhost:3333';

export const getAllLists = async (userId) => {
  try {
    const result = await fetch(`${BASEurl}/mylist/user/${userId}`, {
      method: 'GET',
      mode: 'cors',
    });
    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

export const addToMyLists = async (newList) => {
  try {
    const result = await fetch(`${BASEurl}/mylists`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newList),
    });

    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

