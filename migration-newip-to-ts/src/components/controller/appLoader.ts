import Loader from './loader';
export interface IAPI {
    apiKey?: string;
}
class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'e4f9d42a800b4da29d0f18c70c73006e', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
