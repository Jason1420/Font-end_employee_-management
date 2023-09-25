import { RootState } from './../../store/store';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { serverUrl } from '../../utils/constant';

const api = axios.create({
    baseURL: serverUrl,
});

const user = useSelector((state: RootState) => state.auth)
// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        if (user.accessToken) {
            config.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
export default api