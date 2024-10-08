// type AllType = {
//  name: string;
//  position: number;
//  color: string;
//  weight: number
// }

// function compare (top, bottom): AllType {
//  return {
//   name: top.name,
//   color: top.color,
//   position: bottom.position,
//   weight: bottom.weight,
//  }
// }

type AllType = {
 name: string;
 position: number;
 color: string;
 weight: number
}

function compare<T extends Partial<AllType>>(top: T, bottom: T): AllType {
  return {
    name: top.name ?? bottom.name ?? '',                 
    position: top.position ?? bottom.position ?? 0,
    color: top.color ?? bottom.color ?? '',
    weight: top.weight ?? bottom.weight ?? 0,
  };
}
