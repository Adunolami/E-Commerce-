export const getError = (error) => {    //accept error object 
    return error.response && error.response.data.message //check error.response if it exist and error.response.data.message exist
    ? error.response.data.message
    : error.message
}