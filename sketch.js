let values = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / 15));
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height / 2)
    }
    let sorted = quickSort(values, 0, values.length - 1);
}

async function quickSort(arr, start, end) {
    if (start < end) {
        let index = await partition(arr, start, end);
        quickSort(arr, start, index - 1)
        quickSort(arr, index + 1, end)
    }
    else {
        return arr;
    }
}

async function partition(arr, start, end) {
    let pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    await swap(arr, end, pivotIndex);
    return pivotIndex;
}

async function swap(arr, pos1, pos2) {
    await sleep(50);
    let tmp = arr[pos1];
    arr[pos1] = arr[pos2];
    arr[pos2] = tmp;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function draw() {
    background(51);
    for (let i = 0; i < values.length; i++) {
        noStroke();
        rect(i * 15, (height / 1.5) - values[i], 10, values[i])
    }
}