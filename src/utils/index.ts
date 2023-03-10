
export function mapModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}

export function mapModifiersTailWind(
  baseClassName: string = '',
  ...modifiers: (
    | string
    | string[]
    | false
    | undefined
    | GlobalTailWindClassName
    | Modifiers
  )[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${suffix}`,
      baseClassName,
    );
}


const utils = {
  mapModifiers,
  mapModifiersTailWind,
};



export default utils;
