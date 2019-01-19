const arr = ['å2','ä1','ö3'].sort((a,b) => a.localeCompare(b, 'sv'));
console.log(arr);