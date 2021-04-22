function Login() {
            var user = document.getElementById("userInput").value;
            var pass = document.getElementById("passInput").value;
            if(user && pass){
                document.getElementById("response").innerHTML += "Successful Login. Redirecting...";
                setTimeout(function () {
                    window.location.href = "landingPage.html";
                }, 5000);

            }
            else{
                document.getElementById("response").innerHTML += "Login Failure. Please Refresh and fill out all login forms."
            }
        }
        function Create() {
            var email = document.getElementById("emailInput").value;
            var user2 = document.getElementById("userInput2").value;
            var pass2 = document.getElementById("passInput2").value;
            if(email && user2 && pass2){
                document.getElementById("response2").innerHTML += "Successful Account Creation.  Redirecting...";
                setTimeout(function () {
                    window.location.href = "landingPage.html";
                }, 5000);
            }
            else{
                document.getElementById("response2").innerHTML += "Creation Failure. Please Refresh and fill out all create account forms."
            }
        }