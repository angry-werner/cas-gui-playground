import { Component } from '@angular/core';

@Component({
  selector: 'app-twitter-feed',
  templateUrl: './twitter-feed.component.html',
  styleUrls: ['./twitter-feed.component.css']
})
export class TwitterFeedComponent {
  private webSocket: WebSocket;
  tweets;

  constructor() {
    this.tweets = [];
    let foo = this.tweets;
    this.webSocket = new WebSocket('ws://localhost:3001');
    this.webSocket.onmessage = (message) => foo.unshift(JSON.parse(message.data).text);
  }
}
