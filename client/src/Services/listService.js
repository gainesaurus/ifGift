const BASEurl = 'http://localhost:3333';

export const getListsByUserId = async (userId) => {
  try {
    const result = await fetch(`${BASEurl}/mylists/${userId}`, {
      method: 'GET',
      mode: 'cors',
    });
    return result.json();
  } catch (err) {
    console.error(err);
  }
};

export const addToMyLists = async (userId) => {
  console.log(userId);
  try {
    const result = await fetch(`${BASEurl}/mylists/${userId}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(newList),
    });
    return await result.json();
  } catch (err) {
    console.error(err);
  }
};

export const updateList = async (list) => {
  try {
    const result = await fetch(`${BASEurl}/mylists`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(list),
    })
    return result.json();
  } catch (err) {
    console.error(err)
  }
}

