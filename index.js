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

newImage('assets/green-character.gif',100,0)
newImage('assets/pine-tree.png',400,0)
newImage('assets/boulder.png', 200, 0)
newImage('assets/pillar.png', 250, 0)
newImage('assets/rock.png', 300, 0)
newImage('assets/tree.png', 500, 0)
newImage('assets/well.png',550, 0)

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

newItem('assets/sword.png', 500, 405)
newItem('assets/shield.png', 165, 185)
newItem('assets/staff.png',600,100)