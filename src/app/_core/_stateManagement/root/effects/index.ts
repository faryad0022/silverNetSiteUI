import { UserEffects } from './user-effects';
import { UserRoleEffects } from './userRole-effects';
export * from './userRole-effects';
export * from './user-effects';


export const rootEffects: any[] = [
    UserEffects,
    UserRoleEffects
];
