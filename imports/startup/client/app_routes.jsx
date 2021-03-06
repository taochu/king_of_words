import React from "react";
import { FlowRouter } from "meteor/kadira:flow-router";
import { mount } from "react-mounter";
import AppContainer from "../../ui/AppContainer";
import SignUp from "../../ui/SignUp";
import Home from "../../ui/Home";
import PlayContainer from "../../ui/play/PlayContainer";
import ResultContainer from "../../ui/result/ResultContainer";

export const appRoutes = [
	FlowRouter.route("/", {
		name: "home",
		action() {
			mount(AppContainer, { content: props => <Home {...props} /> });
		}
	}),
	FlowRouter.route("/sign-up", {
		name: "sign-up",
		action() {
			mount(AppContainer, { content: <SignUp /> });
		}
	}),
	FlowRouter.route("/play", {
		name: "play",
		action() {
			mount(AppContainer, { content: props => <PlayContainer {...props} /> });
		}
	}),
	FlowRouter.route("/result", {
		name: "result",
		action() {
			mount(AppContainer, {
				content: props => <ResultContainer {...props} />
			});
		}
	})
];
