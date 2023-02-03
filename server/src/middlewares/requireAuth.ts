import { Response, Request, NextFunction } from 'express';

export function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.send('Forbidden');
}
