/*
 {
   language: "<Language Name>",
   prismLanguage: "<(optional) code highlighting language for Prism if it differs from the language name>",
   library: "<Library Name>",
   snippet: "<Path to file in /public/snippets>"
 }
 */
export function languages(): {
  language: string,
  prismLanguage?: string,
  library: string,
  snippet: string,
}[] {
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
    {
      language: "Java",
      library: "OkHttp",
      snippet: "java/okhttp.txt"
    },
    {
      language: "Java",
      library: "HttpRequest",
      snippet: "java/httprequest.txt"
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
      library: "http",
      snippet: "nodejs/http.txt"
    },
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
    },

    //// PowerShell
    {
      language: "PowerShell",
      prismLanguage: "powershell",
      library: "Invoke-RestMethod",
      snippet: "powershell/Invoke-RestMethod.txt"
    },

    {
      language: "PowerShell",
      prismLanguage: "powershell",
      library: "Invoke-WebRequest",
      snippet: "powershell/Invoke-WebRequest.txt"
    },

    //// C#
    {
      language: "C#",
      prismLanguage: "csharp",
      library: "HttpClient",
      snippet: "csharp/httpclient.txt"
    },

    //// Python
    {
      language: "Python",
      prismLanguage: "python",
      library: "requests",
      snippet: "python/requests.txt"
    },

    //// Ruby
    {
      language: "Ruby",
      prismLanguage: "ruby",
      library: "Faraday",
      snippet: "ruby/faraday.txt"
    },

    //// Bash
    {
      language: "Bash",
      library: "curl",
      snippet: "bash/curl.txt"
    },
    {
      language: "Bash",
      library: "wget",
      snippet: "bash/wget.txt"
    },
    {
      language: "Bash",
      library: "uclient-fetch",
      snippet: "bash/uclient-fetch.txt"
    },
  ]
}
