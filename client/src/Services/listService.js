const BASEurl = 'http://localhost:3333';

export const getListsByUser = async (user) => {
  try {
    const result = await fetch(`${BASEurl}/mylists`, {
      method: 'GET',
      mode: 'cors',
    });
    result.forEach(list => {
      if (list.createdBy === user.email) return result;
    })
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

