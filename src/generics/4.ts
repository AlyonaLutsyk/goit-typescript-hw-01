type AppUser = {
 name: string;
 surname: string;
 email: string;
 password: string;
}

function createOrUpdateUser(initialValues: Partial<AppUser>): AppUser {
  const defaultUser: AppUser = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  return { ...defaultUser, ...initialValues };
}

createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});
