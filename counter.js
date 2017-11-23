const tweetBoxSelector = 'RichEditor-container';
const counterSelector = 'js-countdown-counter';
const editorSelector = '.tweet-box.rich-editor';

// For each of the tweet boxes on page, observe the changes
Array.from(document.getElementsByClassName(tweetBoxSelector)).forEach((item) => {

  const target = item.querySelector(editorSelector);
  const counter = item.getElementsByClassName(counterSelector)[0];

  // Observer to observe the tweet boxes
  const observer = new MutationObserver(() => {

    const text = target.textContent;

    counter.textContent = twttr.txt.getTweetLength(text);

  });

  observer.observe(target, {
    attributes: true,
    childList: true,
    characterData: true,
  });

});
