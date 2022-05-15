var currentGalleryPosition = 0;
var currentFocusElementPositionIndex = 0;

function changeGalleryPosition(dir){
    let swipeGalleryContainer = document.querySelector('.swipeContainer');
    let galleryWidth = swipeGalleryContainer.offsetWidth;

    var children = swipeGalleryContainer.children;
    var cumulativeWidth = 0;
    var stepSize = 0;

    for (var i = 0; i < children.length; i++) {
        var currentChild = children[i];
        cumulativeWidth += currentChild.offsetWidth;
    }

    cumulativeWidth -= 5;
    stepSize = cumulativeWidth / children.length;

    currentGalleryPosition = clamp(0, cumulativeWidth - galleryWidth, currentGalleryPosition + stepSize * dir);
    
    for (var i = 0; i < children.length; i++) {
        var currentChild = children[i];
        currentChild.style.transform = "translateX(-" + currentGalleryPosition + "px)";
    }
}

function clamp(min, max, val){
    if(val < min)
        return min;
    else if(val > max)
        return max;
    else
        return val;
}
