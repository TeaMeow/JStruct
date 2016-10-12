function struct(names)
{
    var names = names.split("\n").map(name =>
    {
        return name.split(/(\s+)/).filter(name => name.trim() !== '')[0]
    }).filter(n => n != undefined)

    var count = names.length
    
    function constructor()
    {
        for (var i = 0; i < count; i++) 
            this[names[i]] = arguments[i]
    }
    
    return constructor
}
