function signup(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  if(!username || !password){
    alert("Please fill all fields");
    return; // ❗ yeh sabse important hai
  }

  // check if user already exists
  if(localStorage.getItem(username)){
    alert("User already exists");
    return;
  }

  const user = {
    username: username,
    password: password,
    email: email,
  };

  localStorage.setItem(username, JSON.stringify(user));

  alert("Successfully signed up");

  window.location.href = "login.html";
}



     function login() {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      const storedUser = localStorage.getItem(username);

      if (!storedUser) {
        alert("User not found");
        return;
      }

      const user = JSON.parse(storedUser);

      if (user.password === password) {
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
      } else {
        alert("Incorrect password");
      }
    }
    

    