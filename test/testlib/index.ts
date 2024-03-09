// tslint:disable-next-line
import 'mocha';

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');


chai.use(chaiAsPromised);
// chai.use(sinonChai);

export const {expect} = chai;
export {chai};
