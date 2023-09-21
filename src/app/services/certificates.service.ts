import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertTimestampToDate } from '../utils';
import { Certificate, CertificatesData } from '../models/certificates/certificates.model';

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  constructor(private http: HttpClient) { }

  getDataFromJson(): Observable<Certificate[]> {
    return this.http.get<CertificatesData>('assets/data.json').pipe(
      map((certficatesData: CertificatesData) => {
        const certificates = certficatesData.certificates.data;

        certificates.forEach((certificate: Certificate) => {
          certificate.date = convertTimestampToDate(certificate.date);
        });

        return certificates;
      })
    );
  }

}
