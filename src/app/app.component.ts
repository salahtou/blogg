import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';


  posts = [

    {
      title: 'Mon Premier Post',
    content: 'Mon Premier Content Test Test',
    loveIts: 0,
       created_at: 'Wed Oct 27 2019 16:33:22'

      },

      {
        title: 'Mon Deux Post',
      content: 'Mon Deux Content Test Test',
      loveIts: 0,
         created_at: 'Wed Oct 27 2019 16:33:22'
  
        },

        {
          title: 'Mon Troi Post',
        content: 'Mon Troi Content Test Test',
        loveIts: 0,
           created_at: 'Wed Oct 27 2019 16:33:22'
    
          }
  ];

}
