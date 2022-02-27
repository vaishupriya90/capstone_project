using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace backend
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((hostingContext, config) =>
                {
                    config.SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                        .AddJsonFile($"appsettings.{hostingContext.HostingEnvironment.EnvironmentName}.json", optional: true, reloadOnChange: true)
                        .AddUserSecrets<Program>(optional: true)
                        .AddEnvironmentVariables();
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    var port = Environment.GetEnvironmentVariable("PORT");
                    webBuilder.UseStartup<Startup>();
                    // webBuilder.UseUrls($"https://*");
                    webBuilder.UseUrls("http://the-art-shop-api.herokuapp.com", "https://the-art-shop-api.herokuapp.com");
                    // webBuilder.UseUrls("http://the-art-shop-api.herokuapp.com:80/");
                });
    }
}
