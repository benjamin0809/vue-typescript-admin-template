import axios from 'axios'

export const baseURL = ~location.host.indexOf('localhost') ? 'http://localhost/' : 'http://www.popochiu.com/' ;
const token = localStorage.getItem('token') ;
const instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {token}
});

const request = (url: string, params: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    instance.post(url, params)
                .then( response => { 
                  if(response.data) {
                    resolve(response.data)
                  }else{
                    resolve({})
                  }
                })
                .catch(function (error) {
                    // handle error
                    reject(error);
                })
  })
}
export const fetchFiles = (queryCondi: any) => {
  return request('file/getFiles', queryCondi);
}

export const removeFile = (id: number) => {
  return request('file/removeFileById', { id });
}

export const getFileType = () => {
  return request('file/getFileType', {});
}


