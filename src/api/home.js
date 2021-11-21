import request from '../lib/request.js'

function getDate(){
    return request.get('/repository/get?id=294340&token=YuTYLOHzVbLJTaFRCMFPKO8MHbg-XbgP');
}

export {
    getDate
}
