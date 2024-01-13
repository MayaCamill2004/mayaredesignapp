import { Component, OnInit } from '@angular/core';
import { DiagnosticStateService } from 'src/app/services/diagnostic-state.service'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diagnostic-step-one',
  templateUrl: './diagnostic-step-one.page.html',
  styleUrls: ['./diagnostic-step-one.page.scss'],
})
export class DiagnosticStepOnePage implements OnInit {
  selectedAnswer: any;

  constructor(
    private diagnosticStateService: DiagnosticStateService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  saveAndNext(answer: any) { 
    this.diagnosticStateService.saveAnswer('stepOne', answer);
    this.navCtrl.navigateForward('/diagnostic-step-two');
  }
}
