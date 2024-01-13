import { Component, OnInit } from '@angular/core';
import { DiagnosticStateService } from 'src/app/services/diagnostic-state.service'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-diagnostic-step-two',
  templateUrl: './diagnostic-step-two.page.html',
  styleUrls: ['./diagnostic-step-two.page.scss'],
})
export class DiagnosticStepTwoPage implements OnInit {

  constructor(
    private diagnosticStateService: DiagnosticStateService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
  }

  saveAndNext(answer: any) { 
    this.diagnosticStateService.saveAnswer('stepTwo', answer);
    this.navCtrl.navigateForward('/diagnostic-step-three');
  }
}
