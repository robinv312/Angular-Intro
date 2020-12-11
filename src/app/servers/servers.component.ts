import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName = 'TestServer';
  data = "hello angular"
  serverCreated = false;
  servers = ['TestServer1','TestServer2']
  serverCreationStatus: string = "no server was created";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {

    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "server was created";
  }
  onUpdateServerName(event: Event) {
    this.serverName=(<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
  }


}
