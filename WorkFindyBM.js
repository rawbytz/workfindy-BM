//WorkFindy bookmarklet, version 2.0
(function () {
  var sel = window.getSelection().toString();
  var find = sel ? sel : prompt('Search WorkFlowy:', '');
  if (find === null) {
    return;
  } else {
    var home = 'https://workflowy.com/#';
    var search = find === '' ? home : home + '?q=' + encodeURIComponent(find);
    location.href.indexOf('workflowy.com/') === -1 ? window.open(search) : location.href = search;
  }
})();