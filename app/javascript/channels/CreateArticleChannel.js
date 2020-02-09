class CreateArticleChannel {
  constructor(store) {
    this.channel = App.cable.subscriptions.create({
      channel: 'CreateArticleChannel'
    }, {
      connected: function() {},
      disconnected: function() {},
      received: function(data) {
        store.addArticleToStore(data['article']);
      }
    });
  }
}

export default CreateArticleChannel;