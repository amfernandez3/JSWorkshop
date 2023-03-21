document.write("<h1>Valores de las propiedades del objeto Navigator</h1>\n<ul>\n");
for ( var prop in navigator ) {
    document.write("<li>"+prop+"------->"+navigator[prop]+"</li>\n");
    if ( prop=="plugins" ) {
    document.write("<ul>\n");
        for ( var i=0; i<navigator.plugins.length; i++ ) {
        document.write("<li>Plug-in numero "+i+"</li>\n<ul>\n");
            for ( var prop in navigator.plugins[i] ) {
            document.write("<li>"+prop+"--->"+navigator.plugins[i][prop]+"</li>\n");
            }
        document.write("</ul>\n");
        }
    document.write("</ul>\n");
    } // if prop==plugins
}
document.write("</ul>\n");