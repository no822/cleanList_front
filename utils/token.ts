const key = 'accessToken';

export const saveToken = (token: string) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, token);
    }
};

export const getToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem(key);
        if (token) {
            return token;
        }
        return "";
    }
};

export const deleteToken = () => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, '');
    }
}
