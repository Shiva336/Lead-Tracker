let myLeads = []
const inputEl=document.getElementById("input_el")
const inputBtn=document.getElementById("input_btn")   // we don't want them to be reassigned. hence, const.
const  unEl=document.querySelector("#un_list_el")

inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)  // whatever url is entered in the input field will get stored in the array when the user clicks the save input button.

        inputEl.value=""

        renderLeads()
})

function renderLeads() {
        let listItems= ""

        for(let i=0; i<myLeads.length; i++)
        {
            //unEl.innerHTML+= "<li>" + myLeads[i] + "</li>"  //changing/Adding HTML elements using JAVASCRIPT. Absolute Superpower!!

            /* alternate way 
                        const li = document.createlement("li")
                        li.textcontent=myLeads[i]
                        unEl.append(li)  */

            //listItems+=  "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a> </li>"      //for better performance. UNDERSTAND THE "" ' ' mix up.

            listItems+=` 
            <li>
                        <a target='_blank' href='${myLeads[i]}'>             
                                ${myLeads[i]} 
                        </a>
            </li>`                                                                                      //best way to do it. use backticks.
                                                                                //target='_blank' is used to make the link open in a new tab.
        }

        unEl.innerHTML=listItems
}

//TEMPLATE STRINGS ARE FUKCING USEFUL. ` sjsjjss ${  } llsls`