import api from '../api/access';
import ajax from '../utils/ajax';

const logout = function userLogout(): Promise<any> {
    return ajax.get(api.logout, {});
};

export {
    logout,
};
