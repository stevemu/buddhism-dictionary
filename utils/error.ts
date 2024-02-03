/* eslint-disable @typescript-eslint/no-explicit-any */
export class ErrorWithContext extends Error {
  constructor(public message: string, public context: any) {
    super(message);
  }
}
