// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cloudflare from 'cloudflare';
import { Response } from 'node-fetch';

const client = new Cloudflare({
  apiKey: '144c9defac04969c7bfad8efaa8ea194',
  apiEmail: 'user@example.com',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource urlNormalization', () => {
  // TODO: investigate unauthorized HTTP response
  test.skip('update: only required params', async () => {
    const responsePromise = client.urlNormalization.update({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      scope: 'incoming',
      type: 'cloudflare',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('update: required and optional params', async () => {
    const response = await client.urlNormalization.update({
      zone_id: '9f1839b6152d298aca64c4e906b6d074',
      scope: 'incoming',
      type: 'cloudflare',
    });
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('delete: only required params', async () => {
    const responsePromise = client.urlNormalization.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('delete: required and optional params', async () => {
    const response = await client.urlNormalization.delete({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('get: only required params', async () => {
    const responsePromise = client.urlNormalization.get({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // TODO: investigate unauthorized HTTP response
  test.skip('get: required and optional params', async () => {
    const response = await client.urlNormalization.get({ zone_id: '9f1839b6152d298aca64c4e906b6d074' });
  });
});
