import apiInstance from "./config";

export const auth = ( data ) => apiInstance.post('/auth', data)