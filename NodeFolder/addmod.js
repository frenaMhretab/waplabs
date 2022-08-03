   
   /**
    * 
    * addmod.js
    */
   
   exports.add = function (req,res,vals) {
    let sum = parseFloat(vals.first) + parseFloat(vals.second);
    res.writeHead(200, {'Content-Type': 'text/html'});
    const content = 
    `<!DOCTYPE html>
    <html>
    <head>
    <meta charset=\"utf-8\"/>
    <title>Calculator Web Application</title>
    </head>
    <body>
    <p><h2>The sum is: ${String(sum)}<h2></p>
    </body>
    </html> `;
    res.write(content); 
    return res.end();
    };