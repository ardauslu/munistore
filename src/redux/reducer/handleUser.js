
const handleUser =(state = null, action) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload
            break;
    
        case "LOGOUT":
            return null;
            break;
            
        default:
            return state;
            break;
    }
}

export default handleUser;