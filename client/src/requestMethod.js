import axios from "axios"
 
const BASE_URL="https://echobasket-api.vercel.app/api/";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWU4OWE5ZTA1YzdjODJmYzczODA2ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNDg4OTA5MywiZXhwIjoxNzA1MTQ4MjkzfQ.-Sqt9aByDxyQ6S337us6W-aZE-Frktcxn-Y_x3L9KPU";

export const publicRequest =axios.create({
    baseURL:BASE_URL,
});

export const userRequest =axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
})