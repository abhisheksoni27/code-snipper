const utility = require('./utility.js');
const fs = require('fs');
const webshot = require('webshot');
const gm = require('gm').subClass({imageMagick: true});

var options = {
    siteType: 'html',
    zoomFactor: 2.0
}

fs.readFile('practice.js', (err, data) => {
    if (!err) {
        const fileString = utility.prettify(data.toString());
        const html = `<html><head><link href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/github.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/highlight.min.js"></script> <script>hljs.initHighlightingOnLoad();</script> </head><body><pre><code>
${fileString}
        </pre></code></body></html>`

        fs.writeFile('highlighted.html', html, (err) => {
            webshot(html, "finalImage.png", options, (err) => {
                gm('finalImage.png')
                    .trim()
                    .trim()
                    .borderColor("#f8f8f8")
                    .border(20, 20)
                    .write('finalImage.png', (err) => {});
            })
        });

    }
});