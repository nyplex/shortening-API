const errorsMessages = [
    'No URL specified ("url" parameter is empty)',
    'Invalid URL submitted',
    'Rate limit reached. Wait a second and try again',
    'IP-Address has been blocked because of violating our terms of service',
    'shrtcode code (slug) already taken/in use',
    'Unknown error',
    'No code specified ("code" parameter is empty)',
    'Invalid code submitted (code not found/there is no such short-link)',
    'Missing required parameters',
    'Trying to shorten a disallowed Link. More information on disallowed links'
]

export let displayErrors = (errors) => {
    const code = errors.error_code - 1;
    $("#error-display").text(errorsMessages[code])
}

export let removeErrors = () => {
    $("#error-display").text("")
}