// @flow
import React, { PureComponent } from "react";
import Navigator from "./Navigator";
import { Route, Switch } from "react-router-dom";
import Auth from "../case/designpattern/auth/Auth";
import "./Showcase.scss";
import { NoMatch, ShowcaseWelcome } from "./showcase_decorator";
import Lazy from "../case/performance/lazy/Lazy";

export default class Showcase extends PureComponent {
  render() {
    return (
      <section className="Showcase__container">
        <div className="Showcase__navigator">
          <Navigator {...this.props} />
        </div>
        <div className="Showcase__cases">
          <Switch>
            {/*根目录*/}
            <Route exact path="/" component={ShowcaseWelcome} />
            {/*权限认证*/}
            <Route path="/auth" component={Auth} />

            <Route path="/lazy" component={Lazy} />

            {/*非匹配路由*/}
            <Route path="/" component={NoMatch} />
          </Switch>
        </div>
      </section>
    );
  }
}
