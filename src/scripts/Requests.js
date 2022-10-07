import { getRequests } from "./dataAccess.js";

const requestList = (request) => {
    return `<li>${request.description}</li>`
}

export const Requests = () => {
    const requests = getRequests()

    let html = `
    <ul>
        ${requests.map(requestList).join("")}
    </ul>`

    return html
}