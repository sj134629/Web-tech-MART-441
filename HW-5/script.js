var imageTags = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10",];

var blankImagePath = "./images/bgimg.jpg";

var matchImages = new Array();

function printBlanks()
{

    RandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }



}

function RandomImageArray()
{
    var matchImagePath = ["./images/cute.jpg", "./images/hide.jpg", "./images/sphynx.jpg", "./images/yellow.jpg","./images/black.jpg", "./images/orange.jpg", "./images/baby.jpg", "./images/small.jpg", "./images/calico.jpg", "./images/white.jpg"];
    var count = [0,0,0,0,0,0,0,0,0,0];
    while(matchImages.length < 10)
    {

        var randomNumber = Math.floor(Math.random() * matchImagePath.length)

        if(count[randomNumber] < 2);
        {
            matchImages.push(matchImagePath[randomNumber]);

            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipCard(number)
{
    document.getElementById(imageTags[number]).src= matchImages[number];


}
