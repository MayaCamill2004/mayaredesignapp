
import { Component, OnInit } from '@angular/core';
import { DiagnosticStateService } from 'src/app/services/diagnostic-state.service'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diagnostic-step-three',
  templateUrl: './diagnostic-step-three.page.html',
  styleUrls: ['./diagnostic-step-three.page.scss'],
})
export class DiagnosticStepThreePage implements OnInit {

  constructor(
    private diagnosticStateService: DiagnosticStateService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  saveAndNext(answer: any) { 
    this.diagnosticStateService.saveAnswer('stepTwo', answer);
    this.navCtrl.navigateForward('/diagnostic-results');
  }
}
