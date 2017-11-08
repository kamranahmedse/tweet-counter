const tweetBoxSelector = '.RichEditor-container';
const counterSelector = '.js-countdown-counter';
const editorSelector = '.tweet-box.rich-editor';

// Populates the tweet character count
const populateCount = (target) => {
    const $target = $(target);
    const $counter = $target.closest(tweetBoxSelector).find(counterSelector);

    let text = $target.text();

    $counter.html(twttr.txt.getTweetLength(text));
};

// For each of the tweet boxes on page, observe the changes
$(tweetBoxSelector).each(function () {
    const target = $(this).find(editorSelector).get(0);

    // Observer to observe the tweet boxes
    const observer = new MutationObserver(mutations => {
        mutations.forEach((mutation) => populateCount(target));
    });

    observer.observe(target, {
        attributes: true,
        childList: true,
        characterData: true,
    });
});