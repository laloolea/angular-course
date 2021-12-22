import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', //Selecting by element
  //selector:'.app-servers',//Selecting by class
  selector:'app-servers',//Selecting by name
  // template: `
  //             <app-server></app-server>
  //             <app-server></app-server>
  //           `,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean=false;
  serverCreationStatus:string ='No Server was created!';
  serverName=''; 
  serverCreated:boolean=false;
  servers=['Testserver','Testserver 2'];
  constructor() {
      setTimeout(()=>{
        this.allowNewServer=true;
      },2000);
   }

  ngOnInit(): void {
  }
  onCreateServer(){
    if(this.serverName !==""){
      this.serverCreated=true;
      this.servers.push(this.serverName);
      this.serverCreationStatus="Server was created! Name is: " +this.serverName ;
    }
  
  }
  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
