/*
 {
   language: "<Language Name>",
   prismLanguage: "<(optional) code highlighting language for Prism if it differs from the language name>",
   library: "<Library Name>",
   snippet: "<Path to file in /public/snippets>"
 }
 */
function languages() {
  return [

    //// Java
    {
      language: "Java",
      library: "URLConnection",
      snippet: "java/urlconnection.txt"
    },
    {
      language: "Java",
      library: "Jsoup",
      snippet: "java/jsoup.txt"
    },

    //// PHP
    {
      language: "PHP",
      library: "cURL",
      snippet: "php/curl.txt"
    },

    //// NodeJS
    {
      language: "NodeJS",
      prismLanguage: "javascript",
      library: "request",
      snippet: "nodejs/request.txt"
    },

    {
      language: "NodeJS",
      prismLanguage: "javascript",
      library: "axios",
      snippet: "nodejs/axios.txt"
    }
  ]
}
