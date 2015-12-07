# Summary

Write user stories in Markdown, list the implementation tasks for each (with an estimation range),
publish an interactive estimation document, like [that one](https://ikr.su/h/estimates-template/).

# Installation

Clone this repository into a directory of a new estimation project

    $ git clone https://github.com/ikr/estimates-template.git ./estimates-foobar
    $ cd ./estimates-foobar
    $ rm -rf ./.git

Describe your estimation project in the `./package.json` properties. Then, install the npm
dependencies

    $ npm install
    
# Authoring

Edit the header and footer HTML in the `./index.js`.

Rename `./stories/one` and `./stories/two` into something relevant to your problem domain, and register
the new names in the `./content.js` file. Go edit the Markdown in the `./stories/*/narrative.md`
files; put your implementation tasks, with the estimation ranges (in hours) into the
`./stories/*/tasks.json` files.

Then, by analogy, add more `./stories/*` directories. Place all the image files into the `./www`
directory.

# Compilation

When done, build the interactive estimation document.

    $ npm run build

Now it can be Web-published, with the `./www/index.html` as the entry point. Here's a sample Nginx
configuration snippet

    location /estimates-foobar/ {
        alias /var/www/example.com/estimates-foobar/www/;
    }

defining the `http://example.com/estimates-foobar/` route.

# Automatic update

There's also a `watch` script, that can auto-build the estimation document every time you change
it. That's quite useful for the active user stories writing and estimation phase.

    $ npm run watch

Please note that `watch` doesn't minify the output JavaScript bundle, and thus isn't suitable for
production use.
