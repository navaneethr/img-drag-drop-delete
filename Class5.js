
var drag_images = document.getElementsByClassName('images');
var drop_cntr = document.getElementById('drop_here');
var arr = [];


var img_len = drag_images.length;

for (var i = 0; i < img_len; i++) {
    drag_images[i].addEventListener('dragstart', function (event) {
        event.dataTransfer.setData('cntrID', this.getAttribute('id'));
        console.log('This is ' + event.dataTransfer.getData('cntrID'));
    });
}

drop_cntr.addEventListener('dragover', function (event) {
    event.preventDefault();
    return false;
});

drop_cntr.addEventListener('drop', function (event) {

    console.log('First Array is ' + arr);

    alert(event.dataTransfer.getData('cntrID'));
    var cntrID = event.dataTransfer.getData('cntrID'),
        element = document.getElementById(cntrID);
    console.log(element);
    var imgSrc = element.getAttribute('src');
    console.log(imgSrc);
    var caption = document.getElementById(cntrID + '_txt').innerHTML,
        divID = 'dragged' + cntrID,
        existImg = 'exist' + cntrID;

    if (arr.includes(existImg)) {
        alert('Image Already Existsing');
    }

    else {

        var html = '<div class="draggedImages w3-card" id="' + divID + '"><img class="existingImages" id="' + existImg + '" src="' + imgSrc + '" style="width:100px"/></br>';
        html += '<div class="labelClass"><Label> ' + caption + '</label></div>';
        html += '<input type="button" class="w3-btn w3-green" value="delete" onclick="delImg(' + divID + ')"></div>';
        drop_cntr.innerHTML += html;
        console.log(divID);
        arr.push(existImg);
        console.log('The array is ' + arr)

    }

});

function delImg(val) {


    var delElmID = val.getAttribute('id'); // draggedImg3_Img replaced with existImg3_Img
    var imgID = delElmID.replace('dragged', 'exist'); // using exist to replace dragged 
    console.log(imgID);
    console.log(delElmID);
    var elm = document.getElementById(delElmID);
    elm.parentNode.removeChild(elm);
    var n = arr.indexOf(imgID);

    arr.splice(n, 1);



}