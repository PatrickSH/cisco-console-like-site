$(document).ready(function(){
    
    function type(el,speed,cursor)
    {
        el.typeIt({
            speed: speed,
            lifeLike: false,
            autoStart: true,
            breakLines: true,
            cursor: cursor
        }).tiType('Command list:')
        .tiBreak()
        .tiType('show groupmembers')
        .tiBreak()
        .tiType('show groupmembers brief')
        .tiBreak()
        .tiType("sh groupmembers")
        .tiBreak()
        .tiType("sh grmem br")
        .tiBreak()
        .tiType("something funny")
        .tiBreak()
        .tiType("clear")
        ;
    }

    function clearConsole()
    {
       $('#written-text').empty(); 
    }

    function listGroupMembers(filter)
    {
        if(filter == "br")
        {
            return "<p>Patrick   Tobias   Tom</p>";
        }
        else
        {
            return "<p>Patrick   Tobias   Tom</p><p>Datateknier   IT-supporter   Datatekniker</p>";
        }
    }

    function findText(text)
    {
        console.log(text.toLowerCase().trim());
        switch(text.toLowerCase().trim())
        {
            case "show groupmembers":
                appendToConsole(listGroupMembers("nobr"));
                break;
            case "show groupmembers brief":
                appendToConsole(listGroupMembers("br"));
                break;
            case "sh groupmembers":
                appendToConsole(listGroupMembers("nobr"));
                break;
            case "sh grmem br":
                appendToConsole(listGroupMembers("br"));
                break;  
            case "clear":
                clearConsole();
                break;
            case "something funny":
                window.open("https://www.youtube.com/watch?v=n2D1o-aM-2s");
                break;
            default:
                appendToConsole("Could not recognize command");         

        }
    }

    function appendToConsole(text)
    {
        $("#written-text").append("<br>"+text);
        $("#console").val('');
    }

    setTimeout(function(){
        type($('#written-text'),15,false);
    },200);



    $("#console").on('keyup',function(e){
        if(e.which == 13) //Enter was clicked
        {
            findText($(this).val());
        }
    });

});