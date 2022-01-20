   // Defining Array
   let inputArray = [];
   let newArray = [];
   let screen1 = document.getElementById("firstScreen");
   let screen2 = document.getElementById("SecondScreen");
   let buttons = document.getElementsByClassName("button1"); // []

   screen1.style.display = "block";
   screen2.style.display = "none";
   // Input
   function insert()
   {
        for (let i = 0; i < 3; i++)
        {
            inputArray[i] = prompt('Enter any word: ');
        }
        firstDisplay();
    }

    // firstDisplay Values
    function firstDisplay()
    {   
        let list = document.getElementById("myList");   

        inputArray.forEach((item) => 
        {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });

        
    }
    //--------------------------------------------------------------------------------------
    //Swapping the first and last charcters in words

    function swapWords()
    {
        newArray = inputArray.map(swap);
        function swap(item)
        {
            return item.charAt(item.length - 1) + item.substring(1, item.length - 1) + item.charAt(0);
        };  
        secondDisplay();
        screen1.style.display = "none";
        screen2.style.display = "block";
    }

    function secondDisplay()
    {
        let list = document.getElementById("myList2"); 

        buttons[0].style.display = "none";
        buttons[1].style.display = "none";

        newArray.forEach((item) => 
        {
            let li = document.createElement("li");
            li.innerText = item;
            list.appendChild(li);
        });

    }