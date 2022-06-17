import { Component } from '@angular/core';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService) {
    toastrService.message('Merhaba', 'Bilgi', {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.BottomCenter,
    });
    toastrService.message('Merhaba', 'Bilgi', {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopCenter,
    });
    toastrService.message('Merhaba', 'Bilgi', {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.BottomLeft,
    });
    toastrService.message('Merhaba', 'Bilgi', {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopLeft,
    });
  }
}

// Jquery nin testi
// $(document).ready(()=>{alert("test")})

$.get('https://localhost:7036/api/products', (data) => {
  console.log(data);
});
