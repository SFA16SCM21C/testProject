import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testProject';

  checkStrings(s1, s2) {
    if(s1.length === 0) return false;
    const result: Boolean = true;
    let i = 0, j = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1.charAt[i].equals(s2.charAt[j])) {
        i++;
        j++;
        continue;

      }
      else {
        return false;
      }
    }
  }
  //tetst
}
