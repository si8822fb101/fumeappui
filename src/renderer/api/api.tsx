export const registerUser = async (username: string, pin: string) => {
  const response = await fetch('http://localhost:8080/api/registerUser', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, pin }),
  });
  return response;
};

export const loginUser = async (username: string, pin: string) => {
  const response = await fetch('http://localhost:8080/api/userLogon', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, pin }),
  });
  return response;
};

export const logoutUser = async (username: string) => {
  const response = await fetch('http://localhost:8080/api/userLogout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  });
  return response;
};
