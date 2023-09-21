import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Certificate } from 'src/app/models/certificates/certificates.model';
import { CertificatesService } from 'src/app/services/certificates.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  displayedColumns: (keyof Certificate)[] = ['name', 'date', 'email', 'active'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private certificatesService: CertificatesService) {}

  ngOnInit(): void {
    this.certificatesService.getDataFromJson().subscribe((certificates: Certificate[]) => {
      this.dataSource.data = certificates;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}

