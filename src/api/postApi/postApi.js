const loginAdmin = async (login) => {
   const response = await fetch(
      "http://localhost:8000/api/v1/admin/login-admin",
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(login),
      }
   );

   return response.json();
};

export { loginAdmin };
