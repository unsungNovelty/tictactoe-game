
const selectSymbol = (() => {
    let firstPlayerSelection = '';
    let secondPlayerSelection = ''
    let firstPlayerSymbol = '';
    let secondPlayerSymbol = '';
    const selections = document.querySelectorAll('.selection');
    const infoElement = document.getElementById('info');

    const selectListener = () => {
        for (let select of selections) {
            select.addEventListener('click', () => {
                if (firstPlayerSelection === '') {
                    
                    firstPlayerSelection = select.innerText;
                    select.style.backgroundColor = 'hsl(210, 2%, 35%)';
                    select.style.color = 'white';
    
                    if (firstPlayerSelection === 'Select - X') {
                        firstPlayerSymbol = 'x';
                        console.log('The first player selected ' + firstPlayerSymbol);
                        secondPlayerSelection = 'Select - O';
                        secondPlayerSymbol = 'o';
                        infoElement.innerText = 'Player 1 - ' + firstPlayerSymbol.toUpperCase() + ' and Player 2 - ' + secondPlayerSymbol.toUpperCase();
                    } else {
                        secondPlayerSymbol = 'x'
                        secondPlayerSelection = 'Select - X';
                        firstPlayerSelection = 'Select - O';
                        firstPlayerSymbol = 'o';
                        infoElement.innerText = 'Player 1 - ' + firstPlayerSymbol.toUpperCase() + ' and Player 2 - ' + secondPlayerSymbol.toUpperCase();
                    }
                    
                }
            });
        }
    }

    let gameArray = [];
    const tiles = document.querySelectorAll('.item');
    const gameboardListener = () => {
        for (let tile of tiles) {
            tile.addEventListener('click', () => {
                if (!firstPlayerSymbol) {
                    infoElement.innerText = 'PLEASE SELECT "X" OR "O" FOR PLAYER 1!'
                } else {
                    if (tile.innerText === '') {
                        userPlays.singleRound(gameArray, tile, tile.dataset.key, firstPlayerSymbol, secondPlayerSymbol);
                    }
                }
            });
        }
    }
    
    return {selectListener, gameboardListener};    

})();

selectSymbol.selectListener();
selectSymbol.gameboardListener();

// Function with methodology
const userPlays = (() => {
    
    const singleRound = (arr, item, dataKey, player1, player2) => {
        const infoElement = document.getElementById('info');
        
        if (arr.length === 0) {
        
            arr.push(new Object);
            let dataKeyString = 'Position: ' + dataKey;
            arr[0][dataKeyString] = player1;
            item.innerText = player1;
            infoElement.innerText = 'Player 1 marked "' + player1.toUpperCase() + '" in postion ' + dataKey;

        
        } else if(arr[0]['Position: 1'] === player1 && arr[0]['Position: 2'] === player1 && arr[0]['Position: 3'] === player1   ||
            arr[0]['Position: 4'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 6'] === player1 ||
            arr[0]['Position: 7'] === player1 && arr[0]['Position: 8'] === player1 && arr[0]['Position: 9'] === player1 ||
            arr[0]['Position: 1'] === player1 && arr[0]['Position: 4'] === player1 && arr[0]['Position: 7'] === player1 ||
            arr[0]['Position: 2'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 8'] === player1 ||
            arr[0]['Position: 3'] === player1 && arr[0]['Position: 6'] === player1 && arr[0]['Position: 9'] === player1 ||
            arr[0]['Position: 1'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 9'] === player1 ||
            arr[0]['Position: 3'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 7'] === player1) {

            infoElement.innerText = 'PLAYER 1 WITH "' + player1.toUpperCase() + '" HAVE WON THE GAME!';

        } else if(arr[0]['Position: 1'] === player2 && arr[0]['Position: 2'] === player2 && arr[0]['Position: 3'] === player2   ||
            arr[0]['Position: 4'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 6'] === player2 ||
            arr[0]['Position: 7'] === player2 && arr[0]['Position: 8'] === player2 && arr[0]['Position: 9'] === player2 ||
            arr[0]['Position: 1'] === player2 && arr[0]['Position: 4'] === player2 && arr[0]['Position: 7'] === player2 ||
            arr[0]['Position: 2'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 8'] === player2 ||
            arr[0]['Position: 3'] === player2 && arr[0]['Position: 6'] === player2 && arr[0]['Position: 9'] === player2 ||
            arr[0]['Position: 1'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 9'] === player2 ||
            arr[0]['Position: 3'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 7'] === player2) {

                infoElement.innerText = 'PLAYER 2 WITH "' + player2.toUpperCase() + '" HAVE WON THE GAME!';

        } else if(arr[0][Object.keys(arr[0])[Object.keys(arr[0]).length -1]] === player1) {
            
                let dataKeyString = 'Position: ' + dataKey;
                arr[0][dataKeyString] = player2;
                item.innerText = player2;

                if (Object.keys(arr[0]).length === 9) {
                    infoElement.innerText = 'Player 2 marked "' + player2.toUpperCase() + '" in postion ' + dataKey + ' AND THIS GAME IS A DRAW!';
                } else if(arr[0]['Position: 1'] === player1 && arr[0]['Position: 2'] === player1 && arr[0]['Position: 3'] === player1   ||
                arr[0]['Position: 4'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 6'] === player1 ||
                arr[0]['Position: 7'] === player1 && arr[0]['Position: 8'] === player1 && arr[0]['Position: 9'] === player1 ||
                arr[0]['Position: 1'] === player1 && arr[0]['Position: 4'] === player1 && arr[0]['Position: 7'] === player1 ||
                arr[0]['Position: 2'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 8'] === player1 ||
                arr[0]['Position: 3'] === player1 && arr[0]['Position: 6'] === player1 && arr[0]['Position: 9'] === player1 ||
                arr[0]['Position: 1'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 9'] === player1 ||
                arr[0]['Position: 3'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 7'] === player1) {
    
                infoElement.innerText = 'PLAYER 1 WITH "' + player1.toUpperCase() + '" HAVE WON THE GAME!';
    
            } else if(arr[0]['Position: 1'] === player2 && arr[0]['Position: 2'] === player2 && arr[0]['Position: 3'] === player2   ||
                arr[0]['Position: 4'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 6'] === player2 ||
                arr[0]['Position: 7'] === player2 && arr[0]['Position: 8'] === player2 && arr[0]['Position: 9'] === player2 ||
                arr[0]['Position: 1'] === player2 && arr[0]['Position: 4'] === player2 && arr[0]['Position: 7'] === player2 ||
                arr[0]['Position: 2'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 8'] === player2 ||
                arr[0]['Position: 3'] === player2 && arr[0]['Position: 6'] === player2 && arr[0]['Position: 9'] === player2 ||
                arr[0]['Position: 1'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 9'] === player2 ||
                arr[0]['Position: 3'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 7'] === player2) {
    
                    infoElement.innerText = 'PLAYER 2 WITH "' + player2.toUpperCase() + '" HAVE WON THE GAME!';
    
            } else {
                    infoElement.innerText = 'Player 2 marked "' + player2.toUpperCase() + '" in postion ' + dataKey;
            }

        
        } else if (arr[0][Object.keys(arr[0])[Object.keys(arr[0]).length -1]] === player2) {
            
                let dataKeyString = 'Position: ' + dataKey;
                arr[0][dataKeyString] = player1;
                item.innerText = player1;

                if(Object.keys(arr[0]).length === 9) {
                    infoElement.innerText = 'Player 1 played ' + player1.toUpperCase() + ' in postion ' + dataKey + ' AND THIS GAME IS A DRAW!';
                } else if(arr[0]['Position: 1'] === player1 && arr[0]['Position: 2'] === player1 && arr[0]['Position: 3'] === player1   ||
                arr[0]['Position: 4'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 6'] === player1 ||
                arr[0]['Position: 7'] === player1 && arr[0]['Position: 8'] === player1 && arr[0]['Position: 9'] === player1 ||
                arr[0]['Position: 1'] === player1 && arr[0]['Position: 4'] === player1 && arr[0]['Position: 7'] === player1 ||
                arr[0]['Position: 2'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 8'] === player1 ||
                arr[0]['Position: 3'] === player1 && arr[0]['Position: 6'] === player1 && arr[0]['Position: 9'] === player1 ||
                arr[0]['Position: 1'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 9'] === player1 ||
                arr[0]['Position: 3'] === player1 && arr[0]['Position: 5'] === player1 && arr[0]['Position: 7'] === player1) {
    
                infoElement.innerText = 'PLAYER 1 WITH "' + player1.toUpperCase() + '" HAVE WON THE GAME!';
    
            } else if(arr[0]['Position: 1'] === player2 && arr[0]['Position: 2'] === player2 && arr[0]['Position: 3'] === player2   ||
                arr[0]['Position: 4'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 6'] === player2 ||
                arr[0]['Position: 7'] === player2 && arr[0]['Position: 8'] === player2 && arr[0]['Position: 9'] === player2 ||
                arr[0]['Position: 1'] === player2 && arr[0]['Position: 4'] === player2 && arr[0]['Position: 7'] === player2 ||
                arr[0]['Position: 2'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 8'] === player2 ||
                arr[0]['Position: 3'] === player2 && arr[0]['Position: 6'] === player2 && arr[0]['Position: 9'] === player2 ||
                arr[0]['Position: 1'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 9'] === player2 ||
                arr[0]['Position: 3'] === player2 && arr[0]['Position: 5'] === player2 && arr[0]['Position: 7'] === player2) {
    
                    infoElement.innerText = 'PLAYER 2 WITH "' + player2.toUpperCase() + '" HAVE WON THE GAME!';
    
            } else {
                    infoElement.innerText = 'Player 1 played ' + player1.toUpperCase() + ' in postion ' + dataKey;
            }

        } else {
            infoElement.innerText = 'SOME ERROR!'
        }
    }

    return {singleRound};

})();
