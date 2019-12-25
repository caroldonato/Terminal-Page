self.addEventListener('message', function(e){
    var date = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    self.postMessage(date)
}, false)