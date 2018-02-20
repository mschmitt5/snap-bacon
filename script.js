$(document).ready(function()
{
    $("#baconButton").click(function()
    {
        $.getJSON('https://baconipsum.com/api/?callback=?',
            { 'type':'all-meat', 'start-with-lorem':'1', 'paras':'6' },
            function(baconGoodness)
            {
                if (baconGoodness && baconGoodness.length > 0)
                {
                    $("#baconIpsumOutput").html('');
                    for (var i = 0; i < baconGoodness.length; i++)
                        $("#baconIpsumOutput").append('<p>' + baconGoodness[i] + '</p>');
                    $("#baconIpsumOutput").show();
                }
            });
    });
});

