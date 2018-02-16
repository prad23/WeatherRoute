    // Get settings.
    var fs = require('fs');
    var http = require('http');
    var config = fs.readFileSync("../../config.json").JSON.parse('config');

    // Get the MailChimp helper.
    var mailchimp = require('fs').readFileSync('../../assets/helpers/mailchimp.js');


    // Only process POST reqeusts.
    if (http.METHODS == "POST") {
    
        // Get the form fields and remove whitespace.
        $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

        // Check that data was sent to the mailer.
        if ( !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            exit;
        }
        
        // Add the customer to MailChimp.
        $MailChimp = new MailChimp($mailchimp_api_key);
        $MailChimp->call('lists/subscribe', array(
            'id' => $mailchimp_list_id,
            'email' => array('email' => $email),
            'double_optin' => true,
            'update_existing' => true,
            'replace_interests' => false,
            'send_welcome' => true
        ));
        
        // Set a 200 (okay) response code.
        http_response_code(200);

    } else {
    
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
    }
