class RemoveArticleChannel {
  constructor(store) {
    this.channel = App.cable.subscriptions.create({
      channel: 'RemoveArticleChannel'
    }, {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        store.removeArticleFromStore(data['article_id']);
      }
    });
  }
}

export default RemoveArticleChannel;