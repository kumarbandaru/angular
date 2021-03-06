import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {

   userData: Array<any> = [];
  pageInfo: Array<number> = [];
  selectedPage: number;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getUserData(1);
  }
  getUserData(pageNumber) {
    this.selectedPage = pageNumber;
    const url = `users?page=${pageNumber}`;
    this.http.get(url).subscribe(item => {
      this.userData = item['data'];
      console.log(item);
      this.pageInfo = Array(item['total_pages']);
      console.log(this.pageInfo);
    });
  }
  pageChange(number) {
    this.getUserData(number);
  }
}
