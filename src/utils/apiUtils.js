import { APIKEY } from "../config";

const formatContactDataIntoMessage = ({firstName, lastName, email, phone, newCustomer, message}) => ({
    body: newCustomer
        ? `You have received a message from a new client, ${firstName} ${lastName}.  It reads: ${message}.  You can contact ${firstName} ${lastName} at ${phone}.`
        : `You have received a message from an existing client, ${firstName} ${lastName}.  It reads: ${message}.  You can contact ${firstName} ${lastName} at ${phone}.`,
    from: email
})

export const submitValues = values => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('submitting values', () => {
        console.log(xhr.responseText)
    })
    xhr.open('POST', 'https://services.corneliuses.com/sendEmail')
    xhr.setRequestHeader('X-Api-Key', APIKEY)
    xhr.send(JSON.stringify(formatContactDataIntoMessage(values)))
}