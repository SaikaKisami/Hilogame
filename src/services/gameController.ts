export function controlWithKey(event: KeyboardEvent) {
  switch (event.key) {
    case " ":
      event.preventDefault();
      console.log('the space is pressed!');
      break;
    case "s":
        console.log('the s is pressed!');
      break;
    case "a":
        console.log('the a is pressed!');
      break;
    case "d":
        console.log('the d is pressed!');
      break;
    case "q":
        console.log('the q is pressed!');
      break;
    case "w":
        console.log('the w is pressed!');
      break;
    case "e":
        console.log('the e is pressed!');
      break;
    case "r":
        console.log('the r is pressed!');
      break;
    default:
      break;
  }
}
