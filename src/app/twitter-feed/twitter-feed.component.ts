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
    (function(tweets) {
      const webSocket = new WebSocket('ws://localhost:3001');
      webSocket.onmessage = (message) => tweets.unshift(JSON.parse(message.data).text);
    }(this.tweets));
  }
}
