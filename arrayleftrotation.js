// Function to rotate an array to the left by 'n' positions
function rotateLeft(arr, n) {
    // Normalize n in case it's larger than array length
    n = n % arr.length;
    
    // Slice and concatenate the array
    return arr.slice(n).concat(arr.slice(0, n));
}

// Example usage
const array1 = [1, 2, 3, 4, 5];
const leftRotations = 2;
const rotatedArrayLeft = rotateLeft(array1, leftRotations);

console.log(`Array after ${leftRotations} left rotations:`, rotatedArrayLeft);
