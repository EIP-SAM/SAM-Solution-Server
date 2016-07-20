//
// This util is use to retieve the connected user information
//

export function getUser() {
  return {
    username: 'admin',
    email: 'admin@admin.com',
    isAdmin: true,
  };
}

export function isAdmin() {
  return true;
}
