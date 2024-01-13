import { Component, OnInit } from '@angular/core';
import { DiagnosticStateService } from 'src/app/services/diagnostic-state.service'; // Update the path as necessary

@Component({
  selector: 'app-diagnostic-results',
  templateUrl: './diagnostic-results.page.html',
  styleUrls: ['./diagnostic-results.page.scss'],
})
export class DiagnosticResultsPage implements OnInit {
  results: any; 

  constructor(private diagnosticStateService: DiagnosticStateService) {}

  ngOnInit() {
    this.results = this.diagnosticStateService.getResults();
  
  }
}
