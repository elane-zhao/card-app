import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  isLoading = false;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
  }
  ngOnInit(): void {
  }

}
