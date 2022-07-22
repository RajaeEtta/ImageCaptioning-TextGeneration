import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { Text } from '../models/text.module';
import { API_URL } from '../env.module';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class UploadGenerateService {

  constructor(private http: HttpClient) { }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  getText() {
    return this.http.get<Text>(`${API_URL}/predict`);
 }

 postFile(fileToUpload: File) {
  const formeData: FormData = new FormData();
  formeData.append('Image', fileToUpload, fileToUpload.name);
  return this.http
    .post(`${API_URL}/predict`, formeData);
}
}
