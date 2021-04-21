export default (vtubers = [],action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return vtubers;
        default:
            return vtubers;
    }
}