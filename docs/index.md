# WorkFindy Bookmarklet for WorkFlowy
- Home Page WorkFlowy Search... from any page. 

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function(){var sel=window.getSelection().toString();var find=sel?sel:prompt('Search WorkFlowy:','');if(find===null){return;}else{var home='https://workflowy.com/#';var search=find===''?home:home+'?q='+encodeURIComponent(find);location.href.indexOf('workflowy.com/')===-1?window.open(search):location.href=search;}})();">WorkFindy</a>


## Links:
- [Source code](https://github.com/rawbytz/workfindy-BM/blob/master/WorkFindyBM.js)
- [rawbytz Blog](https://rawbytz.wordpress.com/2015/12/13/workfindy-search-workflowy-from-anywhere/)
- [A way better version of this.... the WFx Chrome Extension](https://chrome.google.com/webstore/detail/wfx-for-workflowy/jbehgpdjkcconnaagjhddddfdajbpfhi)


<!-- 
LINKS REFERENCING THIS
@SOFTWARE https://rawbytz.wordpress.com/software/

@BLOG https://rawbytz.wordpress.com/2015/12/13/workfindy-search-workflowy-from-anywhere/

@WFBLOG https://blog.workflowy.com/?s=workfindy
 -->
