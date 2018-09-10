namespace API.Helpers
{
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    public class HttpHelper
    {
        internal static void Throw(string content, HttpStatusCode status)
        {
            HttpResponseMessage responseMessage = new HttpResponseMessage(status);
            responseMessage.Content = new StringContent(content);
            throw new HttpResponseException(responseMessage);
        }
    }
}