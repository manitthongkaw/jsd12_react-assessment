export function getMembers() {
  const getData = async () => {
    try {
      const res = await fetch(`https://67eca027aa794fb3222e43e2.mockapi.io/members`);
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return await res.json()
    } catch (err) {
      console.error(err.message);
    }
  };
  return getData();
}

export function createMember(newMember) {
  const postData = async () => {
    try {
      const res = await fetch(`https://67eca027aa794fb3222e43e2.mockapi.io/members`, {
        method: "POST",
        headers: { "Content-Type": "application/json", },
        body: JSON.stringify(newMember),
      })
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return await res.json()
    } catch (err) {
      console.error(err.message)
    }
  }

  return postData()
}

export function deleteMember(memberId) {
  const removeData = async () => {
    try {
      const res = await fetch(`https://67eca027aa794fb3222e43e2.mockapi.io/members/${memberId}`, {
        method: "DELETE",
      })
      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
      return await res.json()
    } catch (err) {
      console.error(err.message)
    }
  }

  return removeData()
}