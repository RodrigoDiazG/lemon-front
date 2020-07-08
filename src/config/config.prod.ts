/**
 * This its the config environment file
 * The docker replaces the file automatically if the react app deploy in production
 */
export class Config {
    public static API: string = 'http://lemon-backend-srv.lemontech.svc.cluster.local:80/api/v1'
}
