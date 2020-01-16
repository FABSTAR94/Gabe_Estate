// email from https://postmail.invotes.com
        const form_id_js = "javascript_form";

        const data_js = {
            "access_token": "5q0f6z0u28ro0caafydnvk1i"
        };

        function js_onSuccess() {
            // remove this to avoid redirect
            window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
            alert("Your message has been sent.We will get back to you within 24 hours.");

        }

        function js_onError(error) {
            // remove this to avoid redirect
            window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
            alert(`There has been an error ${error}`);
        }

        function sendForm(event) {
            const request = new XMLHttpRequest();

            request.onreadystatechange = function() {
                if (request.readyState == 4 && request.status == 200) {
                    js_onSuccess();
                } else
                if(request.readyState == 4) {
                    js_onError(request.response);
                }
            };

            const subject = "Faviola, You have a new client interested!";

            const customerInformation = {
                name: document.getElementById('inputName').value,
                email: document.getElementById('inputEmail').value,
                address: document.getElementById('inputAddress').value,
                city: document.getElementById('inputCity').value,
                state: document.getElementById('inputState').value,
                zip: document.getElementById('inputZip').value,
                message: document.getElementById('inputMessage').value,
            }

            const message = `This is my information below. \n name: ${customerInformation.name} \n email: ${customerInformation.email} \n address: ${customerInformation.address} \n city: ${customerInformation.city} \n state: ${customerInformation.state} \n zip: ${customerInformation.zip} \n message: ${customerInformation.message}`;
             console.log(message);
            data_js['subject'] = subject;
            data_js['text'] = message;
            const params = toParams(data_js);

            request.open("POST", "https://postmail.invotes.com/send", true);
            request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            request.send(params);

            event.preventDefault();
        }

        function toParams(data_js) {
            const form_data = [];
            for ( const key in data_js ) {
                form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
            }

            return form_data.join("&");
        }

