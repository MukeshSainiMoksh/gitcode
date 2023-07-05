document.addEventListener("DOMContentLoaded", function() {
    var deleteButton = document.getElementById("deleteButton");
  
    deleteButton.addEventListener("click", function() {
      chrome.history.search({text: "", maxResults: 1}, function(results) {
        if (results.length > 0) {
          var historyItem = results[0];
          chrome.history.deleteUrl({url: historyItem.url}, function() {
            console.log("Deleted history item:", historyItem);
          });
        }
      });
    });
  });
  