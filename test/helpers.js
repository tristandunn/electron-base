/* global global */

import React from "react";
import sinon from "sinon";
import { expect } from "chai";
import { shallow } from "enzyme";

global.React   = React;
global.sinon   = sinon;
global.expect  = expect;
global.shallow = shallow;