export const submitValues = values => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('submitting values', () => {
        console.log(xhr.responseText)
    })
    xhr.open('POST', 'https://services.corneliuses.com/sendEmail')
    xhr.setRequestHeader('X-Api-Key', process.env.REACT_APP_APIKEY)
    xhr.send(JSON.stringify(values))
}