# README
```sh
git clone https://github.com/millette/alssr.git
cd alssr
npm install
node cli.js http://example.com/
```

Outputs rendered html to stdout, errors to stderr. If an error occurs,
the error level is set to 1.

For instance, this will display OK since example.com responds:
```
node cli.js http://example.com/ && echo OK
```

This will not display OK since the URL is missing:
```
node cli.js && echo OK
```
