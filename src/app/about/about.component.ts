import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // values
  year_value = 26;
  location_value = 31;
  gps_value = 4;
  // img and icons
  img = '../../assets/icon_1.svg';
  gps_icon = '../../assets/GPS.svg';
  location_icon = '../../assets/location_pin.svg';
  bookmark_icon = '../../assets/banner_flag_bookmark.svg';
}