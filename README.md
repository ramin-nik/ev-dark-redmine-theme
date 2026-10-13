# Ev Dark - Redmine theme (By Ramin)

1. Copy this folder to:  <redmine>/public/themes/Ev-dark/
   (final path: public/themes/Ev-dark/stylesheets/application.css)
2. Restart Redmine (Passenger: touch tmp/restart.txt).
3. Administration > Settings > Display > Theme = "Ev Dark" > Save.

Requires Redmine 4.1+ (for javascripts/theme.js; the CSS alone works on older versions).
No external resources are loaded. Colors live in the :root block at the top of application.css.
