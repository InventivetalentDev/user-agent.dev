URL url = new URL("%%url%%");
URLConnection connection = url.openConnection();
connection.setRequestProperty("User-Agent", "%%useragent%%");
