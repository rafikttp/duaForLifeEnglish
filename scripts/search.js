function initSearch(){getParameterByName("q")&&(q=decodeURIComponent(getParameterByName("q")),$searchInput.val(q),execSearch(q)),$(document).on("submit",$searchForm,function(a){a.preventDefault(),q=$searchInput.val(),execSearch(q)})}function execSearch(a){(""!=a||allowEmpty)&&(showLoader&&toggleLoadingClass(),getSearchResults(processData()))}function toggleLoadingClass(){$resultsPlaceholder.toggleClass(loadingClass),$foundContainer.toggleClass(loadingClass)}function getSearchResults(a){$.get(jsonFeedUrl,a,"json")}function processData(){return $results=[],function(a){var b=0,c="";$.each(a,function(a,d){if("true"!=d.search_omit&&(d.content.toLowerCase().indexOf(q.toLowerCase())>-1||d.title.toLowerCase().indexOf(q.toLowerCase())>-1)){var e=populateResultContent($resultTemplate.html(),d);b++,c+=e}}),showLoader&&toggleLoadingClass(),populateResultsString(b),showSearchResults(c)}}function showSearchResults(a){$resultsPlaceholder.html(a)}function populateResultContent(a,b){return a=injectContent(a,b.title,"##Title##"),a=injectContent(a,b.link,"##Url##"),a=injectContent(a,b.excerpt,"##Excerpt##"),a=injectContent(a,b.date,"##Date##")}function populateResultsString(a){$foundTerm.text(q),$foundCount.text(a),$foundContainer.show()}function getParameterByName(a){var b=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search);return b&&decodeURIComponent(b[1].replace(/\+/g," "))}function injectContent(a,b,c){var d=new RegExp(c,"g");return a.replace(d,b)}var q,jsonFeedUrl="/feeds/feed.json",$searchForm=$("[data-search-form]"),$searchInput=$("[data-search-input]"),$resultTemplate=$("#search-result"),$resultsPlaceholder=$("[data-search-results]"),$foundContainer=$("[data-search-found]"),$foundTerm=$("[data-search-found-term]"),$foundCount=$("[data-search-found-count]"),allowEmpty=!0,showLoader=!0,loadingClass="is--loading";$(document).ready(function(){$foundContainer.hide(),initSearch()});