using System;

namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }


        public int StatusCode { get; set; }
        public string Message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad request, you have made",
                401 => "Authrozed, you are not",
                404 => "Resource found, it was not",
                500 => "Errors are the path tp the dark side, Error lead to anger, Anger leads to hate. lead to career change",
                _ => null
            };
        }

    }
}