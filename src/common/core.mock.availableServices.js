define(function() {

	'use strict';

	return [
		{
			typeName: 'Atlassian Bamboo',
			baseUrl: 'bamboo',
			urlHint: 'URL, e.g. http://ci.openmrs.org/',
			urlHelp: 'For Bamboo OnDemand use https://[your_account].atlassian.net/builds',
			icon: 'src/services/bamboo/icon.png',
			logo: 'src/services/bamboo/logo.png',
			defaultConfig: {
				baseUrl: 'bamboo',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "CCTray Generic",
			baseUrl: "cctray",
			urlHint: "http://cruisecontrol.instance.com/cctray.xml",
			icon: 'src/services/cctray/icon.png',
			logo: 'src/services/cctray/logo.png',
			defaultConfig: {
				baseUrl: 'cctray',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "CruiseControl",
			baseUrl: "cruisecontrol",
			urlHint: "http://cruisecontrol.instance.com/",
			icon: 'src/services/cruisecontrol/icon.png',
			logo: 'src/services/cruisecontrol/logo.png',
			defaultConfig: {
				baseUrl: 'cruisecontrol',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "CruiseControl.NET",
			baseUrl: "cruisecontrol.net",
			urlHint: "http://build.nauck-it.de/",
			icon: 'src/services/cruisecontrol.net/icon.png',
			logo: 'src/services/cruisecontrol.net/logo.png',
			defaultConfig: {
				baseUrl: 'cruisecontrol.net',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "CruiseControl.rb",
			baseUrl: "cruisecontrol.rb",
			urlHint: "http://cruisecontrolrb.thoughtworks.com/",
			icon: 'src/services/cruisecontrol.rb/icon.png',
			logo: 'src/services/cruisecontrol.rb/logo.png',
			defaultConfig: {
				baseUrl: 'cruisecontrol.rb',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "ThoughtWorks GO",
			baseUrl: "go",
			urlHint: "http://example-go.thoughtworks.com/",
			icon: 'src/services/go/icon.png',
			logo: 'src/services/go/logo.png',
			defaultConfig: {
				baseUrl: 'go',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "Jenkins",
			baseUrl: "jenkins",
			urlHint: "http://ci.jenkins-ci.org/",
			icon: 'src/services/jenkins/icon.png',
			logo: 'src/services/jenkins/logo.png',
			defaultConfig: {
				baseUrl: 'jenkins',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "TeamCity",
			baseUrl: "teamcity",
			urlHint: "http://teamcity.jetbrains.com/",
			icon: 'src/services/teamcity/icon.png',
			logo: 'src/services/teamcity/logo.png',
			defaultConfig: {
				baseUrl: 'teamcity',
				name: '',
				projects: [],
				url: '',
				username: '',
				password: '',
				updateInterval: 60
			}
		},
		{
			typeName: "Travis",
			baseUrl: "travis",
			icon: 'src/services/travis/icon.png',
			logo: 'src/services/travis/logo.png',
			defaultConfig: {
				baseUrl: 'travis',
				name: '',
				projects: [],
				username: '',
				updateInterval: 60
			}
		}
	];
});
