import request from './xhr';

export default function post(url: string, data: any, header = {}) {
  return new Promise((resolve, reject) => {
    request({
      action: url,
      data,
      headers: header,
      onSuccess: (res: any) => {
        resolve(res);
      },
      onError: (err: any) => {
        reject(err);
      },
    });
  });
}
