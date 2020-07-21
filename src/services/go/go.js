import cctray from 'services/cctray/cctray';
import joinUrl from 'common/joinUrl';

export default {
    getInfo: () => ({
        typeName: 'GoCD',
        baseUrl: 'go',
        icon: 'services/go/icon.png',
        logo: 'services/go/logo.png',
        defaultConfig: {
            baseUrl: 'go',
            name: '',
            projects: [],
            url: '',
            username: '',
            password: '',
            token: '',
            updateInterval: 60
        },
        fields: [
            {
                type: 'url',
                name: 'Server URL (cctray XML)',
                help: 'Example: http://server.com/cctray.xml'
            },
            {
                type: 'username',
                help: 'Use either username/password or token authentication'
            },
            {
                type: 'password',
                help: 'Use either username/password or token authentication'
            },
            {
                type: 'token',
                help: 'Create a personal access token at <a href="https://gocd-server.domain.com/go/access_tokens" target="_blank">https://gocd-server.domain.com/go/access_tokens</a>'
            }
        ]
    }),
    getAll: (settings) => {
        const url = joinUrl(settings.url, 'cctray.xml');
        return cctray.getAll({ ...settings, ...{ url } });
    },
    getLatest: (settings) => {
        const url = joinUrl(settings.url, 'cctray.xml');
        return cctray.getLatest({ ...settings, ...{ url } });
    }
};
