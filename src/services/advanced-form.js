import request from 'umi-request';

export async function fakeSubmitForm(params) {
  return request('/api/advanced-form/forms', {
    method: 'POST',
    data: params,
  });
}
