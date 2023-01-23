/*
let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '0px'
document.body.append(greenCharacter)
*/
/*
let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '400px'
pineTree.style.bottom = '0px'
document.body.append(pineTree)
*/

function newImage(src, left, bottom){
    let newImage = document.createElement('img')
    newImage.src = src
    newImage.style.position = 'fixed'
    newImage.style.left = left + "px"
    newImage.style.bottom = bottom + "px"
    document.body.append(newImage)
}
/////////////////////////////////////     SKY     //////////////////////////
newImage('assets/sky.png',0,500)
newImage('assets/sky.png',100,500)
newImage('assets/sky.png',200,500)
newImage('assets/sky.png',300,500)
newImage('assets/sky.png',400,500)
newImage('assets/sky.png',500,500)
newImage('assets/sky.png',600,500)
newImage('assets/sky.png',700,500)
newImage('assets/sky.png',800,500)

newImage('assets/sky.png',0,600)
newImage('assets/sky.png',100,600)
newImage('assets/sky.png',200,600)
newImage('assets/sky.png',300,600)
newImage('assets/sky.png',400,600)
newImage('assets/sky.png',500,600)
newImage('assets/sky.png',600,600)
newImage('assets/sky.png',700,600)
newImage('assets/sky.png',800,600)

newImage('assets/sky.png',0,700)
newImage('assets/sky.png',100,700)
newImage('assets/sky.png',200,700)
newImage('assets/sky.png',300,700)
newImage('assets/sky.png',400,700)
newImage('assets/sky.png',500,700)
newImage('assets/sky.png',600,700)
newImage('assets/sky.png',700,700)
newImage('assets/sky.png',800,700)

newImage('assets/sky.png',0,800)
newImage('assets/sky.png',100,800)
newImage('assets/sky.png',200,800)
newImage('assets/sky.png',300,800)
newImage('assets/sky.png',400,800)
newImage('assets/sky.png',500,800)
newImage('assets/sky.png',600,800)
newImage('assets/sky.png',700,800)
newImage('assets/sky.png',800,800)

newImage('assets/sky.png',0,900)
newImage('assets/sky.png',100,900)
newImage('assets/sky.png',200,900)
newImage('assets/sky.png',300,900)
newImage('assets/sky.png',400,900)
newImage('assets/sky.png',500,900)
newImage('assets/sky.png',600,900)
newImage('assets/sky.png',700,900)
newImage('assets/sky.png',800,900)
/////////////////////////////////////     SKY     //////////////////////////
/////////////////////////////////////     GRASS     //////////////////////////
newImage('assets/grass.png',0,0)
newImage('assets/grass.png',100,0)
newImage('assets/grass.png',200,0)
newImage('assets/grass.png',300,0)
newImage('assets/grass.png',400,0)
newImage('assets/grass.png',500,0)
newImage('assets/grass.png',600,0)
newImage('assets/grass.png',700,0)
newImage('assets/grass.png',800,0)

newImage('assets/grass.png',0,100)
newImage('assets/grass.png',100,100)
newImage('assets/grass.png',200,100)
newImage('assets/grass.png',300,100)
newImage('assets/grass.png',400,100)
newImage('assets/grass.png',500,100)
newImage('assets/grass.png',600,100)
newImage('assets/grass.png',700,100)
newImage('assets/grass.png',800,100)

newImage('assets/grass.png',0,200)
newImage('assets/grass.png',100,200)
newImage('assets/grass.png',200,200)
newImage('assets/grass.png',300,200)
newImage('assets/grass.png',400,200)
newImage('assets/grass.png',500,200)
newImage('assets/grass.png',600,200)
newImage('assets/grass.png',700,200)
newImage('assets/grass.png',800,200)

newImage('assets/grass.png',0,300)
newImage('assets/grass.png',100,300)
newImage('assets/grass.png',200,300)
newImage('assets/grass.png',300,300)
newImage('assets/grass.png',400,300)
newImage('assets/grass.png',500,300)
newImage('assets/grass.png',600,300)
newImage('assets/grass.png',700,300)
newImage('assets/grass.png',800,300)

newImage('assets/grass.png',0,400)
newImage('assets/grass.png',100,400)
newImage('assets/grass.png',200,400)
newImage('assets/grass.png',300,400)
newImage('assets/grass.png',400,400)
newImage('assets/grass.png',500,400)
newImage('assets/grass.png',600,400)
newImage('assets/grass.png',700,400)
newImage('assets/grass.png',800,400)
/////////////////////////////////////     GRASS     //////////////////////////

newImage('assets/green-character.gif',100,50)
newImage('assets/pine-tree.png', 100, 100)
newImage('assets/boulder.png', 0, 400)
newImage('assets/pillar.png', 700, -30)
newImage('assets/rock.png', 500, 300)
newImage('assets/tree.png', 600, 400)
newImage('assets/well.png', 350, 200)

/*let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.style.position = 'fixed'
sword.style.left = '500px'
sword.style.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})*/

function newItem(src, left, bottom){
    let newItem = document.createElement('img')
    newItem.src = src
    newItem.style.position = 'fixed'
    newItem.style.left = left + "px"
    newItem.style.bottom = bottom + "px"
    document.body.append(newItem)

    newItem.addEventListener('dblclick', function(){
        newItem.remove()
    })
}

newItem('assets/sword.png', 150, 435)
newItem('assets/shield.png', 320, 220)
newItem('assets/staff.png',710,20)