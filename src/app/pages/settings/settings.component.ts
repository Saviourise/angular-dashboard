import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor() {}

  ngOnInit(): void {
    const getInput: any = document.getElementById('image');
    getInput.addEventListener('change', (input: any) => {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e: any) {
          const img: any = document.getElementById('image_container');
          img.style.background = `url("${e.target.result}")`;
          img.style.backgroundSize = 'cover';
          img.style.backgroundPosition = 'center';
          img.style.backgroundRepeat = 'no-repeat';
          img.innerHTML = '';
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    });

    const getInput2: any = document.getElementById('product_image');
    getInput2.addEventListener('change', (input: any) => {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e: any) {
          const img: any = document.getElementById('product_image_container');
          img.style.background = `url("${e.target.result}")`;
          img.style.backgroundSize = 'cover';
          img.style.backgroundPosition = 'center';
          img.style.backgroundRepeat = 'no-repeat';
          img.innerHTML = '';
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    });
  }
}
