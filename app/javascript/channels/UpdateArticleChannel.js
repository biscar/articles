class UpdateArticleChannel {
  constructor(store) {
    this.channel = App.cable.subscriptions.create({
      channel: 'UpdateArticleChannel'
    }, {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        store.updateArticleInStore(data['article']);
      }
    });
  }
}

export default UpdateArticleChannel;