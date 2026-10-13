/* Evolution Dark: labels for icon-only menu links (hover flyout / expanded rail) - fully offline */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('#main-menu > ul > li > a, #top-menu li a').forEach(function (a) {
    var t = a.textContent.trim();
    if (t === '+') t = 'New';
    if (t) { a.setAttribute('data-label', t); a.removeAttribute('title'); }
  });

  /* Logo click -> home page: the visual logo is a CSS pseudo-element (body::after),
     which cannot be clickable, so we lay a transparent home-link over it. */
  var rtl = document.documentElement.getAttribute('dir') === 'rtl';
  var logoLink = document.createElement('a');
  logoLink.href = '/'; /* Redmine serves the home page at root */
  logoLink.title = 'Home';
  logoLink.setAttribute('aria-label', 'Home');
  logoLink.style.cssText =
    'position:fixed;top:12px;' + (rtl ? 'right:12px;' : 'left:12px;') +
    'width:32px;height:32px;z-index:41;display:block;border-radius:8px;' +
    'text-indent:-9999px;overflow:hidden;';
  document.body.appendChild(logoLink);
});
