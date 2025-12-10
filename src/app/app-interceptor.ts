import { HttpInterceptorFn } from '@angular/common/http';

const bulklyUrlApiBaseUrl = 'https://bulkbuy-rumt.onrender.com/';

export const appInterceptor: HttpInterceptorFn = (req, next) => {

  const fullURL = `${bulklyUrlApiBaseUrl}${req.url}`;
  const modifiedRequest = req.clone({ url: fullURL });
  
  return next(modifiedRequest);
  
};
