// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';

// of(1, 2, 3).pipe(map((x) => x + '!!!')); // etc




// import * as rxjs from 'rxjs';
// import * as operators from 'rxjs';

// rxjs.of(1, 2, 3).pipe(operators.map((x) => x + '!!!')); // etc;


// const { range, filter, map } = rxjs;

// range(1, 200)
//   .pipe(
//     filter((x) => x % 2 === 1),
//     map((x) => x + x)
//   )
//   .subscribe((x) => console.log(x));

  const { range } = rxjs;
const { filter, map } = rxjs.operators;

range(1, 200)
  .pipe(
    filter((x) => x % 2 === 1),
    map((x) => x + x)
  )
  .subscribe((x) => console.log(x));

//   const { of } = rxjs;
// const { map } = rxjs.operators;

// of(1, 2, 3).pipe(map((x) => x + '!!!')); // etc

