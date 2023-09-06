import axios from "axios";

export const sendForm = async (data) => {
    try {
       await axios.post('http://localhost:3002/api/send-email', data);
        console.log('Успешная отправка с клиента'); 
    } catch (error) {
        console.log('Ошибка при отправке с клиента: ', error); 
    } 
}