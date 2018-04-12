require('dotenv').config();
const HubSpotAPI = require('../dist/hs-api');
const expect = require('chai').expect;
const debug = require('debug')('hs-api:tests'); //eslint-disable-line
const { schemaContacts, validate } = require('./schemas/contacts');

const { E2E_TESTS_HAPI_KEY: hapikey } = process.env;
const hs = new HubSpotAPI({ hapikey });

describe('Get Contact List', async () => {
  it('returns a valid contact response', async () => {
    const contacts = await hs.contacts.getContacts();
    expect(validate(contacts, schemaContacts).error).to.be.a('null');
  });
});
