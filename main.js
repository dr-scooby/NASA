document.getElementById("button").addEventListener("click", getFetch)

function getFetch(){
    const choice = document.querySelector('input').value

    console.log(choice)

    console.log("nasa...")
    // this url is default photo of the day api:
    const url = 'https://api.nasa.gov/planetary/apod?api_key=ACL8AuIlOneBHwiUvmqkGGZf52RGcREoXyt8e86z'
    // make another url with the date selector
    const url2 = `https://api.nasa.gov/planetary/apod?api_key=ACL8AuIlOneBHwiUvmqkGGZf52RGcREoXyt8e86z&date=${choice}`
    console.log(url2)
    
    // clear out data on the webpage
    document.querySelector('img').src = ""
    document.querySelector('iframe').src = ""
    document.getElementById("title").innerHTML = ""
    
    fetch(url2)
     .then(res => res.json())
     .then(data =>{
         console.log(data)
         // check if media type is image or video
         if( data.media_type === 'image'){
            document.querySelector('img').src = data.hdurl
         }else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
         }
         
         document.getElementById("title").innerHTML = data.title
         document.getElementById("explanation").innerHTML = data.explanation
         document.getElementById("date").innerHTML = data.date
         document.getElementById("url").innerHTML = data.url
         document.querySelector('a').href = data.url
     })
     .catch(err =>{
         console.log(`error ${err}`)
     });
}