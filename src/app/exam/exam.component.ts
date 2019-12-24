import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  values: any;
  private datareloading: Subscription
  display: boolean = false;
  rowdata: string
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.results();
    this.datareloading = interval(10000).subscribe((val) => { this.results()})
  }
  results() {
    this.http.dataDetails().subscribe((res) => {
      this.values = res;
      console.log('resultsshow', this.values);
    })
  }
  showrowdata(user) {
    this.rowdata = JSON.stringify(user)
    this.display = true;
  }
}
