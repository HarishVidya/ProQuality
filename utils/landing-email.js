export function landingEmail(data) {

    const apiEndpoint = '/api/landemail';
    console.log(JSON.stringify(data));

    fetch(apiEndpoint, {
        method: 'POST',
        body: JSON.stringify(data),
    }).then((res) => res.json()).then((response) => {
            alert(response.message);
        }).catch((err) => {
            alert(err)
        });
}