import Clock from './Clock';

type DateString = String;

// fn parse(datestring: DateString): Date;
// fn stringify(date: Date): DateString;

export function parse(datestring: DateString, clock: Clock): Date {
  return clock.now();
}
