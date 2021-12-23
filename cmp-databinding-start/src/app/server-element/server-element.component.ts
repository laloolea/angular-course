import {
   Component, 
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit,
 OnChanges,
 DoCheck,
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy{

  @Input('srvElement') element:{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild("heading",{static:true}) header:ElementRef;
  @ContentChild('contentParagraph',{static:true}) paragraph:ElementRef;


  constructor() { 
    console.log("constructor called");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy called");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
  ngAfterContentChecked(): void {
   console.log("ngAfterContentChecked called");
  }
  ngAfterContentInit(): void {
    console.log("NgContentInit called");
    console.log('Text content of paragraph'+this.paragraph);
  }
  ngDoCheck(): void {
    console.log("NgDoCheck Called");
  }

  ngOnChanges(changes:SimpleChanges){
    console.log("ngOnChanges called");
    console.log(changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit called");
    console.log("Text content" +this.header.nativeElement.textContent);
    console.log('Text content of paragraph'+this.paragraph);
  }

  
}
