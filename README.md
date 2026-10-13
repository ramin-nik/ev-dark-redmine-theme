# Evolution Dark - Redmine theme (offline)

1. Copy this folder to:  <redmine>/public/themes/evolution-dark/
   (final path: public/themes/evolution-dark/stylesheets/application.css)
2. Restart Redmine (Passenger: touch tmp/restart.txt).
3. Administration > Settings > Display > Theme = "Evolution Dark" > Save.

Requires Redmine 4.1+ (for javascripts/theme.js; the CSS alone works on older versions).
No external resources are loaded. Colors live in the :root block at the top of application.css.
