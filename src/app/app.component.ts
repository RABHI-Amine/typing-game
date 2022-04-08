import { Component, OnInit } from '@angular/core';
import SenetencesJSON from '../assets/text.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  sentences = SenetencesJSON;
  randomText!: string;
  solved = false;
  entredText = '';

  ngOnInit(): void {
    this.randomText = this.sentences[Math.floor(Math.random() * this.sentences.length)].sentence; 

  }

  onInput(value:string){
    this.entredText = value;
    if(this.randomText === value){
      this.solved = true;
    }else{
      this.solved = false;
    }
  }
  
compare(entred:string,random:string){
  if(!entred)
    return 'panding'
  
  return entred === random ? 'correct' : 'incorrect';   
}



}
