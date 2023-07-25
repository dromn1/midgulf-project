import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  card_name_s1_1 = 'Leading insurer';
  card_text_s1_1 = 'The Mediterranean and Gulf Cooperative Insurance and Reinsurance Company (MEDGULF) is one of the Kingdoms largest insurance companies, providing a comprehensive choice of cooperative Health, Motor, Property and other insurance and reinsurance services.';
  card_text_s1_2 = 'Licensing number EM/3/ 97200 and a paid-up capital of 1,050,000,000 SAR and a commercial registration number: 101231925.';
  card_text_s1_3 = 'Licensed and controlled by';
  img_height= 400;
  scb = 'Saudi central bank 💡';
  card_name_s2_1 = 'In a rapidly growing and changing sector';
  card_text_s2_1 = 'MEDGULF contributes to providing you the best customer service and acquiring your needs. We offer various insurance solutions that suit most industries from engineering, aviation and industrials to motor, property insurance and health care for groups.';

  img = '../../assets/pexels.jpg';
}