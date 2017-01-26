/* eslint no-console: 0 */
import Rx from 'rx';
import events from 'core/events';
import serviceConfiguration from 'core/config/serviceConfiguration';
import serviceController from 'core/services/serviceController';
import viewConfiguration from 'core/config/viewConfiguration';

const messages = new Rx.Subject();

const init = () => {
	events.all.subscribe(function(event) {
		console.log(new Date().toJSON(),
			'events.all',
			`${event.source}.${event.eventName}`,
			event.details
		);
	}, function(...args) {
		console.error(new Date().toJSON(), 'events stream error', args);
	}, function(...args) {
		console.warn(new Date().toJSON(), 'events stream completed', args);
	});

	serviceController.activeProjects.subscribe(function(state) {
		console.log(new Date().toJSON(), 'serviceController.activeProjects', state);
	}, function() {
		console.error(new Date().toJSON(), 'serviceController.activeProjects stream error', arguments);
	}, function() {
		console.warn(new Date().toJSON(), 'serviceController.activeProjects stream completed', arguments);
	});

	serviceConfiguration.changes.subscribe(function(config) {
		console.log(new Date().toJSON(), 'serviceConfiguration.changes', config);
	}, function() {
		console.error(new Date().toJSON(), 'serviceConfiguration.changes stream error', arguments);
	}, function() {
		console.warn(new Date().toJSON(), 'serviceConfiguration.changes stream completed', arguments);
	});

	viewConfiguration.changes.subscribe(function(config) {
		console.log(new Date().toJSON(), 'viewConfiguration.changes', config);
	}, function() {
		console.error(new Date().toJSON(), 'viewConfiguration.changes stream error', arguments);
	}, function() {
		console.warn(new Date().toJSON(), 'viewConfiguration.changes stream completed', arguments);
	});

	messages.subscribe((message) => {
		console.error(message);
	});

	window.onerror = function(message, url, line) {
		window.console.error(`Unhandled error, message: [${message}], url: [${url}], line: [${line}]`);
		messages.onNext({
			name: 'error',
			errorType: 'unhandled',
			message,
			url,
			line
		});
		return false; // don't suppress default handling
	};

};

export default {
	init,
	messages
};
