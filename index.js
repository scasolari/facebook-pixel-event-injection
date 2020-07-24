function facebook(pixel_id, event) {
    if (pixel_id === undefined){
        return console.log('No pixel ID supported')
    } else {
        if (typeof pixel_id !== "string") throw new TypeError("id wants a string");
        let custom_event_object = [];
        for(let key in event){
            if (event.hasOwnProperty(key)) {
                custom_event_object.push("fbq('"+key+"', '"+event[key]+"')");
            }
        }
        if (typeof event !== "object") throw new TypeError("event wants an object");
        return document.write("<script>!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', "+pixel_id+");"+custom_event_object.join(";")+"</script>")
    }
};
module.exports = facebook;
