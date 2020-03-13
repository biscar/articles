class ArticlesChannel {
  constructor(store) {
    this.channel = App.cable.subscriptions.create({
      channel: 'ArticlesChannel'
    }, {
      connected: function() {},
      disconnected: function() {},
      received: function() {
        store.loadArticles();
      },

      articlesIndex: function() {
        this.perform('index');
      }
    });
  }
}

export default ArticlesChannel;
