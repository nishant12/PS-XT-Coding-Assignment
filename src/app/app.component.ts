import { Component, OnInit } from '@angular/core';
import { LaunchService } from './service/launch.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  programs = [];

  constructor(private launchService: LaunchService) { }

  ngOnInit(): void {
    this.getLaunchPrograms();
  }

  getLaunchPrograms(): void {
    this.launchService.getLaunchPrograms().subscribe(
      (programs) => {
        this.programs = programs;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onFiltered(filteredPrograms) {
    this.programs = filteredPrograms;
  }
}
