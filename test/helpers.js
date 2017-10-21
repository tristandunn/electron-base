/* global global */

import React from "react";
import sinon from "sinon";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";
import { configure, shallow } from "enzyme";

configure({
  adapter : new Adapter()
});

global.React   = React;
global.sinon   = sinon.sandbox.create();
global.expect  = expect;
global.shallow = shallow;
