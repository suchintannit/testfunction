const formHTML = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Newsletter Sign Up</title>
  </head>
  <body>
    <h1>Subscribe to our newsletter</h1>
    <form action="submit" method="get">
        <label>Email
            <input name="ECG file MAT" value="upload" required="required" type="file">
        </label>
        <input type="submit" value="Submit">
    </form>

  </body>
</html>`;
exports.handler = async message => {
  console.log(message);

  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/html'},
    body: formHTML
  };
};
