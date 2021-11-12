function validate() {

    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var loginBtn = document.getElementById('loginBtn');

    // username.addEventListener('keyup', () => {
    //   loginBtn.disabled = !username.value;
    //   loginBtn.disabled = !password.value;
    // });

    // password.addEventListener('keyup', () => {
    //  loginBtn.disabled = !password.value;
    //  loginBtn.disabled = !username.value;
    // });




    if(username.value == "ad" && password.value == "a")
    {
        alert("Login successful");
        window.location.href = "/game.html/";
    }
    else{
        alert("Login failed");
    }
}

{/* <operationBindings> game.html
      <operationBinding operationType="fetch">
         <customSQL>
         SELECT  Name, Adress, Phone, Age                       
        FROM tableName
            where Age > 20

           </customSQL>
     </operationBinding>
  </operationBindings>   */}