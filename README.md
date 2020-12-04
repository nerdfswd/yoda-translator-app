# Yoda Speak Translator App - A Javascript Web App.

Here, JS is used to make a minion speak Translator app.

 Steps to create this web app are as follows:

1. First write a simple html program containing a header, 2 textareas, one button and a footer.

1. Style it as per your wish.

1. Then coming to app.js file. (To me, some JS concepts are scaryyy..If you feel the same while looking the above app.js file contents then dont feel... I got your back. Here, Iam going to explain you the step-by-step procedure.)

     1. create some variables to store the ids or classes of html contents like button id, 2 textareas ids.
     2. Take a server API url. Here, I used https://api.funtranslations.com/translate/yoda.json
        You can find many APIs at funtranslations.com
     3. create a function say, getTranslationURL where it takes input from user. (This will be tough for me to describe in words)
     4. Before adding point 3, I want you to understand this below topic:
              
               var url="something url goes here.."
               fetch(url)
               .then(response => response.json())
               .then(json => console.log(json))

               Here, first we take any server API url and fetch that url. It gives us a response in json format and then we print that json.
               These all should be done in browser console for better understanding. There in JSON we want that translated text which is our output.

     5. So, for easily understanding we write functions to do the work. And we'll add some errorHandlers .catch() to it.

        1. Brief steps for 3,4,5 points will be:
         
         input:           someURL?text='Iam hungry'
         processing:      fetch()....functions
         output:          output textarea id.innerText = TranslatedText

         innerText - writes text in the respected  textarea box (here)
         innerHTML - writes HTML directly.

1. Okay. I think I made it clear. That's it. You are ready to go. And also, test , my banana talk app by clicking the link in the description box.

NOTE: If you haven't understand, don't worry. Go to youtube and Type 'TanayPratap JavaScript in the browser for neogcamp' video. He explained very well. All thanks to him, as I have made this web app with his help. Thank you TANAY Sir.

For any queries, you can DM me on www.instagram.com/im__sabiya/
