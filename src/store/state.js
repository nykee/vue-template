const state = {
    user: JSON.parse(sessionStorage.getItem('user')) || {},
};
export default state;