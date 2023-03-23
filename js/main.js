var pg = location.pathname;
document.writeln("<script type='text/javascript' src='js/template.js'></script>");
if (pg.search("gallery.html") >= 0)
    document.writeln("<script type='text/javascript' src='js/lightbox.js'></script>");
if (pg.search("form-checkout.html") >= 0)
    document.writeln("<script type='text/javascript' src='js/checkout.js'></script>");
if (pg.search("form-contact.html") >= 0 || pg.search("thankyou.html") >= 0)
    document.writeln("<script type='text/javascript' src='js/contact.js'></script>");
/* Last script should always be custom js only */
document.writeln("<script type='text/javascript' src='js/custom.js'></script>");

