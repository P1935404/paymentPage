$(document).ready(function () { //when dom is ready then excute the codes . class name , # would be id, img html tag ( no # no . then an element )
    var fed_lightbox_img = $(".fed-lightbox img"); //the space is the descendant and reference is found and will assign to the variable
    var lightboxModal = $("#lightbox-modal"); // .fed-lightbox img, is a img object

    var total_img = fed_lightbox_img.length;
    var img_index = 0; //index for the image

    fed_lightbox_img.css("cursor", "pointer");
    fed_lightbox_img.click(function () {
        img_index = parseInt(fed_lightbox_img.index(this));
        showImg();
        lightboxModal.modal("show"); //using a method to apply for the ccs for pointer, click = event, annoymous call back function by "click" event. "this" is the current that you click.
    });

    $(".lightbox-prev").click(movePrev);
    $(".lightbox-next").click(moveNext);

    function moveNext() {
        img_index++;
        if (img_index >= total_img) {
            img_index = total_img - 1;
            return;
        }
        showImg();
    }

    function movePrev() {
        img_index--;
        console.log(img_index);
        if (img_index < 0) {
            img_index = 0;
            return;
        }
        showImg();
    }

    function showImg() {
        var imgsrc = fed_lightbox_img.eq(img_index).attr("src");
        var imgalt = fed_lightbox_img.eq(img_index).attr("alt");
        var imgcounter = "(" + (img_index + 1) + " of " + total_img + ")";
        var img = `<img src="${imgsrc}" class="lightbox-img w-100">`;
        lightboxModal.find(".lightbox-img-holder").html(img);
        lightboxModal.find(".lightbox-img-title").html(imgalt);
        lightboxModal.find(".lightbox-img-counter").html(imgcounter);
        $(".lightbox-img").click(moveNext); //receive the reference to the method by not puting bracket
        $(".lightbox-img").click(movePrev);
        $(".lightbox-img").css("cursor", "pointer");
    }
});
