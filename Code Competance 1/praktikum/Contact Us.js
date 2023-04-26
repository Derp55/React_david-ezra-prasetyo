const submitButton = document.getElementById("Submit-btn");

      submitButton.addEventListener("click", function () {
        const firstName = document.getElementById("First-Name").value;
        const lastName = document.getElementById("Last-Name").value;
        const email = document.getElementById("Email1").value;
        const message = document.getElementById("kendala").value;

        alert(
          "First Name: " +
            firstName +
            "\nLast Name: " +
            lastName +
            "\nEmail: " +
            email +
            "\nMessage: " +
            message
        );
      });